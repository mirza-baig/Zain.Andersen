// Global
import { useTheme } from 'lib/context/ThemeContext';

// Components
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';
import { BouncyCard } from 'src/helpers/BouncyCard';
import { MapOption } from '../perfect-match-mappers';

const Type = (props: PerfectMatchProps) => {
  if (props) {
  }

  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;
  const doorsOption = MapOption(props.props.fields.patioDoorOption, 'door', true);
  const windowsOption = MapOption(props.props.fields.windowOption, 'window', true);
  const productType = props.moduleData.filters.productType;

  return (
    <div className={theme.panelType}>
      <div className={theme.leftVisible}>
        <h1 className={theme.leftTypeHeader}>
          What&apos;s perfect for
          <span className={theme.orange}> you</span>?
        </h1>
      </div>
      <div className={theme.rightVisible}>
        {!productType ? (
          <>
            <BouncyCard
              {...windowsOption}
              key={0}
              mobileFullWidth={true}
              ctaUrl={'#cs=windowStyle&s:type=' + windowsOption.id}
              ctaAlwaysVisible={true}
            ></BouncyCard>
            <BouncyCard
              {...doorsOption}
              key={1}
              mobileFullWidth={true}
              ctaUrl={'#cs=doorStyle&s:type=' + doorsOption.id}
              ctaAlwaysVisible={true}
            ></BouncyCard>
          </>
        ) : productType === 'window' ? (
          <BouncyCard
            {...windowsOption}
            key={0}
            mobileFullWidth={true}
            ctaUrl={'#cs=windowStyle&s:type=' + windowsOption.id}
            ctaAlwaysVisible={true}
          ></BouncyCard>
        ) : (
          <BouncyCard
            {...doorsOption}
            key={1}
            mobileFullWidth={true}
            ctaUrl={'#cs=doorStyle&s:type=' + doorsOption.id}
            ctaAlwaysVisible={true}
          ></BouncyCard>
        )}
      </div>
    </div>
  );
};

export default Type;
