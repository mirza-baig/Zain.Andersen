// Global
import { useState, useEffect } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import {
  Field,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import useSWR from 'swr';
// Components
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { ImagePrimary, Image } from 'src/helpers/Media';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { Question, Answer } from './StormDoorChooseTool.helper';
import { Spinner } from 'src/helpers/Spinner';

export type StormDoorChooseToolProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.Tool.StormDoorChooseTool.StormDoorChooseTool;
const StormDoorChooseTool = (props: StormDoorChooseToolProps) => {
  const { fields } = props;

  const sitecoreContext = useSitecoreContext();
  const language = sitecoreContext.sitecoreContext.language;

  const questionIDStep1 = fields?.children[0]?.id;
  const startOverCtaText = fields?.startOverCtaText?.value;
  const summaryHeadline = fields?.summaryHeadline?.value;
  const youSelectedHeadline = fields?.youSelectedHeadline?.value;
  const questionTextStep1 = fields?.children[0].fields.questionText?.value;
  const breadcrumbTextStep1 = fields?.children[0]?.fields?.breadcrumbText?.value;

  const [allQuestionID, setAllQuestionID] = useState<Question[]>([]);
  const [questionID, setQuestionID] = useState<string>(questionIDStep1);
  const [currentAnswerId, setCurrentAnswerId] = useState<string | undefined>();
  const [questionDataQuestionText, setquestionDataQuestionText] =
    useState<string>(questionTextStep1);
  const [answersDataRes, setAnswersDataRes] = useState<Answer[]>([]);
  const [showRecommendation, setShowRecommendation] = useState<boolean>(false);
  const [recommendationDataRes, setRecommendationDataRes] = useState<Answer[]>([]);
  const [errorText, setErrorText] = useState<string>(fields?.children[0].fields.errorText.value);
  const [showErrorText, setShowErrorText] = useState<boolean>(false);
  const [nextID, setNextID] = useState<string | undefined>();
  const [allSelectedAnswerId, setAllSelectedAnswerId] = useState<string[]>([]);
  const [allSelectedAnswerText, setAllSelectedAnswerText] = useState<
    { answerText: Field<string> }[]
  >([]);

  const [recommendationProductIds, setRecommendationProductIds] = useState<string[]>([]);
  const [recommendationProductsRes, setRecommendationProductsRes] = useState<string[]>([]);
  const [resetCounter, setResetCounter] = useState(0);

  const [mutate, setMutate] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetcher = async (url: string, body: { [key: string]: unknown | undefined }) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  };

  const {
    data: answersData,
    error: answersError,
    mutate: mutateAnswersData,
  } = useSWR('/api/aw/storm-door-choose-tool/get-question-and-answers/', (url) =>
    fetcher(url, { questionID, language })
  );

  useEffect(() => {
    if (fields?.children[0]?.id) {
      setQuestionID(fields?.children[0]?.id);
    }
    // need only to set 1st QuestionID
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // mutateAnswersData() when questionID changes
  useEffect(() => {
    if (!questionID && !nextID && !currentAnswerId && mutate) {
      setQuestionID(questionIDStep1);
    }
    questionID && mutateAnswersData();
    // need this for mutate
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionID, mutate]);

  const { data: recommendationData, mutate: mutateRecommendationData } = useSWR(
    '/api/aw/storm-door-choose-tool/get-next-question-or-recommendation/',
    (url) => fetcher(url, { currentAnswerId, language })
  );
  useEffect(() => {
    mutateRecommendationData();
    // need this for mutate only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAnswerId, resetCounter]);

  useEffect(() => {
    if (answersData && answersData.results) {
      setIsLoading(false);
      const data = answersData.results;
      const updatedQuestionIDs = [...allQuestionID];
      if (!updatedQuestionIDs.some((q) => q.id === data.question.id)) {
        const resQues = data.question as Question;
        updatedQuestionIDs.push(resQues);
      }
      setAllQuestionID(updatedQuestionIDs);
      const questionDataResultquestionText = data.question.questionText?.value;
      const answersDataResults = data.answers.children.results as Answer[];
      setAnswersDataRes(answersDataResults);
      setquestionDataQuestionText(questionDataResultquestionText);
      const errorTextVal = data.question.errorText && data.question.errorText.value;
      setErrorText(errorTextVal);
      setShowErrorText(false);
      const isAnyAnswerSelected = data.answers.children.results.some((answer: Answer) =>
        allSelectedAnswerId.includes(answer.id)
      );

      if (isAnyAnswerSelected) {
        const matchingAnswer = data.answers.children.results.find((answer: Answer) =>
          allSelectedAnswerId.includes(answer.id)
        );

        if (matchingAnswer) {
          setNextID(matchingAnswer.id);
        } else {
          setNextID('');
        }
      } else {
        setNextID('');
      }
    }
    // based on answersData
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answersData]);

  useEffect(() => {
    if (recommendationData && recommendationData.results && recommendationData.results.question) {
      const data = recommendationData.results.question.children;
      const isRecommendation =
        data.results[0] && data.results[0].template.name === 'Recommendation' ? true : false;
      const nextID = data.results[0] && data.results[0].id;
      nextID && setQuestionID(nextID);
      if (isRecommendation) {
        setResetCounter(0);
        // we can ignore the typeerror for the useSWR data response of stormdoorChooseTool data
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const newProductIds: any = Array.from(
          new Set(
            data.results.map((recommendation: any) => recommendation.productItem.value.trim())
          )
        ).filter((productId) => productId !== '' && productId !== '""');
        /* eslint-enable @typescript-eslint/no-explicit-any */
        setRecommendationProductIds(newProductIds);
        setShowRecommendation(true);
        setRecommendationDataRes(data.results);
      } else {
        setShowRecommendation(false);
      }
    }
  }, [recommendationData]);

  const { data: recommendationProducts, error: recommendationProductsError } = useSWR(
    recommendationProductIds.length ? '/api/aw/storm-door-choose-tool/get-product/' : null,
    (url) => fetcher(url, { recommendationProductIds, language })
  );
  useEffect(() => {
    if (recommendationProducts) {
      const data = recommendationProducts.results;
      setRecommendationProductsRes(data);
    }
  }, [recommendationProducts]);

  const handlePrevious = () => {
    setMutate(false);
    setCurrentAnswerId('');
    setShowRecommendation(false);
    setRecommendationDataRes([]);
    setRecommendationProductIds([]);
    setRecommendationProductsRes([]);
    const updatedQuestionIDs = [...allQuestionID];
    updatedQuestionIDs.pop();
    setAllQuestionID(updatedQuestionIDs);

    const qid =
      updatedQuestionIDs.length > 0
        ? updatedQuestionIDs[updatedQuestionIDs.length - 1].id
        : questionIDStep1;
    if (qid) {
      setQuestionID(qid);
    }
    setNextID('');
  };

  const handleNext = () => {
    const isAnswerSelected = nextID && allSelectedAnswerId.includes(nextID);
    const selectedAnswer = answersData.results.answers.children.results.find(
      (answer: { id: string | undefined }) => answer.id === nextID
    );

    if (isAnswerSelected) {
      setCurrentAnswerId('');
      setCurrentAnswerId(nextID);
      setResetCounter((prevCounter) => prevCounter + 1);
    } else if (!nextID) {
      setShowErrorText(true);
    } else {
      setCurrentAnswerId('');
      setCurrentAnswerId(nextID);
      setAllSelectedAnswerId((prevAllSelectedAnswerId) => [...prevAllSelectedAnswerId, nextID]);
      setAllSelectedAnswerText((prevAllSelectedAnswerText) => [
        ...prevAllSelectedAnswerText,
        selectedAnswer,
      ]);
    }
  };

  const PreviousCTA = (): JSX.Element => {
    return (
      <div onClick={() => handlePrevious()}>
        <div className="flex w-fit cursor-pointer items-center whitespace-nowrap rounded-lg border-4 border-gray px-m py-[9px] font-sans text-button font-bold hover:bg-gray hover:text-white disabled:border-gray disabled:text-gray md:mr-s">
          <SvgIcon icon="arrow" className="mr-xxs [&_svg]:rotate-180" />
          {fields.previousCtaText.value}
        </div>
      </div>
    );
  };

  const NextCTA = (): JSX.Element => {
    return (
      <div onClick={() => handleNext()}>
        <div className="flex w-fit cursor-pointer items-center whitespace-nowrap rounded-lg border-4 border-theme-btn-border bg-theme-btn-bg px-m py-[9px] font-sans text-button font-heavy text-theme-btn-text disabled:border-gray disabled:text-gray md:hover:border-theme-btn-border-hover lg:hover:bg-theme-btn-bg-hover lg:hover:text-theme-btn-text-hover">
          {fields?.nextCtaText?.value} <SvgIcon icon="arrow" className="ml-xxs" />
        </div>
      </div>
    );
  };

  const handleQuestionAndAnswers = (answerId: string) => {
    if (answerId === nextID) {
      setNextID('');
    } else {
      setNextID(answerId);
    }
    setShowErrorText(false);
    setAllSelectedAnswerId((prevAllSelectedAnswerId) => {
      const truncatedAnswerIds = prevAllSelectedAnswerId.slice(0, allQuestionID.length - 1);
      return truncatedAnswerIds;
    });
    setAllSelectedAnswerText((prevAllSelectedAnswerText) => {
      const truncatedAnswerText = prevAllSelectedAnswerText.slice(0, allQuestionID.length - 1);
      return truncatedAnswerText;
    });
  };

  const handleBreadcrumb = (linkId: string) => {
    setCurrentAnswerId('');
    setMutate(false);
    const questionIDs = [...allQuestionID];
    const linkIndex = questionIDs.findIndex((q) => q.id === linkId);
    let updatedQuestionIDs: Question[] | [] = [];
    if (linkIndex !== -1) {
      updatedQuestionIDs = questionIDs.slice(0, linkIndex + 1);
      setAllQuestionID(updatedQuestionIDs);
    }
    setQuestionID(linkId);
    setShowRecommendation(false);
    setRecommendationDataRes([]);
    setRecommendationProductIds([]);
    setRecommendationProductsRes([]);
  };

  const handleStartOver = () => {
    setIsLoading(true);
    setAnswersDataRes([]);
    setQuestionID(questionIDStep1);
    setShowRecommendation(false);
    setRecommendationDataRes([]);
    setRecommendationProductIds([]);
    setRecommendationProductsRes([]);
    setNextID('');
    setAllSelectedAnswerId([]);
    setAllSelectedAnswerText([]);
    const updatedQuestionIDs = [allQuestionID[0]];
    setAllQuestionID(updatedQuestionIDs);
  };

  const BreadcrumbUI = (): JSX.Element => {
    return (
      <ul className="flex flex-wrap justify-center">
        {answersError && (
          <li className="pr-xxs">
            <div className="mt-xxs mb-xxs flex  items-center justify-center text-center font-sans text-small font-heavy uppercase  text-darkprimary ml:text-xxs">
              <Text
                field={{
                  value: breadcrumbTextStep1,
                }}
                className="underline"
              />
            </div>
          </li>
        )}
        {allQuestionID &&
          allQuestionID.map((link, index) =>
            link && link.breadcrumbText && link.breadcrumbText.value ? (
              index === allQuestionID.length - 1 && !showRecommendation ? (
                <li key={index} className="pr-xxs">
                  <div className="mt-xxs mb-xxs flex  items-center justify-center text-center font-sans text-small font-heavy uppercase  text-darkprimary ml:text-xxs">
                    <Text
                      field={{
                        value: link.breadcrumbText.value,
                      }}
                      className="underline"
                    />
                  </div>
                </li>
              ) : (
                <li key={index} className="pr-xxs" onClick={() => handleBreadcrumb(link.id)}>
                  <div className="mt-xxs mb-xxs flex cursor-pointer items-center justify-center text-center font-sans text-small font-heavy uppercase text-darkprimary underline ml:text-xxs">
                    <Text field={{ value: link.breadcrumbText.value }} className="underline" />
                    <SvgIcon icon="caret-primary" className="ml-xxs" />
                  </div>
                </li>
              )
            ) : null
          )}
        {showRecommendation ? (
          <li key="summary-1" className="pr-xxs">
            <div className="mt-xxs mb-xxs flex items-center justify-center text-center font-sans text-small font-heavy uppercase text-darkprimary  ml:text-xxs">
              <Text field={{ value: 'Summary' }} className="underline" />
            </div>
          </li>
        ) : null}
      </ul>
    );
  };

  const AnswersUI = (): JSX.Element => {
    return (
      <>
        <BreadcrumbUI />

        <div className="mt-s mb-xxs text-center font-sans text-sm-s font-heavy ml:mt-l ml:text-s">
          <Text field={{ value: questionDataQuestionText }} />
        </div>

        {answersError && (
          <div className="flex min-h-[200px] w-full items-center justify-center text-center font-sans text-sm-m font-medium md:text-s">
            We&apos;re sorry, we couldn&apos;t process your request at this time.
            <br />
            Please refresh or try again later.
          </div>
        )}

        {(!answersDataRes && !answersError) ||
          (isLoading && !answersError && !answersDataRes && (
            <div className="loader flex min-h-[200px] w-full items-center justify-center">
              <Spinner size={48} />
            </div>
          ))}
        {answersDataRes && !answersError && (
          <div className="mt-s flex min-h-[200px] w-full justify-center">
            <div className="flex w-full flex-col justify-center md:flex-row">
              {answersDataRes &&
                answersDataRes.map((item, index: number) => {
                  const isAnswerSelected = allSelectedAnswerId.includes(item.id);
                  return (
                    <div
                      key={index}
                      id={item.id}
                      onClick={() => handleQuestionAndAnswers(item.id)}
                      className={classNames(
                        item.id === nextID || isAnswerSelected
                          ? 'border-[6px] border-primary'
                          : 'border-[1px] border-gray lg:hover:border-[2px] lg:hover:border-black',
                        'flex h-full cursor-pointer flex-col justify-start self-stretch rounded-[10px] border-solid  bg-light-gray px-s py-m text-center max-ml:mb-s max-md:flex-row md:w-[288px]  md:py-ml ',
                        index < answersDataRes.length - 1 ? 'md:mr-s' : ''
                      )}
                    >
                      <ImagePrimary
                        fields={{
                          primaryImageCaption: {
                            value: '',
                          },
                          primaryImage: { value: item.primaryImage },
                          primaryImageMobile: { value: item.primaryImageMobile },
                          primaryImageMobileFocusArea:
                            item.primaryImageMobileFocusArea &&
                            item.primaryImageMobileFocusArea.targetItem &&
                            item.primaryImageMobileFocusArea.targetItem.value.value
                              ? {
                                  id: '',
                                  url: '',
                                  name: item.primaryImageMobileFocusArea.targetItem.value.value,
                                  displayName:
                                    item.primaryImageMobileFocusArea.targetItem.value.value,
                                  fields: {
                                    Value: {
                                      value:
                                        item.primaryImageMobileFocusArea.targetItem.value.value,
                                    },
                                  },
                                }
                              : {
                                  id: '',
                                  url: '',
                                  name: 'Center',
                                  displayName: 'Center',
                                  fields: {
                                    Value: {
                                      value: 'center',
                                    },
                                  },
                                  templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                                  templateName: 'Enum',
                                },
                        }}
                        additionalMobileClasses="max-w-[64px] max-h-[64px] h-[64px]"
                        additionalDesktopClasses="max-w-[180px] max-h-[180px] h-[180px] [&_span]:max-h-[180px] mx-auto"
                        imageLayout={'intrinsic'}
                      />
                      <div className="max-md:!ml-s max-md:text-left md:mt-s">
                        <div className=" mb-xxs flex w-full font-sans text-sm-xs font-heavy md:items-center md:justify-center md:text-center md:text-xs">
                          <Text field={{ value: item.answerText.value }} />
                        </div>

                        <RichTextWrapper
                          field={{ value: item.answerDescription.value }}
                          classes="md:text-center text-dark-gray"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        <div
          className={classNames(
            allQuestionID.length > 1
              ? 'justify-between md:justify-center'
              : 'justify-end md:justify-center',
            answersError ? 'justify-center' : '',
            'flex w-full md:mt-l'
          )}
        >
          {allQuestionID.length > 1 && <PreviousCTA />}

          {answersError ? (
            <div>
              <div className="pointer-events-none flex w-fit cursor-not-allowed items-center whitespace-nowrap rounded-lg border-4 border-gray px-m py-[9px] font-sans text-button  font-heavy text-gray disabled:border-gray disabled:text-gray">
                {fields.nextCtaText?.value} <SvgIcon icon="arrow" className="ml-xxs" />
              </div>
            </div>
          ) : (
            <NextCTA />
          )}
        </div>
        {showErrorText && (
          <div
            className={classNames(
              'mt-xxs text-small text-error-outline',
              allQuestionID.length > 1 ? 'text-center' : 'text-right md:text-center'
            )}
          >
            <Text field={{ value: errorText }} />
          </div>
        )}
      </>
    );
  };

  const RecommendationUI = (): JSX.Element => {
    return (
      <>
        <div className="flex w-full flex-col justify-center">
          {recommendationProductsError ? (
            <div className="mb-s text-center font-sans text-sm-m font-medium md:text-s">
              We&apos;re sorry, we couldn&apos;t process your request at this time.
              <br />
              Please refresh or try again later.
            </div>
          ) : (
            <>
              <BreadcrumbUI />

              <div
                onClick={() => handleStartOver()}
                className="mb-m mt-xxs flex w-full cursor-pointer items-center justify-center font-sans text-button font-demi text-black"
              >
                <Text field={{ value: startOverCtaText }} />
                <SvgIcon icon="reset" className="ml-xxs" />
              </div>

              <div className="mb-m flex flex-col items-center justify-center bg-light-gray p-s  text-center ml:mb-l">
                <div className="flex w-full items-center justify-center text-center  text-sm-xs font-heavy text-black ml:text-xs">
                  <Text field={{ value: youSelectedHeadline }} />
                </div>
                <ul className="mt-xxs mb-xxs flex w-full flex-wrap items-center justify-center text-center">
                  {allSelectedAnswerText &&
                    allSelectedAnswerText.map((answer, index) =>
                      answer && answer.answerText && answer.answerText.value ? (
                        <li key={index}>
                          <div className=" font-sans text-sm-xs font-medium text-black ml:text-xs ">
                            <Text
                              field={{ value: answer.answerText.value }}
                              className="underline"
                            />
                            {index < allSelectedAnswerText.length - 1 && <>, </>}
                          </div>
                        </li>
                      ) : null
                    )}
                </ul>
              </div>

              <div className="mb-m flex w-full  items-center font-sans text-sm-s font-heavy text-black md:justify-center ml:text-s">
                <Text field={{ value: summaryHeadline }} />
              </div>
            </>
          )}
          {!recommendationProducts && !recommendationProductsError && (
            <div className="loader flex min-h-[40vh] w-full items-center justify-center">
              <Spinner size={48} />
            </div>
          )}

          {!recommendationProductsError &&
            recommendationDataRes &&
            recommendationDataRes.length > 0 &&
            // ignoring below any types, as there is mismatch between data-structure and type that 'recommendationDataRes' is inheriting
            /* eslint-disable @typescript-eslint/no-explicit-any */
            recommendationDataRes.map((recommendation: any, index: number) => {
              recommendationProductIds.unshift(recommendation.productItem.value);
              const productDetails = recommendationProductsRes.filter(
                (product: any) =>
                  product.ItemId === recommendation.productItem.value.replace(/[{}-]/g, '')
              ) as any;
              /* eslint-enable @typescript-eslint/no-explicit-any */
              let featuredColors = [];
              let colorsSwatchCollectionName = '';
              let handleSetFinishesSwatchCollectionName = '';
              let featuredHandleSetFinishes = [];
              if (productDetails && productDetails[0]) {
                featuredColors = productDetails[0].colors?.targetItem?.swatches?.colors;
                colorsSwatchCollectionName =
                  productDetails[0].colors?.targetItem?.swatchCollectionName?.value;
                handleSetFinishesSwatchCollectionName =
                  productDetails[0].handleSetFinishes?.targetItem?.swatchCollectionName?.value;
                featuredHandleSetFinishes =
                  productDetails[0].handleSetFinishes.targetItem?.swatches?.colors;
              }

              return (
                <div key={index}>
                  {productDetails && productDetails.length > 0 ? (
                    <>
                      <div
                        key={index}
                        className="flex min-h-[200px] w-full flex-col text-left ml:flex-row"
                      >
                        <div className="mb-s flex max-h-[325px] items-center border border-solid border-gray p-s ml:max-h-[188px] ml:w-[25%]">
                          <ImagePrimary
                            fields={{
                              primaryImageCaption: {
                                value: '',
                              },
                              primaryImage: { value: productDetails[0].productImage },
                              primaryImageMobile: { value: productDetails[0].productImageMobile },
                              primaryImageMobileFocusArea:
                                productDetails[0].primaryImageMobileFocusArea &&
                                productDetails[0].primaryImageMobileFocusArea.targetItem.value.value
                                  ? {
                                      id: '',
                                      url: '',
                                      name: productDetails[0].primaryImageMobileFocusArea.targetItem
                                        .value.value,
                                      displayName:
                                        productDetails[0].primaryImageMobileFocusArea.targetItem
                                          .value.value,
                                      fields: {
                                        Value: {
                                          value:
                                            productDetails[0].primaryImageMobileFocusArea.targetItem
                                              .value.value,
                                        },
                                      },
                                    }
                                  : {
                                      id: '',
                                      url: '',
                                      name: 'Center',
                                      displayName: 'Center',
                                      fields: {
                                        Value: {
                                          value: 'center',
                                        },
                                      },
                                      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                                      templateName: 'Enum',
                                    },
                            }}
                            additionalMobileClasses="max-w-[293px] max-h-[293px] h-[293px]  m-auto"
                            additionalDesktopClasses="max-w-[156px] max-h-[156px] h-[156px] [&_span]:max-h-[156px] m-auto"
                            imageLayout={'responsive'}
                          />
                        </div>
                        <div className="flex flex-col ml:w-[75%] ml:pl-s">
                          <div className="mb-xxs font-sans text-s font-medium">
                            <Text field={{ value: productDetails[0].productFullName.value }} />
                          </div>

                          <RichTextWrapper
                            field={{ value: productDetails[0].productDescription.value }}
                            classes="text-dark-gray text-small"
                          />

                          {featuredColors && featuredColors.length > 0 && (
                            <div className="mt-m flex">
                              <div className="w-[94px] min-w-[94px] font-sans text-xxs font-heavy uppercase">
                                <Text field={{ value: colorsSwatchCollectionName }} />
                              </div>
                              <div className="flex flex-wrap pl-xxxs">
                                {featuredColors.map(
                                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                  (color: any, index: number) => {
                                    return (
                                      <div
                                        key={index}
                                        className="mr-[14px] mb-[14px] h-[30px] w-[30px] rounded-full [&_img]:rounded-full [&_*]:h-[30px] [&_*]:w-[30px]"
                                      >
                                        <Image image={{ value: color.swatchImage }} />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}

                          {featuredHandleSetFinishes && featuredHandleSetFinishes.length > 0 && (
                            <div className="mt-m flex">
                              <div className="w-[94px] min-w-[94px] font-sans text-xxs font-heavy uppercase">
                                <Text field={{ value: handleSetFinishesSwatchCollectionName }} />
                              </div>
                              <div className="flex flex-wrap pl-xxxs">
                                {featuredHandleSetFinishes.map(
                                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                  (color: any, index: number) => {
                                    return (
                                      <div
                                        key={index}
                                        className="mr-[14px] mb-[14px] h-[30px] w-[30px] rounded-full [&_img]:rounded-full [&_*]:h-[30px] [&_*]:w-[30px]"
                                      >
                                        <Image image={{ value: color.swatchImage }} />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}

                          <div className="mt-m flex flex-col ml:flex-row">
                            {recommendation.cta1Link.text && (
                              <SingleButton
                                fields={{
                                  cta1Link: {
                                    value: {
                                      href: recommendation.cta1Link.url,
                                      text: recommendation.cta1Link.text,
                                      target: recommendation.cta1Link.text,
                                      url: recommendation.cta1Link.url,
                                      anchor: recommendation.cta1Link.anchor,
                                    },
                                  },
                                  cta1ModalLinkText: {
                                    value: '',
                                  },
                                  cta1AriaLabel: {
                                    value: '',
                                  },
                                  cta1Style: {
                                    id: '',
                                    url: '',
                                    name: recommendation.cta1Style.targetItem.value.value,
                                    displayName: recommendation.cta1Style.targetItem?.value.value,
                                    fields: {
                                      Value: {
                                        value: recommendation.cta1Style.targetItem.value.value,
                                      },
                                    },
                                  },
                                  cta1Icon: {
                                    id: '',
                                    url: '',
                                    name: 'Arrow',
                                    displayName: 'Arrow',
                                    fields: {
                                      Value: {
                                        value: recommendation.cta1Icon.targetItem.value.value,
                                      },
                                    },
                                  },
                                }}
                              />
                            )}
                            {recommendation.cta2Link.text && (
                              <SingleButton
                                fields={{
                                  cta1Link: {
                                    value: {
                                      href: recommendation.cta2Link.url,
                                      text: recommendation.cta2Link.text,
                                      target: recommendation.cta2Link.text,
                                      url: recommendation.cta2Link.url,
                                      anchor: recommendation.cta2Link.anchor,
                                    },
                                  },
                                  cta1ModalLinkText: {
                                    value: '',
                                  },
                                  cta1AriaLabel: {
                                    value: '',
                                  },
                                  cta1Style: {
                                    id: '',
                                    url: '',
                                    name: recommendation.cta2Style.targetItem.value.value,
                                    displayName: recommendation.cta2Style.targetItem.value.value,
                                    fields: {
                                      Value: {
                                        value: recommendation.cta2Style.targetItem.value.value,
                                      },
                                    },
                                  },
                                  cta1Icon: {
                                    id: '',
                                    url: '',
                                    name: 'Arrow',
                                    displayName: 'Arrow',
                                    fields: {
                                      Value: {
                                        value: recommendation.cta2Icon.targetItem.value.value,
                                      },
                                    },
                                  },
                                }}
                                classes={{ wrapper: 'ml:ml-s' }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mb-m flex w-full ">
                        <hr className="h-px w-full border-0 bg-gray" />
                      </div>
                    </>
                  ) : (
                    <div className="loader flex min-h-[40vh] w-full items-center justify-center">
                      <Spinner size={48} />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </>
    );
  };

  return (
    <Component variant="lg" dataomponent="tool/stormdoorchoosetool" {...props}>
      <div className="col-span-12 lg:col-span-2"></div>
      <div className="col-span-12 max-ml:text-center lg:col-span-8">
        <div className="flex justify-center">
          <Headline
            useTag="h4"
            classes="mb-xxxs font-sans font-heavy text-s ml:text-m"
            {...props}
          />
        </div>

        {showRecommendation ? <RecommendationUI /> : <AnswersUI />}
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<StormDoorChooseToolProps>(StormDoorChooseTool);
