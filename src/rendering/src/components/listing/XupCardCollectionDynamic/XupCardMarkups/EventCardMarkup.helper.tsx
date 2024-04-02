import classNames from 'classnames';
import { DynamicXupCardStyle } from '../XupCardCollectionDynamic';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Headline } from 'src/helpers/Headline';
import { Subheadline } from 'src/helpers/Subheadline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import React from 'react';
import ButtonLink from 'src/helpers/Button/buttons/btn--link';
import TimeCard from './TimeCard.helper';

type EventCardMarkupProps = {
  dynamicXupCardStyle: DynamicXupCardStyle;
  // we can ignore below type error for type Any, as type of value in those object parameters are uncertain
  /* eslint-disable @typescript-eslint/no-explicit-any */
  templateClasses: { [property: string]: any };
  renderingFields: { [key: string]: any };
  /* eslint-enable @typescript-eslint/no-explicit-any */
};

const EventCardMarkup = ({ templateClasses, renderingFields }: EventCardMarkupProps) => {
  // ================ Event Start and End Dates ================

  const parseDate = (dateString: string | number | Date) => new Date(dateString);
  const formatDate = (date: Date, options: Intl.DateTimeFormatOptions | undefined) =>
    date.toLocaleDateString('en-US', options);

  const start = parseDate(renderingFields?.eventstart?.fields?.eyebrowText?.value);
  const end = parseDate(renderingFields?.eventend?.fields?.eyebrowText?.value);

  const formatYear = (date: Date) => date.getFullYear();

  let eventDate;

  const formattedStartDate = formatDate(start, { month: 'long', day: 'numeric' });
  const formattedYearStart = formatYear(start);
  const formattedEndDate = formatDate(end, { day: 'numeric' });
  const formattedEndDateMonth = formatDate(end, { month: 'long', day: 'numeric' });
  const formattedYearEnd = formatYear(end);

  if (
    start.getMonth() === end.getMonth() &&
    start.getDate() !== end.getDate() &&
    formattedYearStart !== formattedYearEnd
  ) {
    // If the start and end dates have the same month; Different date
    eventDate = `${formattedStartDate}-${formattedEndDate}, ${formattedYearStart}`;
  } else if (start.getDate() === end.getDate() && start.getMonth() === end.getMonth()) {
    // If the start and end dates have the same date and month
    eventDate = `${formattedStartDate}, ${formattedYearStart}`;
  } else if (start.getMonth() !== end.getMonth()) {
    // If the start and end dates have different months
    eventDate = `${formattedStartDate} - ${formattedEndDateMonth}, ${formattedYearEnd}`;
  } else if (formattedYearStart !== formattedYearEnd) {
    // If the start and end dates have different months or dates
    eventDate = `${formattedStartDate}, ${formattedYearStart} - ${formattedEndDateMonth}, ${formattedYearEnd}`;
  } else {
    eventDate = `${formattedStartDate}-${formattedEndDate}, ${formattedYearStart}`;
  }

  return (
    <div
      className={classNames(
        'group relative w-full border-t border-gray pt-s',
        templateClasses?.gridItem
      )}
    >
      {/* Event Date */}
      {eventDate !== 'Invalid Date - Invalid Date, NaN' && (
        <Eyebrow
          classes={templateClasses?.eyebrow}
          fields={{ eyebrowText: { value: eventDate } }}
        />
      )}
      {/* Event Headline */}
      <Headline classes={templateClasses?.headline} {...renderingFields.eventname} />
      {/* Event Description */}
      {renderingFields.eventdescription.fields.body.value && (
        <BodyCopy
          classes={classNames(templateClasses?.body, '!mb-xxs break-words')}
          {...renderingFields.eventdescription}
        />
      )}
      {/* Event Time Card */}
      <TimeCard
        showroomHours={renderingFields?.eventtime?.fields?.subheadlineText?.value}
        classes={templateClasses?.showroomHours?.events}
      />
      {/* Event Address */}
      {renderingFields.eventaddress.fields.subheadlineText.value && (
        <>
          <Subheadline
            classes={classNames(templateClasses?.body, '!font-bold !text-black !font-serif !mb-0')}
            fields={{ subheadlineText: { value: 'Location' } }}
          />
          <Subheadline
            classes={classNames(templateClasses?.body, '!font-serif !mb-0')}
            {...renderingFields.eventaddress}
          />
        </>
      )}
      {/* Event Directions */}
      <ButtonLink
        classes={classNames(templateClasses?.buttonGroup, '!text-body text-darkprimary mb-xxs')}
        field={{
          value: {
            text: 'Directions',
            href: `https://www.google.com/maps/search/?api=1&query=${renderingFields?.eventaddress?.fields?.subheadlineText?.value}`,
            target: '_blank',
          },
        }}
        variant={undefined}
      />
      {/* Event CTA */}
      {renderingFields.eventcta.fields.cta1Link.value.href && (
        <ButtonGroup classes={templateClasses?.buttonGroup} {...renderingFields?.eventcta} />
      )}
    </div>
  );
};

export default EventCardMarkup;
