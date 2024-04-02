// Global
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import {
  DescriptionAttributeTheme,
  DescriptionAttributeThemeSubType,
} from './DescriptionAttribute.theme';
import { AttributeRendererProps, DescriptionAttributeViewModel } from 'lib/renoworks';

const DescriptionAttribute = ({
  viewModel,
}: AttributeRendererProps<DescriptionAttributeViewModel>) => {
  const { themeData } = useTheme(DescriptionAttributeTheme());
  const theme = (themeData as DescriptionAttributeThemeSubType).classes;

  return (
    <div className={theme.attributeOption}>
      <div className={theme.copy} dangerouslySetInnerHTML={{ __html: viewModel.description }}></div>
    </div>
  );
};

DescriptionAttribute.nameString = 'DescriptionAttribute';

export default DescriptionAttribute;
