import classNames from 'classnames';
import { Headline } from 'src/helpers/Headline';
import { Subheadline } from 'src/helpers/Subheadline';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import TimeCard from './TimeCard.helper';

type ShowroomLocationMarkupProps = {
  // we can ignore below type error for type Any, as type of value in those object parameters are uncertain
  /* eslint-disable @typescript-eslint/no-explicit-any */
  templateClasses: { [property: string]: any };
  renderingFields: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
};

const ShowroomLocationMarkup = ({
  templateClasses,
  renderingFields,
}: ShowroomLocationMarkupProps) => {
  return (
    <div className={classNames('group relative  w-full ', templateClasses?.gridItem)}>
      <Headline classes={templateClasses?.headline} {...renderingFields.showroomName} />
      <Subheadline
        classes={classNames(templateClasses?.subheadline, '!mb-0')}
        {...renderingFields.showroomAddressLine1}
      />
      <Subheadline
        classes={classNames(templateClasses?.subheadline, '!mb-0')}
        {...renderingFields.showroomAddressLine2}
      />
      <Subheadline
        classes={templateClasses?.subheadline}
        {...renderingFields.showroomLocationWithPostal}
      />

      <LinkWrapper
        ctaSection="header"
        className={classNames(templateClasses?.subheadline, 'w-fit hover:underline')}
        field={{
          href: `tel: ${renderingFields?.showroomLocationPhoneNumber}`,
          text: renderingFields?.showroomLocationPhoneNumber,
        }}
      />

      {/* Showroom Hours Time-Card */}
      <TimeCard
        showroomHours={renderingFields?.showroomHours}
        classes={templateClasses?.showroomHours?.showrooms}
        title="Showroom Hours"
      />

      <ButtonGroup classes={templateClasses?.buttonGroup} {...renderingFields.showroomPageUrl} />
    </div>
  );
};

export default ShowroomLocationMarkup;
