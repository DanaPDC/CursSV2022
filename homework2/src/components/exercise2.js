import PropTypes from "prop-types";
import React, { useState } from "react";

const Exercise2 = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="border-style">
      <div>Exercitiu 2</div>
      <div className={isActive ? "color-name" : null} onClick={toggleClass}>
        {props.name}
      </div>
      {isActive ? " Numele de alături este colorat" : ""}
    </div>
  );
};

Exercise2.propTypes = {
  name: PropTypes.string,
};

Exercise2.defaultProps = {
  name: "Here is your name",
};

export default Exercise2;
