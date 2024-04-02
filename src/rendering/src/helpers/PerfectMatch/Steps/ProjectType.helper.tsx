// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import { RenderStepsProps } from './PerfectMatchStep.helper';
import { BouncyCard } from 'src/helpers/BouncyCard';
import { ProjectTypeTheme, ProjectTypeThemeSubType } from './ProjectType.theme';
import { PerfectMatchOption } from '../types';

const ProjectType = ({ moduleData, step }: RenderStepsProps) => {
  const { themeData } = useTheme(ProjectTypeTheme());
  const theme = (themeData as ProjectTypeThemeSubType).classes;

  let stepOptions;
  switch (step) {
    case 'windowProjectType':
      stepOptions = moduleData.projectTypes.window;
      break;
    case 'doorProjectType':
      stepOptions = moduleData.projectTypes.door;
      break;
    default:
      break;
  }

  const router = useRouter();
  const stepData = moduleData?.steps[step];

  const GetNextUrl = (option: PerfectMatchOption) => {
    const hash = (router.asPath as string).split('#')[1];
    const parsedHash = new URLSearchParams(hash);
    parsedHash.delete('s:windowProjectType');
    parsedHash.delete('cs');
    parsedHash.append('cs', stepData?.nextStep ?? '');

    return decodeURIComponent(
      '#' + parsedHash.toString() + '&s:windowProjectType=' + option.property
    );
  };

  return (
    <>
      <h2 className={theme.stepHeading}>
        <Text field={stepData.heading} encode={false} />
      </h2>
      <div className={theme.stepCopy}>
        <RichTextWrapper field={stepData.copy} refer="" />
      </div>
      <div className={theme.stepWrapperOptions}>
        {stepOptions?.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (option: any, index: number) => (
            <BouncyCard
              {...option}
              key={index}
              ctaUrl={GetNextUrl(option)}
              cardWidth="basis-[44%]"
              additionalButtonClassName={' p-[60px_20px_10px_20px] '}
              imageLayout="intrinsic"
            ></BouncyCard>
          )
        )}
      </div>
    </>
  );
};

export default ProjectType;
