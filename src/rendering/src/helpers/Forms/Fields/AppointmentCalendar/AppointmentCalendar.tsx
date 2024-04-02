import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormFieldExport } from 'lib/forms';
import { Calendar } from 'primereact/calendar';
import { useOnlineScheduling } from 'lib/forms/OnlineScheduling/OnlineSchedulingContext';
import { useEffect, useState } from 'react';

export type AppointmentCalendarProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.Fields.AppointmentCalendar & FormFieldProps;

type ApptProps = {
  date: string;
  times: any | Array<any>;
};

const CalendarComponent = (): JSX.Element => {
  const { secondarySubmissionResponse } = useOnlineScheduling();
  const appointments = secondarySubmissionResponse?.data?.territoryBasedAppointments;
  const [apptTimeSlots, setApptTimeSlots] = useState<any[]>([]);
  const [selectedDate, setDate] = useState<Date>();

  console.log('-----OS Data----');
  console.log(appointments);

  const getApptDateTimes = (appts: string[] | undefined) => {
    let apptsDateTimes: Array<ApptProps> = [];

    if (appts) {
      //sort date/times asc and group times by date
      const groupedApptDateTimes = appts
        .map((date) => new Date(date))
        .sort((a, b) => a.getTime() - b.getTime())
        .reduce(
          (prevItem: { [key: string]: string }, currentItem) => ({
            ...prevItem,
            [currentItem.toLocaleDateString()]: [
              ...(prevItem[currentItem.toLocaleDateString()] || []),
              currentItem.toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric' }),
            ],
          }),
          {}
        );

      apptsDateTimes = Object.entries(groupedApptDateTimes).map((entry) => ({
        date: entry[0],
        times: entry[1],
      }));
    }
    return apptsDateTimes;
  };

  const mappedAppointments = getApptDateTimes(appointments);
  const highlightedDates = mappedAppointments.map((appt) => new Date(appt.date));

  console.log('-----Mapped Data----');
  console.log(mappedAppointments);

  const setSelectedDateTimes = (dateSelected: Date | null) => {
    setDate(dateSelected!);
    setApptTimeSlots(
      mappedAppointments
        .filter((_id, idx, arr) => {
          if (arr[idx].date == dateSelected?.toLocaleDateString()) {
            return true;
          }
          return false;
        })
        .map((appt) =>
          appt.times.map((times: string, index: number) => (
            <li
              key={index}
              tabIndex={index}
              className="w-[124px] rounded-[100px] border-[2px] border-gray bg-light-gray px-6 py-1 font-sans font-medium text-black hover:cursor-pointer hover:border-black focus:border-black"
            >
              {times}
            </li>
          ))
        )
    );
  };

  useEffect(() => {
    console.log('running useEffect');
    setSelectedDateTimes(highlightedDates[0]);
  }, [secondarySubmissionResponse]);

  const dateTemplate = (date: any) => {
    if (date.today) {
      date.today = false;
    }
    return date.day;
  };

  return (
    <div className="col-span-3 flex pt-4">
      <Calendar
        enabledDates={highlightedDates}
        onChange={(e) => {
          setSelectedDateTimes(e.value!);
        }}
        value={selectedDate}
        showOtherMonths={false}
        dateTemplate={dateTemplate}
        inline
        pt={{
          weekDay: {
            className: 'font-regular font-heavy',
          },
          title: {
            className: 'text-s pl-m pt-8',
          },
          monthTitle: {
            className: 'pr-1',
          },
          header: {
            className: 'inline font-sans font-medium',
          },
          dayLabel: {
            className: 'rounded-full',
          },
        }}
      ></Calendar>
      <div id="timeSlots" className="flex min-h-min w-[300px] flex-col pl-4">
        <span className="w-max font-sans text-black">
          Available times for{' '}
          {selectedDate?.toLocaleDateString('en-us', {
            day: 'numeric',
            year: 'numeric',
            month: 'long',
          })}
          :
        </span>
        <ul className="flex flex-col items-center gap-4 py-4">{apptTimeSlots!}</ul>
      </div>
    </div>
  );
};

const AppointmentCalendar: FormFieldExport = {
  reactComponent: CalendarComponent,
};

export default AppointmentCalendar;
