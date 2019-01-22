import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Row = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Arrow = styled.button`
  align-self: center;
  position: absolute;
`;

const ArrowLeft = styled(Arrow)`
  left: 1rem;
`;

const ArrowRight = styled(Arrow)`
  right: 1rem;
`;

// increase or decrease state
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { start: state.start + 1, end: state.end + 1 };
    case "decrease":
      return { start: state.start - 1, end: state.end - 1 };
    default:
      return state;
  }
}

const Slider = ({ movies }) => {
  const [state, dispatch] = useReducer(reducer, { start: 0, end: 5 });

  const [display, setDisplay] = useState([]);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  // toggle nextButton disabled based on state.end
  useEffect(
    () => {
      if (state.end === movies.length) setNextDisabled(true);
      if (nextDisabled && state.end !== movies.length) setNextDisabled(false);
    },
    [state.end]
  );

  // toggle prev button disbaled based on state.start
  useEffect(
    () => {
      if (state.start === 0) setPrevDisabled(true);
      if (prevDisabled === true && state.start !== 0) setPrevDisabled(false);
    },
    [state.start]
  );

  // set display of movies when state changes
  useEffect(
    () => {
      setDisplay(movies.slice(state.start, state.end));
    },
    [state]
  );

  // dispatch next/prev state change
  const handleClick = e => dispatch({ type: e.currentTarget.name });

  return (
    <Row>
      <ArrowLeft name="decrease" onClick={handleClick} disabled={prevDisabled}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </ArrowLeft>
      {display}
      <ArrowRight name="increase" onClick={handleClick} disabled={nextDisabled}>
        <FontAwesomeIcon icon={faAngleRight} />
      </ArrowRight>
    </Row>
  );
};

export default Slider;
