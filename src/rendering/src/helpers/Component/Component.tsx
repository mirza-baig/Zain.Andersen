import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import { EnumField } from 'lib/utils/get-enum';

export const ComponentSizes = {
  ml: 'ml' as ComponentSizeVariants,
  lg: 'lg' as ComponentSizeVariants,
  xl: 'lg' as ComponentSizeVariants,
  full: 'full' as ComponentSizeVariants,
};

export type ComponentSizeVariants = 'ml' | 'lg' | 'xl' | 'full';
export type ComponentBackgroundVariants = 'black' | 'gray' | 'white' | 'primary' | 'secondary';

export type GapSizes = 'gap-s' | 'gap-x-0';

// @TODO: break out the grid class later so we don't have to tell each component to span 12 columns every time we render it
// const baseGridClasses = 'grid ';
// const defaultGridClasses = 'grid-cols-1' + baseGridClasses;
// const moreGridClasses = 'grid-cols-1 gap-y-0 md:grid-cols-12 md:gap-s' + baseGridClasses;

// TODO: what are we doing with the event fields??
//
export type ComponentWrapperProps =
  Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseComponent & {
    children?: React.ReactNode | React.ReactNode[];
    dataComponent?: string;
    variant: ComponentSizeVariants;
    backgroundVariant: ComponentBackgroundVariants;
    sectionWrapperClasses: string;
    gap?: GapSizes;
    padding?: string;
    grid?: string;
  };

const containerVariants: Record<ComponentWrapperProps['variant'], string> = {
  full: 'w-full',
  xl: 'xl:mx-auto md:max-w-screen-xl',
  lg: 'lg:mx-auto md:max-w-screen-lg',
  ml: 'md:mx-auto md:max-w-screen-ml',
};

const containerBgVariants: Record<ComponentWrapperProps['backgroundVariant'], string> = {
  black: 'theme-black bg-theme-bg',
  gray: 'theme-gray bg-light-gray',
  white: 'theme-white',
  primary: 'theme-primary',
  secondary: 'theme-secondary',
};

export function hashCode(s: string) {
  let hash = s.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  hash = Math.abs(hash);

  return hash.toString();
}

export function GetComponentSpacingClass(
  componentSpacingField: EnumField<ComponentSpacing>,
  defaultValue?: ComponentSpacing
) {
  const spacingEnumKey =
    getEnum<ComponentSpacing>(componentSpacingField) || defaultValue || 'standard';
  return spacingValues[spacingEnumKey];
}

type ComponentSpacing = 'standard' | 'reduced' | 'paddingStandard' | 'paddingReduced' | 'none';

const spacingValues: Record<ComponentSpacing, string> = {
  standard: 'my-8',
  reduced: 'my-4',
  paddingStandard: 'py-8',
  paddingReduced: 'py-4',
  none: 'my-0',
};

const Component = ({
  fields,
  rendering,
  children,
  variant,
  backgroundVariant,
  dataComponent,
  sectionWrapperClasses,
  gap,
  padding,
  grid,
}: ComponentWrapperProps): JSX.Element => {
  const gridClass = `${grid || 'section-grid grid grid-cols-2 md:grid-cols-12'} ${
    padding || 'px-m'
  } ${gap || 'gap-s md:gap-s'} ${dataComponent === 'product/productintro' ? 'relative' : ''}`;

  return (
    <section
      className={sectionWrapperClasses}
      data-component={dataComponent}
      id={fields?.sectionId?.value || `id${hashCode(rendering.dataSource)}`}
    >
      <div
        className={classNames(
          GetComponentSpacingClass(fields?.componentSpacing),
          containerVariants[variant],
          containerBgVariants[backgroundVariant] ?? 'theme-white'
        )}
      >
        <div className={gridClass}>{children}</div>
      </div>
    </section>
  );
};
export default Component;
