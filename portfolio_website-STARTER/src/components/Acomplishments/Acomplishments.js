import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsData} from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((item, index) => (
        <Box key={index}>
          <BoxNum>{item.number}+</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
