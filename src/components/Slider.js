import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Transition, animated } from "react-spring";

const Row = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Arrow = styled.button`
  display: ${props => props.disabled && "none"};
  position: absolute;
  cursor:pointer;
  color: #fff;
  height: 180px
  top: 55px;
  font-size: 2rem;
  border:none;
  outline: none;
  background: rgba(0,0,0,0.5);
  z-index: 1;
  
  transition: all 0.2s;

  :hover, :focus {
    font-size: 4rem;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: 0;
`;

const ArrowRight = styled(Arrow)`
  right: 0;
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
  const [translate, setTranslate] = useState(300);
  const [display, setDisplay] = useState([]);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [justifyContent, setJustifyContent] = useState("flex-start");

  // toggle nextButton disabled based on state.end
  useEffect(() => {
    if (state.end === movies.length) setNextDisabled(true);
    if (nextDisabled && state.end !== movies.length) setNextDisabled(false);
  }, [state.end]);

  // toggle prev button disbaled based on state.start
  useEffect(() => {
    if (state.start === 0) setPrevDisabled(true);
    if (prevDisabled === true && state.start !== 0) setPrevDisabled(false);
  }, [state.start]);

  // set display of movies when state changes
  useEffect(() => {
    setDisplay(movies.slice(state.start, state.end));
  }, [state]);

  // dispatch next/prev state change
  const handleClick = e => {
    setJustifyContent(
      e.currentTarget.name === "increase" ? "flex-end" : "flex-start"
    );
    const translateAmt = e.currentTarget.name === "increase" ? 300 : -300;
    setTranslate(translateAmt);
    dispatch({
      type: e.currentTarget.name
    });
  };

  return (
    <Row style={{ justifyContent: justifyContent }}>
      <ArrowLeft name="decrease" onClick={handleClick} disabled={prevDisabled}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </ArrowLeft>
      <Transition
        items={display}
        keys={item => item.key}
        from={{ opacity: 0, transform: `translateX(${translate}px)` }}
        enter={{ opacity: 1, transform: "translateX(0px)" }}
        // update={}
        leave={{}}
        // leave={{
        // opacity: 0,
        //   transform: "translateX(-300px)"
        // }}
      >
        {item => props => <animated.div style={props}>{item}</animated.div>}
      </Transition>
      <ArrowRight name="increase" onClick={handleClick} disabled={nextDisabled}>
        <FontAwesomeIcon icon={faAngleRight} />
      </ArrowRight>
    </Row>
  );
};

export default Slider;
