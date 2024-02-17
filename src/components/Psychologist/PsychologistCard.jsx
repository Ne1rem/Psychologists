import React, { useState } from 'react';
import {
  AvatarWrap,
  DescriptionText,
  DescriptionWrap,
  DivCardPsy,
  HeadDescriptionWrap,
  PsyText,
  PsycWrap,
  PsychologistName,
  RatingPriceBlock,
  RatingPriceText,
  RatingPriceTextSpan,
  SkillsBlock,
  SkillsBlockText,
  SkillsSpan,
  SvgHeart,
  SvgImageAvatar,
  SvgStar,
} from './PsychologistCard.styled';
import icons from '../../img/icons.svg';

const PsychologistCard = ({ psychologists }) => {
  const [loadMoreCount, setLoadMoreCount] = useState(3);

  const loadMore = () => {
    setLoadMoreCount(prevCount => prevCount + 3);
  };

  return (
    <PsycWrap>
      {psychologists.slice(0, loadMoreCount).map(psychologist => (
        <DivCardPsy key={psychologist.id}>
          <SvgImageAvatar
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
            <circle cx="7.00065" cy="7.00009" r="4.66667" fillRule="#38CD3E" />
          </SvgImageAvatar>
          <AvatarWrap src={psychologist.avatar_url} alt="avatar psycologist" />
          <DescriptionWrap>
            <HeadDescriptionWrap>
              <PsyText>Psychologist</PsyText>
              <RatingPriceBlock>
                <SvgStar>
                  <use href={`${icons}#icon-star`}></use>
                </SvgStar>
                <RatingPriceText>Rating: {psychologist.rating}</RatingPriceText>
                <RatingPriceText>
                  Price / 1 hour:{' '}
                  <RatingPriceTextSpan>
                    {psychologist.price_per_hour}$
                  </RatingPriceTextSpan>{' '}
                </RatingPriceText>
              </RatingPriceBlock>
              <SvgHeart>
                <use href={`${icons}#icon-heart`}></use>
              </SvgHeart>
            </HeadDescriptionWrap>
            <PsychologistName>{psychologist.name}</PsychologistName>
            <SkillsBlock>
              <SkillsBlockText>
                <SkillsSpan>Experience: </SkillsSpan> {psychologist.experience}{' '}
                years
              </SkillsBlockText>
              <SkillsBlockText>
                <SkillsSpan>License: </SkillsSpan> {psychologist.license}
              </SkillsBlockText>
              <SkillsBlockText>
                <SkillsSpan>Specialization: </SkillsSpan>{' '}
                {psychologist.specialization}
              </SkillsBlockText>
              <SkillsBlockText>
                <SkillsSpan>Initial consultation: </SkillsSpan>{' '}
                {psychologist.initial_consultation}
              </SkillsBlockText>
            </SkillsBlock>
            <DescriptionText>{psychologist.about}</DescriptionText>
            <button type="button">Read more</button>
          </DescriptionWrap>
        </DivCardPsy>
      ))}
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </PsycWrap>
  );
};

export default PsychologistCard;
