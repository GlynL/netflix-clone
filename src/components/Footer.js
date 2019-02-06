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
  margin-right: 1.5rem;
`;

const Container = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  max-width: 600px;
  color: grey;
  font-size: 1.3rem;
`;

const Icons = styled.div``;

const Btn = styled.button`
  background: none;
  border: 1px solid grey;
  color: inherit;
  padding: 0.5rem;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0;
  grid-gap: 2fr;
`;

const Footer = () => {
  return (
    <Container>
      <Icons>
        <Icon icon={faFacebook} />
        <Icon icon={faInstagram} />
        <Icon icon={faTwitter} />
        <Icon icon={faYoutube} />
      </Icons>
      <List>
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
      </List>
      <Btn>Service Code</Btn>
      <p>© 1997-2019 Netflix, Inc. i-0438ea75f2b133c22b</p>
    </Container>
  );
};

export default Footer;
