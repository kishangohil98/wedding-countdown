import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";
import Logo from "./Vidhi-kishan-wedding-logo.png";

const Birthday = ({ name, day, month }) => {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    // This is if not enough params are provided
    name = "Vidhi & Kishan"; // Name of the Person
    month = 2; // Month of the Birthday
    day = 21; // Day of the Birthday
  }

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Birthday in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Bithday Boolean
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const birthdayTime = birthdayDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthBday = monthNames[birth.getMonth()];

  return (
    <div className="page">
      <Countdown countdownData={state} name={name} />
      {!isItBday && (
        <>
          <p>
            {" "}
            <strong>🎯Wedding Date</strong>
          </p>
          <p className="birthdate">
            {monthBday} {day}, {currentYear}🚀
          </p>
          <div className="credits">
            <img src={Logo} alt="Vidhi-Kishan-Logo" className="github-logo" />
          </div>
          {/* <Link to='/generate'>Generate Here</Link> */}
        </>
      )}
      <footer
        style={{
          padding: "24px",
        }}
      >
        <center>
          <div className="contain-footer-info">
            <span className="made-with">Made with 🤍 </span>
            <span className="by">
              by{" "}
              <a href="https://github.com/kishangohil98" className="byline">
                Kishan Gohil
              </a>
            </span>
          </div>
        </center>
      </footer>
    </div>
  );
};

export default Birthday;
