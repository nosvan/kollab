import { CreateItem, ItemYupValidationError } from 'lib/types/item';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getTimeCeiling } from 'utils/dateUtils';
import styles from './date_inputs.module.css';

interface DateFormProps {
  selectedDateForNewItemFormattedYYYYMMDD: string;
  formValues: CreateItem;
  setFormValues: Dispatch<SetStateAction<CreateItem>>;
  yupValidationError: ItemYupValidationError;
  setYupValidationError: Dispatch<SetStateAction<ItemYupValidationError>>;
  timeControlChecked: boolean;
  setTimeControlChecked: Dispatch<SetStateAction<boolean>>;
  dateRangeControlChecked: boolean;
}

export function DateInputs(props: DateFormProps) {
  const {
    setFormValues,
    yupValidationError,
    setYupValidationError,
    dateRangeControlChecked,
    selectedDateForNewItemFormattedYYYYMMDD,
  } = props;

  const [dateTzSensitive, setDateTzSensitive] = useState(
    selectedDateForNewItemFormattedYYYYMMDD
  );
  const [timeTzSensitive, setTimeTzSensitive] = useState(() =>
    getTimeCeiling(new Date(), 30)
  );
  const [dateTzSensitiveEnd, setDateTzSensitiveEnd] = useState(
    selectedDateForNewItemFormattedYYYYMMDD
  );
  const [timeTzSensitiveEnd, setTimeTzSensitiveEnd] = useState(() =>
    getTimeCeiling(new Date(), 30, 30)
  );

  useEffect(() => {
    setFormValues((prevValue) => {
      return {
        ...prevValue,
        date_tz_sensitive: new Date(`${dateTzSensitive}T${timeTzSensitive}`),
        date_tz_sensitive_end: new Date(
          `${dateTzSensitiveEnd}T${timeTzSensitiveEnd}`
        ),
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dateTzSensitive,
    timeTzSensitive,
    dateTzSensitiveEnd,
    timeTzSensitiveEnd,
  ]);

  return (
    <div>
      {/* does not include time */}
      {!props.timeControlChecked && (
        <span className="flex flex-row space-x-1">
          <span>
            <input
              className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
              type="date"
              value={selectedDateForNewItemFormattedYYYYMMDD}
              onFocus={() =>
                setYupValidationError((prevValue) => {
                  return {
                    ...prevValue,
                    date_tz_insensitive: false,
                  };
                })
              }
              onChange={(event) => {
                props.setFormValues({
                  ...props.formValues,
                  date_tz_insensitive: event.target.value
                    ? event.target.value
                    : undefined,
                });
              }}
            />
            {yupValidationError.date_tz_insensitive && (
              <span className={`${styles['field-error-styling']}`}>
                invalid
              </span>
            )}
          </span>
          {dateRangeControlChecked && (
            <span>
              <input
                className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
                type="date"
                value={selectedDateForNewItemFormattedYYYYMMDD}
                onFocus={() =>
                  setYupValidationError((prevValue) => {
                    return {
                      ...prevValue,
                      date_tz_insensitive_end: false,
                    };
                  })
                }
                onChange={(event) => {
                  props.setFormValues({
                    ...props.formValues,
                    date_tz_insensitive_end: event.target.value
                      ? event.target.value
                      : undefined,
                  });
                }}
              />
              {yupValidationError.date_tz_insensitive_end && (
                <span className={`${styles['field-error-styling']}`}>
                  invalid
                </span>
              )}
            </span>
          )}
        </span>
      )}
      {/* includes time */}
      {props.timeControlChecked && (
        <span className="flex flex-col space-y-1">
          <span className="flex flex-row space-x-1">
            <span>
              <input
                className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
                type="date"
                value={dateTzSensitive}
                onFocus={() =>
                  setYupValidationError((prevValue) => {
                    return {
                      ...prevValue,
                      date_tz_sensitive: false,
                    };
                  })
                }
                onChange={(event) => {
                  setDateTzSensitive(event.target.value);
                }}
              />
              {yupValidationError.date_tz_sensitive && (
                <span className={`${styles['field-error-styling']}`}>
                  invalid
                </span>
              )}
            </span>
            <span>
              <input
                className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
                type="time"
                value={timeTzSensitive}
                onFocus={() =>
                  setYupValidationError((prevValue) => {
                    return {
                      ...prevValue,
                      date_tz_sensitive: false,
                    };
                  })
                }
                onChange={(event) => {
                  setTimeTzSensitive(event.target.value);
                }}
              />
              {yupValidationError.date_tz_sensitive && (
                <span className={`${styles['field-error-styling']}`}>
                  invalid
                </span>
              )}
            </span>
          </span>
          {dateRangeControlChecked && (
            <span className="flex flex-row space-x-1">
              <span className="flex flex-col">
                <input
                  className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
                  type="date"
                  value={dateTzSensitiveEnd}
                  onFocus={() =>
                    setYupValidationError((prevValue) => {
                      return {
                        ...prevValue,
                        date_tz_sensitive_end: false,
                      };
                    })
                  }
                  onChange={(event) => {
                    setDateTzSensitiveEnd(event.target.value);
                  }}
                />
                {yupValidationError.date_tz_sensitive_end && (
                  <span className={`${styles['field-error-styling']}`}>
                    invalid
                  </span>
                )}
              </span>
              <span>
                <span className="flex flex-col">
                  <input
                    className="text-white bg-stone-800 hover:bg-stone-700 p-1 rounded-xl"
                    type="time"
                    value={timeTzSensitiveEnd}
                    onFocus={() =>
                      setYupValidationError((prevValue) => {
                        return {
                          ...prevValue,
                          time_tz_sensitive_end: false,
                        };
                      })
                    }
                    onChange={(event) => {
                      setTimeTzSensitiveEnd(event.target.value);
                    }}
                  />
                  {yupValidationError.time_tz_sensitive_end && (
                    <span className={`${styles['field-error-styling']}`}>
                      invalid
                    </span>
                  )}
                </span>
              </span>
            </span>
          )}
        </span>
      )}
    </div>
  );
}
