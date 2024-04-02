import dynamic from 'next/dynamic';
import { PerfectMatchProps } from 'components/tool/PerfectMatch/PerfectMatch';
import { PerfectMatchModuleData, PerfectMatchSteps } from '../types';

export type RenderStepsProps = {
  props: PerfectMatchProps;
  moduleData: PerfectMatchModuleData;
  children?: React.ReactNode | React.ReactNode[];
  step: PerfectMatchSteps;
};

const RenderSteps = (props: RenderStepsProps): JSX.Element => {
  if (!props.props || !props.step) {
    return <></>;
  }

  let AdjustedStepName: string = props.step;
  switch (props.step) {
    case 'windowStyle':
    case 'doorStyle':
      AdjustedStepName = 'style';
      break;
    case 'windowLocation':
    case 'doorLocation':
      AdjustedStepName = 'location';
      break;
    case 'windowCoastal':
    case 'doorCoastal':
      AdjustedStepName = 'coastal';
      break;
    case 'windowProjectType':
    case 'doorProjectType':
      AdjustedStepName = 'projectType';
      break;
    case 'windowPreferences':
    case 'doorPreferences':
      AdjustedStepName = 'preferences';
      break;
    case 'windowResults':
    case 'doorResults':
      AdjustedStepName = 'results';
    default:
      break;
  }

  const CappedStepName = AdjustedStepName[0].toUpperCase() + AdjustedStepName.slice(1);

  const PerfectMatchStep = dynamic(() => import(`./${CappedStepName}.helper`));

  return <PerfectMatchStep {...props}></PerfectMatchStep>;
};

export default RenderSteps;
