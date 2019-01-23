import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUsers,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
import { Transition } from "react-spring";
import { useTransition, animated } from "react-spring/hooks";

import styled from "styled-components";

const Link = styled.a`
  height: 6rem;
  max-width: 13rem;
  color: #e5e5e5;
  font-size: 1.6rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: all 0.2s;

  &:active,
  &:focus,
  &:hover {
    color: #b3b3b3;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  background: black;
`;

const Container = styled.div`
  margin-left: auto;
  padding-right: 2rem;
  display: flex;
`;

const Header = () => {
  // const props = useTransition({
  // from: { transform: "translateY(-100px)" },
  // to: { transform: "translateY(0px)" }
  // });
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
          <section style={props}>
            <Nav>
              <Link href="/">
                <Image src="/logo.jpg" alt="Netflix" />
              </Link>
              <Link>Home</Link>
              <Link>TV Shows</Link>
              <Link>Movies</Link>
              <Link>Recently Added</Link>
              <Link>My List</Link>
              <Container>
                <Link>
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link>Kids</Link>
                <Link>
                  <FontAwesomeIcon icon={faBell} />
                </Link>
                <div>
                  <Link>
                    <FontAwesomeIcon icon={faUsers} />
                    <FontAwesomeIcon
                      icon={faSortDown}
                      style={{ paddingLeft: "1rem" }}
                    />
                  </Link>
                </div>
              </Container>
            </Nav>
          </section>
        ))
      }
    </Transition>
  );
};

export default Header;
