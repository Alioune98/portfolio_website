import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Here, you can view my skills, past projects and the projects and technologies I am currently working on.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:aliounediagne023@gmail.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
