import isEmail from "validator/lib/isEmail";

import { useEffect, useState, useCallback } from "react";

export function Form({ setTrigerDecorativeBookingSection }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    day: "",
    month: "",
    year: "",
    hours: "",
    minutes: "",
  });

  // useEffect(() => { console.log(form);}, [form])

  const [mainCondition, setMainCondition] = useState(true);

  // const [errorFormName, setErrorFormName] = useState("");
  // const [errorFormEmail, setErrorFormEmail] = useState("");

  const [errorFormDay, setErrorFormDay] = useState(true);

  const [errorFormMonth, setErrorFormMonth] = useState(true);
  const [errorFormYear, setErrorFormYear] = useState(true);
  const [errorFormHours, setErrorFormHours] = useState(true);
  const [errorFormMinutes, setErrorFormMinutes] = useState(true);

  const [errorFormDate, setErrorFormDate] = useState(true);
  const [errorFormTime, setErrorFormTime] = useState(true);

  const [errorFormName, setErrorFormName] = useState("lorem");
  const [errorFormEmail, setErrorFormEmail] = useState("lorem");

  // const [errorFormDay, setErrorFormDay] = useState(false);
  // const [errorFormMonth, setErrorFormMonth] = useState(false);
  // const [errorFormYear, setErrorFormYear] = useState(false);
  // const [errorFormHours, setErrorFormHours] = useState(false);
  // const [errorFormMinutes, setErrorFormMinutes] = useState(false);
  // const [errorFormDate, setErrorFormDate] = useState(false);
  // const [errorFormTime, setErrorFormTime] = useState(false);

  const [dataFildsetInfo, setDataFildsetInfo] = useState("Pick a date");
  const [timeFildsetInfo, setTimeFildsetInfo] = useState("Pick a time");

  const [secondTimePlus, setSecondTimePlus] = useState(false);

  const [validationTimes, setValidationTimes] = useState(0);

  const [halfOfDay, setHalfOfDay] = useState("AM");

  const [people, setPeople] = useState(1);

  const timeZone = "Europe/London";

  function getCumbriaNow() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);

    const get = (type) => parts.find((p) => p.type === type).value;

    const cumbriaNow = new Date();

    cumbriaNow.setFullYear(parseInt(get("year")));

    cumbriaNow.setMonth(parseInt(get("month")) - 1);
    cumbriaNow.setDate(parseInt(get("day")));
    cumbriaNow.setHours(parseInt(get("hour")));
    cumbriaNow.setMinutes(parseInt(get("minute")));
    cumbriaNow.setSeconds(parseInt(get("second")));
    cumbriaNow.setMilliseconds(0);

    return cumbriaNow;
  }

  const isBeforeEndOfDayInCumbria = useCallback((givenDateString) => {
    const nowCumbria = getCumbriaNow();

    const [year, month, day] = givenDateString.split("-").map(Number);

    const givenCumbria = new Date();
    givenCumbria.setFullYear(year, month - 1, day);
    givenCumbria.setHours(0, 0, 0, 0);

    const nowDateOnly = new Date(nowCumbria);
    nowDateOnly.setHours(0, 0, 0, 0);

    const tenPm = new Date(nowCumbria);
    tenPm.setHours(22, 0, 0, 0);

    const isFutureOrToday = givenCumbria.getTime() >= nowDateOnly.getTime();
    const isSameDay = givenCumbria.getTime() === nowDateOnly.getTime();
    const isBeforeTenPm = nowCumbria.getTime() < tenPm.getTime();

    return isFutureOrToday && (!isSameDay || isBeforeTenPm);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const pmHours = ["12", "01", "02", "03", "04", "05", "06", "07", "08"];
    const amHours = ["09", "10", "11"];

    if (amHours.includes(form.hours)) {
      setHalfOfDay("AM");
    } else if (pmHours.includes(form.hours)) {
      setHalfOfDay("PM");
    }
  }, [form.hours]);

  useEffect(() => {
    if (!form.name.trim()) {
      setErrorFormName("This field is required");
    } else {
      setErrorFormName("");
    }
  }, [form.name]);

  useEffect(() => {
    if (!form.email.trim()) {
      setErrorFormEmail("This field is required");
    } else if (!isEmail(form.email)) {
      setErrorFormEmail("This field is incorrect");
    } else {
      setErrorFormEmail("");
    }
  }, [form.email]);

  useEffect(() => {
    if (form.day.length < 2) {
      setErrorFormDay(true);
      setErrorFormDate(false);
      setDataFildsetInfo("Pick a date");
    } else {
      setErrorFormDay(false);
    }
  }, [form.day]);

  useEffect(() => {
    if (form.month.length < 2) {
      setErrorFormMonth(true);
      setErrorFormDate(false);
      setDataFildsetInfo("Pick a date");
    } else {
      setErrorFormMonth(false);
    }
  }, [form.month]);

  useEffect(() => {
    if (form.year.length < 4) {
      setErrorFormYear(true);
      setErrorFormDate(false);
      setDataFildsetInfo("Pick a date");
    } else {
      setErrorFormYear(false);
    }
  }, [form.year]);

  useEffect(() => {
    if (form.hours.length < 2) {
      setErrorFormHours(true);
      setTimeFildsetInfo("Pick a time");
    } else {
      setErrorFormHours(false);
    }
  }, [form.hours]);

  useEffect(() => {
    if (form.minutes.length < 2) {
      setErrorFormMinutes(true);
      setTimeFildsetInfo("Pick a time");
    } else {
      setErrorFormMinutes(false);
    }
  }, [form.minutes]);

  useEffect(() => {
    if (form.minutes.length === 2 && form.hours.length === 2) {
      setTimeFildsetInfo("Picked time");
    }
  }, [form.hours, form.minutes]);

  useEffect(() => {
    if (
      (secondTimePlus && (errorFormHours || errorFormMinutes)) ||
      (secondTimePlus &&
        errorFormTime &&
        !errorFormDate &&
        !(errorFormMonth || errorFormDay || errorFormYear))
    ) {
      setTimeFildsetInfo("Pick a time");
    }
  }, [
    secondTimePlus,
    errorFormHours,
    errorFormMinutes,
    errorFormTime,
    errorFormDate,
    errorFormMonth,
    errorFormDay,
    errorFormYear,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSecondTimePlus(true);
    setValidationTimes((p) => p + 1);

    if (
      !errorFormDay &&
      !errorFormMonth &&
      !errorFormYear &&
      !errorFormHours &&
      !errorFormMinutes &&
      !errorFormDate &&
      !errorFormTime &&
      !errorFormName &&
      !errorFormEmail
    ) {
      setMainCondition(false);
      // window.scrollTo(0, 0);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTrigerDecorativeBookingSection(false);
    }
  };

  // const [errorFormDay, setErrorFormDay] = useState(true);

  // const [errorFormMonth, setErrorFormMonth] = useState(true);
  // const [errorFormYear, setErrorFormYear] = useState(true);
  // const [errorFormHours, setErrorFormHours] = useState(true);
  // const [errorFormMinutes, setErrorFormMinutes] = useState(true);

  // const [errorFormDate, setErrorFormDate] = useState(true);
  // const [errorFormTime, setErrorFormTime] = useState(true);

  // const [errorFormName, setErrorFormName] = useState("lorem");
  // const [errorFormEmail, setErrorFormEmail] = useState("lorem");

  const checkDateExistence = (year, month, day) => {
    const bidDate = `${year}-${month}-${day}`;

    const bidDateMonthComponent =
      Number(month[0] === "0" ? month.slice(1, 2) : month) - 1;
    const bidDateDayComponent = Number(day[0] === "0" ? day.slice(1, 2) : day);

    const dataTest = new Date(year, bidDateMonthComponent, bidDateDayComponent);
    const formatted = dataTest.toLocaleDateString("en-CA");

    if (bidDate === formatted) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (
      form.day.length === 2 &&
      form.month.length === 2 &&
      form.year.length === 4
    ) {
      const givenDate = `${form.year}-${form.month}-${form.day}`;

      if (
        isBeforeEndOfDayInCumbria(givenDate) &&
        checkDateExistence(form.year, form.month, form.day)
      ) {
        setErrorFormDate(false);

        setDataFildsetInfo("Picked date");
      } else {
        setErrorFormDate(true);
        setDataFildsetInfo("Pick a date");
      }
    }
  }, [form.month, form.day, form.year, isBeforeEndOfDayInCumbria]);

  useEffect(() => {
    if (
      form.day.length === 2 &&
      form.month.length === 2 &&
      form.year.length === 4 &&
      form.hours.length === 2 &&
      form.minutes.length === 2
    ) {
      const date = new Date();

      const timeZone = "Europe/London";

      const options = { timeZone, hour12: false };

      const zonedDate = new Date(date.toLocaleString("en-US", options));

      const year = zonedDate.getFullYear();
      const month = zonedDate.getMonth();

      const day = zonedDate.getDate();
      const hour = zonedDate.getHours();
      const minute = zonedDate.getMinutes();

      const nowltInMin =
        new Date(year, month, day, hour, minute).getTime() / 60000;

      const monthReady =
        Number(form.month[0] === "0" ? form.month.slice(1, 2) : form.month) - 1;
      const dayReady = Number(
        form.day[0] === "0" ? form.day.slice(1, 2) : form.day
      );

      const rightHour = () => {
        if (form.hours[0] === "0" && halfOfDay === "PM") {
          if (form.hours === "01") {
            return "13";
          } else if (form.hours === "02") {
            return "14";
          } else if (form.hours === "03") {
            return "15";
          } else if (form.hours === "04") {
            return "16";
          } else if (form.hours === "05") {
            return "17";
          } else if (form.hours === "06") {
            return "18";
          } else if (form.hours === "07") {
            return "19";
          } else if (form.hours === "08") {
            return "20";
          }
        }
        return form.hours.slice(1, 2);
      };

      const hoursReady = Number(
        form.hours[0] === "0" ? rightHour() : form.hours
      );

      const minutesReady = Number(
        form.minutes[0] === "0" ? form.minutes.slice(1, 2) : form.minutes
      );

      const thenInMin =
        new Date(
          Number(form.year),
          monthReady,
          dayReady,
          hoursReady,
          minutesReady
        ).getTime() / 60000;

      if (nowltInMin >= thenInMin) {
        setErrorFormTime(true);
      } else {
        setErrorFormTime(false);
        setTimeFildsetInfo("Picked time");
      }
    }
  }, [
    form.month,
    form.day,
    form.year,
    form.hours,
    form.minutes,
    halfOfDay,
    validationTimes,
  ]);

  function handleBlur(e) {
    const nextFocused = e.relatedTarget;

    if (nextFocused && nextFocused.id === "submitButton") {
      return;
    }

    const val = e.target.value;
    const name = e.target.name;

    if (val.length === 1 && val !== "0") {
      setForm((prev) => ({ ...prev, [name]: "0" + val }));
    } else if (val === "0") {
      setForm((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function handleMinutesBlur(e) {
    const nextFocused = e.relatedTarget;

    if (nextFocused && nextFocused.id === "submitButton") {
      return;
    }

    const val = e.target.value;
    const name = e.target.name;

    if (val.length === 1) {
      setForm((prev) => ({ ...prev, [name]: "0" + val }));
    }
  }

  function handleYearBlur(e) {
    const nextFocused = e.relatedTarget;

    if (nextFocused && nextFocused.id === "submitButton") {
      return;
    }

    const val = e.target.value;
    const name = e.target.name;

    if (val.length === 2 && Number(val) >= 25) {
      setForm((prev) => ({ ...prev, [name]: "20" + val }));
    } else if (val.length < 4) {
      setForm((prev) => ({ ...prev, [name]: "" }));
    }
  }

  return (
    <>
      {mainCondition ? (
        <form
          className={`form ${
            secondTimePlus && errorFormEmail ? "form-long-height" : ""
          }`}
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          noValidate
        >
          <fieldset
            className={`fildset-name-email ${
              secondTimePlus && errorFormEmail
                ? "fildset-name-email-long-margin-bottom"
                : ""
            }`}
          >
            <legend className="visually-hidden">Contact Information</legend>

            {/* <label htmlFor="name" className="visually-hidden">
              Name
            </label> */}

            <div className="input-set">
              <label htmlFor="name" className="visually-hidden">
                Name
              </label>
              <input
                autoComplete="off"
                id="name"
                className={`input ${
                  secondTimePlus && errorFormName
                    ? "placeholder-error border-input-error"
                    : "placeholder-normal"
                }`}
                type="text"
                maxlength="21"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.target.blur();
                  }
                }}
              />
              <div className="error_mesage_div">
                {secondTimePlus && errorFormName && (
                  <p className="errorText">{errorFormName}</p>
                )}
              </div>
            </div>
            {/* <label htmlFor="email" className="visually-hidden">
              Email
            </label> */}
            <div className="input-set">
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                autoComplete="off"
                id="email"
                className={`input ${
                  secondTimePlus && errorFormEmail
                    ? "placeholder-error border-input-error wrong-input-txt-color"
                    : "placeholder-normal"
                }`}
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.target.blur();
                  }
                }}
              />
              <div className="error_mesage_div">
                {secondTimePlus && errorFormEmail && (
                  <p className="errorText">{errorFormEmail}</p>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset className="fildset-date">
            <legend className="visually-hidden">Date set fieldset</legend>

            <div
              className={`action-of-the-field-info ${
                (secondTimePlus &&
                  (errorFormMonth || errorFormDay || errorFormYear)) ||
                (secondTimePlus && errorFormDate)
                  ? "wrong-input-txt-color "
                  : ""
              }`}
            >
              {dataFildsetInfo}

              {(secondTimePlus &&
                (errorFormMonth || errorFormDay || errorFormYear) && (
                  <p className=" errorText-data">This fild is incomplite</p>
                )) ||
                (secondTimePlus && errorFormDate && (
                  <p className="errorText-data">This fild is incorrect</p>
                ))}
            </div>

            <div className="data-time-fields-set">
              <label htmlFor="day" className="visually-hidden">
                Day
              </label>

              <input
                autoComplete="off"
                name="day"
                type="text"
                inputMode="numeric"
                placeholder="DD"
                maxLength={2}
                className={`input input-day-month-hours-minutes ${
                  (secondTimePlus &&
                    (errorFormMonth || errorFormDay || errorFormYear)) ||
                  (secondTimePlus && errorFormDate)
                    ? "placeholder-error border-input-error wrong-input-txt-color"
                    : "placeholder-normal"
                }`}
                onInput={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 2);

                  if (
                    val.length === 2 &&
                    (Number(val) < 1 || Number(val) > 31)
                  ) {
                    val = val.slice(0, 1);
                  }
                  e.target.value = val;
                }}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleBlur(e);
                    e.target.blur();
                  }
                }}
                value={form.day}
                onChange={handleChange}
              />

              <label htmlFor="month" className="visually-hidden">
                Month
              </label>

              <input
                autoComplete="off"
                type="text"
                inputMode="numeric"
                placeholder="MM"
                className={`input input-day-month-hours-minutes ${
                  (secondTimePlus &&
                    (errorFormMonth || errorFormDay || errorFormYear)) ||
                  (secondTimePlus && errorFormDate)
                    ? "placeholder-error border-input-error wrong-input-txt-color"
                    : "placeholder-normal"
                }`}
                maxLength={2}
                name="month"
                onInput={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 2);

                  if (
                    val.length === 2 &&
                    (Number(val) < 1 || Number(val) > 12)
                  ) {
                    val = val.slice(0, 1);
                  }
                  e.target.value = val;
                }}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleBlur(e); //
                    e.target.blur();
                  }
                }}
                value={form.month}
                onChange={handleChange}
              />

              <label htmlFor="year" className="visually-hidden">
                Year
              </label>

              <input
                autoComplete="off"
                name="year"
                type="text"
                inputMode="numeric"
                placeholder="YYYY"
                className={`input input-year-pseudo-input-meridiem ${
                  (secondTimePlus &&
                    (errorFormMonth || errorFormDay || errorFormYear)) ||
                  (secondTimePlus && errorFormDate)
                    ? "placeholder-error border-input-error wrong-input-txt-color"
                    : "placeholder-normal"
                }`}
                maxLength={4}
                onInput={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 4);

                  e.target.value = val;
                }}
                onBlur={handleYearBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleYearBlur(e);
                    e.target.blur();
                  }
                }}
                value={form.year}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="fildset-time">
            <legend className="visually-hidden">Time set fieldset</legend>

            <div
              className={`action-of-the-field-info ${
                (secondTimePlus && (errorFormHours || errorFormMinutes)) ||
                (secondTimePlus &&
                  errorFormTime &&
                  !errorFormDate &&
                  !(errorFormMonth || errorFormDay || errorFormYear))
                  ? "wrong-input-txt-color"
                  : ""
              }`}
            >
              {timeFildsetInfo}

              {(secondTimePlus && (errorFormHours || errorFormMinutes) && (
                <p className="errorText-data">This fild is incomplite</p>
              )) ||
                (secondTimePlus &&
                  errorFormTime &&
                  !errorFormDate &&
                  !(errorFormMonth || errorFormDay || errorFormYear) && (
                    <p className="errorText-data">This fild is incorrect</p>
                  ))}
            </div>

            <div className="data-time-fields-set">
              <label htmlFor="hours" className="visually-hidden">
                Hours
              </label>

              <input
                autoComplete="off"
                className={`input input-day-month-hours-minutes
							${
                (secondTimePlus && (errorFormHours || errorFormMinutes)) ||
                (secondTimePlus &&
                  errorFormTime &&
                  !errorFormDate &&
                  !(errorFormMonth || errorFormDay || errorFormYear))
                  ? "placeholder-error border-input-error wrong-input-txt-color"
                  : "placeholder-normal"
              }
							
							`}
                name="hours"
                type="text"
                inputMode="numeric"
                placeholder="09"
                maxLength={2}
                onInput={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 2);

                  if (
                    val.length === 2 &&
                    (Number(val) < 1 || Number(val) > 12)
                  ) {
                    val = val.slice(0, 1);
                  }
                  e.target.value = val;
                }}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleBlur(e);
                    e.target.blur();
                  }
                }}
                value={form.hours}
                onChange={handleChange}
              />

              <label htmlFor="minuts" className="visually-hidden">
                Minutes
              </label>

              <input
                autoComplete="off"
                className={`input input-day-month-hours-minutes
							${
                (secondTimePlus && (errorFormHours || errorFormMinutes)) ||
                (secondTimePlus &&
                  errorFormTime &&
                  !errorFormDate &&
                  !(errorFormMonth || errorFormDay || errorFormYear))
                  ? "placeholder-error border-input-error wrong-input-txt-color"
                  : "placeholder-normal"
              }
							
							`}
                name="minutes"
                type="text"
                inputMode="numeric"
                placeholder="00"
                maxLength={2}
                onInput={(e) => {
                  let val = e.target.value.replace(/\D/g, "").slice(0, 2);

                  if (
                    val.length === 2 &&
                    (Number(val) < 0 || Number(val) > 59)
                  ) {
                    val = val.slice(0, 1);
                  }
                  e.target.value = val;
                }}
                onBlur={handleMinutesBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();

                    handleMinutesBlur(e);
                    e.target.blur();
                  }
                }}
                value={form.minutes}
                onChange={handleChange}
              />

              <div
                className={`half-of-day-indecator input-year-pseudo-input-meridiem pseudo-input
							${
                (secondTimePlus && (errorFormHours || errorFormMinutes)) ||
                (secondTimePlus &&
                  errorFormTime &&
                  !errorFormDate &&
                  !(errorFormMonth || errorFormDay || errorFormYear))
                  ? "placeholder-error border-input-error wrong-input-txt-color"
                  : "placeholder-normal"
              }
							
							`}
              >
                {halfOfDay}
              </div>
            </div>
          </fieldset>

          <fieldset className="fildset-people">
            <button
              className="button-decrement"
              onClick={(e) => {
                e.preventDefault();
                if (people > 1) setPeople((p) => p - 1);
              }}
            >
              -
            </button>
            <div className="people">{people} people</div>
            <button
              className="button-increment"
              onClick={(e) => {
                e.preventDefault();
                if (people < 20) setPeople((p) => p + 1);
              }}
            >
              +
            </button>
          </fieldset>

					<fieldset className="fildset-button">
						
						
            <button
              id="submitButton"
              className={`submit-button ${
                !secondTimePlus && "submit-button-pressable"
              } ${
                secondTimePlus &&
                !errorFormEmail &&
                !errorFormName &&
                timeFildsetInfo === "Picked time" &&
                dataFildsetInfo === "Picked date" &&
                "submit-button-pressable"
              }`}
              type="submit"
            >
              MAKE RESERVATION
						</button>
						

          </fieldset>
        </form>
      ) : (
        <div className="order-complite-massage">
          <div className="order-complite-massage-info">
            <h1 className="booking-complite-txt-block-h1">{`Dear ${form.name}`}</h1>
            <p className="booking-complite-txt-block-p">
              Your reservation was placed.
              <br /> Please check your email for confirmation. <br />
              You can modify or cancel your reservation
              <br /> using the link inside.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
