// Global
import {
  ImageField,
  LinkField,
  RichTextField,
  Text,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

// Components
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { getEnum } from 'src/lib/utils';
import { GenericChartTheme, GetTextAlignment } from './GenericChart.theme';

export type GenericChartProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.GenericChart.GenericChart & {
    fields: {
      children: [
        Feature.EnterpriseWeb.AndersenWindows.Components.General.GenericChart.GenericChartColumn
      ];
    };
  };

export type GenericChartColumnProps =
  Feature.EnterpriseWeb.AndersenWindows.Components.General.GenericChart.GenericChartColumn;

const RenderTitleContent = (column: GenericChartColumnProps) => {
  if (!column?.fields) {
    return <></>;
  }

  return (
    <>
      {!column.fields.titleLink?.value?.href ? (
        column.fields.title?.value && (
          <h3>
            <Text field={column.fields.title} encode={false}></Text>
          </h3>
        )
      ) : (
        <LinkWrapper
          field={column.fields.titleLink}
          ariaLabel={{ value: column.fields.title?.value || 'Title Link' }}
        >
          {column.fields.title?.value ? (
            <h3>
              <span className="border-black hover:border-b-2">
                <Text field={column.fields.title} encode={false}></Text>
              </span>
            </h3>
          ) : (
            <h3>{column.fields.titleLink.value?.text}</h3>
          )}
        </LinkWrapper>
      )}
      {!column.fields.subtitleLink?.value?.href ? (
        column.fields.subtitle?.value && (
          <h4>
            <Text field={column.fields.subtitle}></Text>
          </h4>
        )
      ) : (
        <LinkWrapper
          field={column.fields.subtitleLink}
          ariaLabel={{ value: column.fields.subtitle?.value || 'Subtitle Link' }}
        >
          {column.fields.subtitle?.value ? (
            <h4>
              <span className="border-black hover:border-b-2">
                <Text field={column.fields.subtitle} encode={false}></Text>
              </span>
            </h4>
          ) : (
            <h4>{column.fields.subtitleLink.value?.text}</h4>
          )}
        </LinkWrapper>
      )}
    </>
  );
};

export type TextAlignment = 'left' | 'center' | 'right' | '';
export type BackgroundColor = 'black' | 'gray' | 'white';

const GenericChart = (props: GenericChartProps) => {
  const alignment = getEnum<TextAlignment>(props.fields?.textAlignment) || 'left';
  const titleRowBackgroundColor =
    getEnum<BackgroundColor>(props.fields?.titleRowBackgroundColor) || 'black';
  const titleColumnBackgroundColor =
    getEnum<BackgroundColor>(props.fields?.titleColumnBackgroundColor) || 'gray';
  const { themeData } = useTheme(
    GenericChartTheme(titleRowBackgroundColor, titleColumnBackgroundColor, alignment)
  );
  const MAX_CHART_ROWS = 25;
  const countToMaxChartRowsArray = [...Array(MAX_CHART_ROWS + 1).keys()].splice(1);

  const hasSchemaText = !!props.fields.schemaName?.value && !!props.fields.schemaDescription?.value;
  const hasImageRow = !!props.fields.children.find(
    (_: Feature.EnterpriseWeb.AndersenWindows.Components.General.GenericChart.GenericChartColumn) =>
      !!_.fields?.image?.value?.src
  );
  const hasImageColumn = !!countToMaxChartRowsArray.find(
    (count: number) => !!props.fields[`row${count}Image`]?.value?.src
  );

  return (
    <Component
      sectionWrapperClasses={themeData.classes.section}
      variant="lg"
      grid=" w-full "
      dataComponent="general/genericchart"
      {...props}
    >
      <Headline
        {...props}
        classes={' text-[26px] font-demi leading-[1.25] mb-[12px] md:text-[34px] '}
      ></Headline>
      <BodyCopy
        {...props}
        classes={' hidden md:block text-[18px] leading-1.5] mb-[10px] '}
      ></BodyCopy>
      <div className="comparison-chart-table">
        {hasSchemaText && (
          <>
            <meta itemProp="name" content={props.fields.schemaName?.value} />
            <meta itemProp="description" content={props.fields.schemaDescription?.value} />
          </>
        )}

        <table className={themeData.classes.table}>
          <thead>
            <tr className={themeData.classes.theadRow}>
              {hasImageColumn && <th className={themeData.classes.imageColumnHeader}>&nbsp;</th>}
              <th>&nbsp;</th>
              {props.fields.children.map((column: GenericChartColumnProps, index: number) => (
                <th
                  className={themeData.classes.rowHeader}
                  key={'GenericChartColumnProps_th_' + index}
                >
                  {RenderTitleContent(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hasImageRow && (
              <tr className={themeData.classes.imageRow}>
                {hasImageColumn && <td className={themeData.classes.imageColumn}>&nbsp;</td>}
                <th>&nbsp;</th>
                {props.fields.children.map((column: GenericChartColumnProps, index: number) => (
                  <td key={'GenericChartColumnProps_td_' + index} className="p-[5px]">
                    {!column?.fields?.imageLink?.value?.href ? (
                      <ImageWrapper
                        image={column?.fields?.image}
                        additionalDesktopClasses="lazy"
                        imageLayout="intrinsic"
                      ></ImageWrapper>
                    ) : (
                      <LinkWrapper
                        field={column?.fields?.imageLink}
                        ariaLabel={{ value: 'GenericChart image' }}
                      >
                        <ImageWrapper
                          image={column?.fields?.image}
                          additionalDesktopClasses="lazy"
                          imageLayout="intrinsic"
                        ></ImageWrapper>
                      </LinkWrapper>
                    )}
                  </td>
                ))}
              </tr>
            )}
            {countToMaxChartRowsArray.map((rowNumber: number, index: number) => {
              const rowTitle = props.fields[`row${rowNumber}Title`] as TextField;
              const rowTitleLink = props.fields[`row${rowNumber}Link`] as LinkField;
              const rowSubtitle = props.fields[`row${rowNumber}Subtitle`] as TextField;
              const rowSubtitleLink = props.fields[`row${rowNumber}SubtitleLink`] as LinkField;
              const rowImage = props.fields[`row${rowNumber}Image`] as ImageField;
              const rowImageLink = props.fields[`row${rowNumber}ImageLink`] as LinkField;
              return (
                (!!rowTitle?.value || !!rowTitleLink?.value?.href) && (
                  <tr className={themeData.classes.tableRow} key={'content-row-' + index}>
                    {hasImageColumn && (
                      <td className={themeData.classes.imageColumn}>
                        {rowImage?.value?.src &&
                          (!rowImageLink?.value?.href ? (
                            <>
                              <ImageWrapper image={rowImage}></ImageWrapper>
                            </>
                          ) : (
                            <>
                              <LinkWrapper field={rowImageLink} ariaLabel={{ value: 'Row Image' }}>
                                <ImageWrapper image={rowImage}></ImageWrapper>
                              </LinkWrapper>
                            </>
                          ))}
                      </td>
                    )}
                    <th className={themeData.classes.columnHeader}>
                      {!rowTitleLink?.value?.href ? (
                        rowTitle?.value && (
                          <h4>
                            <Text field={rowTitle} encode={false}></Text>
                          </h4>
                        )
                      ) : (
                        <LinkWrapper
                          field={rowTitleLink}
                          ariaLabel={{
                            value: (rowTitleLink?.value?.text as string) || 'Row Title Link',
                          }}
                        >
                          {rowTitle?.value ? (
                            <h4>
                              <Text field={rowTitle} encode={false}></Text>
                            </h4>
                          ) : (
                            <h4>{rowTitleLink?.value?.text}</h4>
                          )}
                        </LinkWrapper>
                      )}
                      {!rowSubtitleLink?.value?.href ? (
                        rowSubtitle?.value && (
                          <h5>
                            <Text field={rowSubtitle} encode={false}></Text>
                          </h5>
                        )
                      ) : (
                        <LinkWrapper
                          field={rowSubtitleLink}
                          ariaLabel={{
                            value: (rowSubtitleLink?.value?.text as string) || 'Row Subtitle Link',
                          }}
                        >
                          {rowSubtitle?.value ? (
                            <h5>
                              <Text field={rowSubtitle} encode={false}></Text>
                            </h5>
                          ) : (
                            <h5>{rowSubtitleLink?.value?.text}</h5>
                          )}
                        </LinkWrapper>
                      )}
                    </th>
                    {props.fields.children.map(
                      (
                        column: Feature.EnterpriseWeb.AndersenWindows.Components.General.GenericChart.GenericChartColumn,
                        index: number
                      ) => {
                        const textAlignment =
                          column.fields?.textAlignment != null
                            ? getEnum<TextAlignment>(column.fields.textAlignment) || ''
                            : '';
                        const rowContent = (column?.fields?.[
                          `row${rowNumber}Content` as keyof typeof column.fields
                        ] || { value: '' }) as RichTextField;
                        return (
                          <td
                            className={`${themeData.classes.tableData} ${GetTextAlignment(
                              textAlignment
                            )}`}
                            key={'content_td_' + index}
                          >
                            <div className={themeData.classes.mobileTitleColumn}>
                              {RenderTitleContent(column)}
                            </div>
                            <RichTextWrapper
                              field={rowContent}
                              classes={themeData.classes.contentClass}
                            ></RichTextWrapper>
                          </td>
                        );
                      }
                    )}
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
      {props.fields.footer?.value && (
        <div className={themeData.classes.footer}>
          <RichTextWrapper field={props.fields.footer}></RichTextWrapper>
        </div>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<GenericChartProps>(GenericChart);
