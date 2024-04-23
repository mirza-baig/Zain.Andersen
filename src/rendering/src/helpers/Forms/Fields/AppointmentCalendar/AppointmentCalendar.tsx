import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { FormFieldProps } from 'lib/forms/FormFieldProps';
import { FormFieldExport } from 'lib/forms';
import { Calendar } from 'primereact/calendar';
import { useOnlineScheduling } from 'lib/forms/OnlineScheduling/OnlineSchedulingContext';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { getValidatonSchema, replacePlaceholders } from 'lib/forms/FormFieldUtils';
import { Field, FormikValues, useFormikContext } from 'formik';
import { useTheme } from 'lib/context/ThemeContext';
import { FieldWrapperTheme } from '../../Structure/FieldWrapper/FieldWrapper.Theme';
import classNames from 'classnames';

export type AppointmentCalendarProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Forms.Fields.AppointmentCalendar & FormFieldProps;

type ApptProps = {
  date: string;
  times: any | Array<any>;
};

const getAppointmentCalendarInitialValue = () => {
  return '';
};

const getApptCalendarValidationSchema = (
  props: AppointmentCalendarProps,
  schema: yup.AnyObject
) => {
  const { validations } = props?.fields;
  if (!validations) {
    return schema;
  }

  const validator = getValidatonSchema('string', props);
  if (!validator) {
    return schema;
  }

  schema[props?.fields?.fieldName?.value] = (validator as yup.StringSchema).trim();

  return schema;
};

const CalendarComponent = (props: AppointmentCalendarProps): JSX.Element => {
  const { secondarySubmissionResponse } = useOnlineScheduling();
  const appointments = secondarySubmissionResponse?.data?.territoryBasedAppointments;
  const [apptTimeSlots, setApptTimeSlots] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { touched, errors, setFieldValue } = useFormikContext<FormikValues>();
  const { themeData } = useTheme(FieldWrapperTheme);

  const placeholders: Record<string, string> = {
    fieldLabel: props.name,
  };

  const getApptDateTimes = (appts: string[] | undefined) => {
    let apptsDateTimes: Array<ApptProps> = [];

    if (appts) {
      //sort date/times asc and group times by dates
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

  const setSelectedDateTimes = (userSelectedDate: Date | null) => {
    setFieldValue(props?.fields?.fieldName?.value, '', false);
    setSelectedDate(userSelectedDate!);
    setApptTimeSlots(
      mappedAppointments
        .filter((_id, idx, arr) => arr[idx].date == userSelectedDate?.toLocaleDateString())
        .map((appt) =>
          appt.times.map((times: string, index: number) => (
            <li
              key={index}
              tabIndex={index}
              onClick={(e) => {
                const apptSlot =
                  userSelectedDate?.toLocaleDateString() + ' ' + e.currentTarget.innerText;
                setFieldValue(props?.fields?.fieldName?.value, apptSlot, true);
              }}
              className="w-[124px] rounded-[100px] border-[2px] border-gray bg-light-gray px-6 py-1 font-sans font-medium text-black hover:cursor-pointer hover:border-black focus:border-black"
            >
              {times}
            </li>
          ))
        )
    );
  };

  useEffect(() => {
    setSelectedDateTimes(highlightedDates[0]);
  }, [secondarySubmissionResponse]);

  const dateTemplate = (date: any) => {
    if (date.today) {
      date.today = false;
    }
    return date.day;
  };

  return (
    <div className="col-span-12 flex flex-col pt-4 md:col-span-6 md:flex-row">
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
      <div id="timeSlots" className="flex h-fit min-h-min w-[300px] flex-col pt-4 pl-4  md:pt-0">
        <span className="w-max font-sans text-black">
          Available times for{' '}
          {selectedDate?.toLocaleDateString('en-us', {
            day: 'numeric',
            year: 'numeric',
            month: 'long',
          })}
          :
        </span>
        <ul className="flex w-[300px] flex-col items-center gap-4 py-4 md:w-[250px] ">
          {apptTimeSlots!}
        </ul>
        <Field id={props.id} name={props?.fields?.fieldName?.value || props.id} type="hidden" />
        {touched[props?.fields?.fieldName?.value] && errors[props?.fields?.fieldName?.value] && (
          <>
            <span
              className={classNames(
                themeData.classes.errorMessage,
                themeData.classes.errorTextColor
              )}
            >
              {replacePlaceholders(errors[props?.fields?.fieldName?.value] as string, placeholders)}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const AppointmentCalendar: FormFieldExport = {
  reactComponent: CalendarComponent,
  getInitialValue: getAppointmentCalendarInitialValue,
  getValidationSchema: getApptCalendarValidationSchema,
};

export default AppointmentCalendar;
