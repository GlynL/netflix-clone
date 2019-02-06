import React from "react";
import { Transition, animated } from "react-spring";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled(animated.section)`
  margin-bottom: 3rem;
`;

const Header = () => {
  let show = true;
  return (
    <Transition
      items={show}
      from={{ transform: "translateY(-100px)" }}
      enter={{ transform: "translateY(0px)" }}
      leave={{ opacity: 0 }}
    >
      {show =>
        show &&
        (props => (
          <Wrapper style={props}>
            <Nav />
          </Wrapper>
        ))
      }
    </Transition>
  );
};

export default Header;
