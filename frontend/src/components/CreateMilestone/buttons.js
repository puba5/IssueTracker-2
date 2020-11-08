import React from 'react';
import styled from 'styled-components';
import CreateButton from '../Common/GreenButton';

export default function buttons(props) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <CreateButton content="Create milestone" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5em 0;
  width: 90%;
  margin: auto;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;