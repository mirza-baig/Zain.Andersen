// Global
import { useTheme } from 'lib/context/ThemeContext';
// Components
import { MashupTheme } from './Mashup.theme';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { getEnum } from 'lib/utils';
import { MashupStyle, ResultItem } from './Mashup.Types';
import { PageMashupProps } from 'components/general/PageMashup/PageMashup';
import { FeaturedCard } from './FeaturedCard';
import { RegularCard } from './RegularCard';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

const Mashup = (props: PageMashupProps) => {
  const { themeData } = useTheme(MashupTheme);

  const mashupStyle = getEnum<MashupStyle>(props.fields?.mashupStyle) || 'images-for-all';

  const displayMashupGrid = () => {
    const renderRegularCards = () => {
      return props.fields?.resultItems
        .slice(1)
        .map((resultItem: ResultItem, index: number) => (
          <RegularCard
            key={index}
            resultItem={resultItem}
            mashupStyle={mashupStyle}
            itemIndex={index}
            placeholderImage={props.fields?.placeholderImage as ImageField}
            displayEyebrow={props.fields?.displayEyebrow.value}
          />
        ));
    };
    switch (mashupStyle) {
      case 'images-for-all':
        return (
          <>
            <FeaturedCard
              resultItem={props.fields?.resultItems[0] as ResultItem}
              mashupStyle={mashupStyle}
              placeholderImage={props.fields?.placeholderImage as ImageField}
              displayEyebrow={props.fields?.displayEyebrow.value}
            />
            {renderRegularCards()}
          </>
        );
      case 'feature-image-only':
      case 'no-images':
        return (
          <>
            <FeaturedCard
              resultItem={props.fields?.resultItems[0] as ResultItem}
              mashupStyle={mashupStyle}
              placeholderImage={props.fields?.placeholderImage as ImageField}
              displayEyebrow={props.fields?.displayEyebrow.value}
            />
            <div className="md:gap-lg col-span-12  grid grid-cols-12 gap-x-s gap-y-ml self-start border-t border-gray pt-s md:col-span-6">
              {renderRegularCards()}
            </div>
          </>
        );
      default:
        return <>Error in displaying mashup</>;
    }
  };

  return (
    <div className="col-span-12 py-l">
      <div className="grid-rows-auto grid grid-cols-12  gap-s px-m  md:max-w-screen-lg lg:mx-auto">
        <div className="col-span-12 md:col-span-6">
          <Headline {...props} classes={themeData.classes.sectionheadline} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <BodyCopy {...props} classes={themeData.classes.sectionBody} />
          <SingleButton {...props} classes={themeData.classes.sectionCta} />
        </div>

        {displayMashupGrid()}
      </div>
    </div>
  );
};

export default Mashup;
