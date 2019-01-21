import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Row = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
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

const Slider = ({ movies }) => {
  const [display, setDisplay] = useState([]);
  const [end, setEnd] = useState(5);
  const [start, setStart] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    setDisplay(movies.slice(start, end));
  }, []);

  const handleNext = () => {
    // adjust start/end slides
    const newEnd = end + 1;
    const newStart = start + 1;
    setEnd(newEnd);
    setStart(newStart);
    // check if prev button disabled - enable if true
    if (prevDisabled) setPrevDisabled(false);
    // disable next button if last movie shown
    if (newEnd === movies.length) setNextDisabled(true);
    // display next movies
    setDisplay(movies.slice(newStart, newEnd));
  };

  const handlePrev = () => {
    // adjust start/end slides
    const newEnd = end - 1;
    const newStart = start - 1;
    setEnd(newEnd);
    setStart(newStart);
    // check if next button disabled - enable if true
    if (nextDisabled) setNextDisabled(false);
    // disable prev button if firstm movie shown
    if (newStart === 0) setPrevDisabled(true);
    // display movies
    setDisplay(movies.slice(newStart, newEnd));
  };

  return (
    <Row>
      <ArrowLeft onClick={handlePrev} disabled={prevDisabled}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </ArrowLeft>
      {display}
      <ArrowRight onClick={handleNext} disabled={nextDisabled}>
        <FontAwesomeIcon icon={faAngleRight} />
      </ArrowRight>
    </Row>
  );
};

export default Slider;
