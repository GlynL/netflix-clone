import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUsers,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
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

const HideAtSmallLink = styled(Link)`
  @media (max-width: 700px) {
    display: none;
  }
`;

const ShowAtSmallLink = styled(Link)`
  display: none;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const Image = styled.img`
  height: 35px;
  width: 92px;
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
const Responsive = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default () => {
  const [toggle, setToggle] = useState(false);

  const handleBrowse = e => {
    // change state to toggle dropdown menu
    setToggle(!toggle);
  };

  return (
    <Nav>
      <Link href="/">
        <Image src={`${process.env.PUBLIC_URL}/logo.png`} alt="Netflix" />
      </Link>
      <Responsive>
        <ShowAtSmallLink onClick={handleBrowse}>
          Browse
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ paddingLeft: "5px", paddingBottom: "5px" }}
          />
        </ShowAtSmallLink>
        <HideAtSmallLink style={toggle ? { display: "inline-block" } : {}}>
          Home
        </HideAtSmallLink>
        <HideAtSmallLink style={toggle ? { display: "inline-block" } : {}}>
          TV Shows
        </HideAtSmallLink>
        <HideAtSmallLink style={toggle ? { display: "inline-block" } : {}}>
          Movies
        </HideAtSmallLink>
        <HideAtSmallLink style={toggle ? { display: "inline-block" } : {}}>
          Recently Added
        </HideAtSmallLink>
        <HideAtSmallLink style={toggle ? { display: "inline-block" } : {}}>
          My List
        </HideAtSmallLink>
      </Responsive>
      <Container>
        <HideAtSmallLink>
          <FontAwesomeIcon icon={faSearch} />
        </HideAtSmallLink>
        <HideAtSmallLink>Kids</HideAtSmallLink>
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
  );
};
