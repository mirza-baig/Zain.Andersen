import classNames from 'classnames';
import React from 'react';
import { Subheadline } from 'src/helpers/Subheadline';

type TimeCardProps = {
  showroomHours: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes?: { [key: string]: any };
  title?: string;
};

const TimeCard = ({ classes, showroomHours, title }: TimeCardProps) => {
  const formattedHours = (showroomHours && JSON.parse(decodeURIComponent(showroomHours))) || [];

  if (!formattedHours?.length) {
    return <></>;
  }

  return (
    <>
      {title && (
        <Subheadline classes={classes?.title} fields={{ subheadlineText: { value: title } }} />
      )}
      <ul className={classNames(classes?.listWrapper)}>
        {formattedHours.map((item: { name?: string; value?: string }, index: number) => (
          <li key={index} className={classes?.listItem}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TimeCard;
