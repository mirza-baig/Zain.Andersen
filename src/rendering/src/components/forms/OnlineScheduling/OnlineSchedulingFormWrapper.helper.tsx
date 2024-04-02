// Global
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useTheme } from 'lib/context/ThemeContext';
// Components
import { OnlineSchedulingTheme } from './OnlineScheduling.theme';
import Form, { FormProps } from '../Form/Form';
import { useOnlineScheduling } from 'lib/forms/OnlineScheduling/OnlineSchedulingContext';
import classNames from 'classnames';
import { Spinner } from 'src/helpers/Spinner';

export type OnlineSchedulingProps = FormProps;
const OnlineSchedulingFormWrapperHelper = (props: OnlineSchedulingProps) => {
  const { themeData } = useTheme(OnlineSchedulingTheme);
  const { isLoading } = useOnlineScheduling();

  return (
    <>
      {isLoading && (
        <div className="m-auto">
          <Spinner size={48} />
        </div>
      )}
      <Form
        {...props}
        classes={classNames(
          themeData.classes.fullWidth,
          themeData.classes.padding,
          isLoading ? 'invisible' : ''
        )}
      />
    </>
  );
};

export default withDatasourceCheck()<OnlineSchedulingProps>(OnlineSchedulingFormWrapperHelper);
