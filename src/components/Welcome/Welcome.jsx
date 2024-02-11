import React from 'react';
import mainImg from '../../img/main_img.jpg';
import icons from '../../img/icons.svg';
import {
  Button,
  ButtonText,
  LeftPartWelcome,
  MainTitle,
  MainTitleSpan,
  PsyBlock,
  PsyBlockNumber,
  PsyBlockSquare,
  PsyBlockText,
  PsyBlockTextDiv,
  QuestionBlock,
  RightPartWelcome,
  SvgCheck,
  SvgQuestion,
  SvgUsers,
  UsersBlock,
  WelcomeImg,
  WelcomeText,
  WelcomeWrap,
} from './Welcome.styled';

const Welcome = () => {
  
return (
    <WelcomeWrap>
      <LeftPartWelcome>
        <MainTitle>
          The road to the <MainTitleSpan>depths</MainTitleSpan> of the human
          soul
        </MainTitle>
        <WelcomeText>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </WelcomeText>
        <Button to={'/psychologists'} type="button">
          <ButtonText>Get started</ButtonText>
          <SvgQuestion>
            <use href={`${icons}#icon-arrow`}></use>
          </SvgQuestion>
        </Button>
      </LeftPartWelcome>
      <RightPartWelcome>
        <WelcomeImg src={mainImg} alt="main_img" /> 
        {/* Не забути зробити оптимізацію картинки */}
        <QuestionBlock>
          <SvgQuestion>
            <use href={`${icons}#icon-question`}></use>
          </SvgQuestion>
        </QuestionBlock>
        <UsersBlock>
        <SvgUsers>
            <use href={`${icons}#icon-mdi_users`}></use>
          </SvgUsers>
        </UsersBlock>
        <PsyBlock>
          <PsyBlockSquare>
          <SvgCheck>
            <use href={`${icons}#icon-check`}></use>
          </SvgCheck>
          </PsyBlockSquare>
          <PsyBlockTextDiv>
            <PsyBlockText>Experienced psychologists</PsyBlockText>
            <PsyBlockNumber>15,000</PsyBlockNumber>
          </PsyBlockTextDiv>
        </PsyBlock>
      </RightPartWelcome>
    </WelcomeWrap>
  );
};

export default Welcome;
