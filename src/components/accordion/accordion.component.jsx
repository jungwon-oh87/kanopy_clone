import React from "react";
import "./accordion.styles.css";

const Accordion = (props) => {
  const { title, content, expand, onClick } = props;
  return (
    <div className="w-5/6 m-auto">
      <dt
        className={expand ? "accord-title accord-is-expanded" : "accord-title"}
        onClick={onClick}
      >
        <span className="text-4xl">{title}</span>
      </dt>
      <dd
        className={
          expand ? "accord-content accord-is-expanded" : "accord-content"
        }
      >
        {content}
      </dd>
    </div>
  );
};

export default Accordion;