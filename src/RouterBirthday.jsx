import React from "react";
import Main from "./Main";

const RouterBirthday = (props) => {
  const { params } = props.match;
  const { name, day, month } = params;
  return (
    <>
      <Main name={name} month={month} day={day} />
    </>
  );
};

export default RouterBirthday;
