import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-right: 1rem;
`;

const Container = styled.div`
  color: grey;
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  // display: flex;
  // justify-content: flex-start;
  grid-column: span 4;
`;

const Btn = styled.button`
  background: none;
  border: 1px solid grey;
  color: inherit;
  grid-column: span 4;
  width: 100px;
  padding: 0.5rem;
`;

// const List = styled.ul`
// display: grid;
// grid-template-columns: repeat(4, 200px);
// grid-template-rows: repeat(5, 40px);
// `;

const Footer = () => {
  return (
    <Container>
      <Icons>
        <Icon icon={faFacebook} />
        <Icon icon={faInstagram} />
        <Icon icon={faTwitter} />
        <Icon icon={faYoutube} />
      </Icons>
      {/* <List> */}
      <p>Audio and Subtitles</p>
      <p>Audio Description</p>
      <p>Help Center</p>
      <p>Gift Cards</p>
      <p>Media Center</p>
      <p>Investor Relations</p>
      <p>Jobs</p>
      <p>Terms of Use</p>
      <p>Privacy</p>
      <p>Legal Notices</p>
      <p>Cookie Preferences</p>
      <p>Corporate Information</p>
      <p>Contact Us</p>
      <div />
      <div />
      <div />
      {/*</List> */}
      <Btn>Service Code</Btn>
      <p style={{ gridColumn: "span 2" }}>
        © 1997-2019 Netflix, Inc. i-0438ea75f2b133c22b
      </p>
    </Container>
  );
};

export default Footer;
