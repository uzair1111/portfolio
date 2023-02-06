import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
//import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
const handleClick = () => {
  window.location.href = 'https://www.linkedin.com/in/uzair-shahid-307072186/';
};
const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi, I am Uzair Shahid a fulltime freelance Web Developer and blogger. The purpose of my blogs is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        <button style={{
      background: 'linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)',
      color: 'white',
      borderRadius: '25px',
      fontSize: '25px',
      fontWeight: 'bold',
      cursor: 'pointer',
      padding: '15px 35px'
      
    }}onClick={handleClick}>Learn More</button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;