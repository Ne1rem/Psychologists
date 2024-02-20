import React, { useState } from 'react';
import {
  AvatarReviewIcon,
  AvatarWrap,
  ButtonMakeAppoint,
  ButtonReadMore,
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
  ReviewCommentText,
  ReviewDiv,
  ReviewDivPName,
  ReviewDivPPartStar,
  SkillsBlock,
  SkillsBlockText,
  SkillsSpan,
  SvgHeart,
  SvgImageAvatar,
  SvgStar,
  UlReview,
} from './PsychologistCard.styled';
import icons from '../../img/icons.svg';
import ModalAppointment from 'components/ModalAppointment/ModalAppointment';

const PsychologistCard = ({ psychologists }) => {
  const [loadMoreCount, setLoadMoreCount] = useState(3);
  const [expandedId, setExpandedId] = useState(null);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);

  const handleReadMore = id => {
    setExpandedId(id === expandedId ? null : id);
  };

  const loadMore = () => {
    setLoadMoreCount(prevCount => prevCount + 3);
  };

  const handleMakeAppointment = (psychologist) => {
    setSelectedPsychologist(psychologist);
  };

  return (
    <PsycWrap>
      {psychologists.slice(0, loadMoreCount).map(psychologist => (
        <DivCardPsy
          key={psychologist.name}
          className={expandedId === psychologist.name ? 'active' : ''}
        >
          <SvgImageAvatar
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
            <circle cx="7.00065" cy="7.00009" r="4.66667" fillRule="#38CD3E" />
          </SvgImageAvatar>
          <AvatarWrap src={psychologist.avatar_url} alt="avatar psychologist" />
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
            <ButtonReadMore
              type="button"
              onClick={() => handleReadMore(psychologist.name)}
              id={psychologist.name}
            >
              {expandedId !== psychologist.name ? 'Read More' : null}
            </ButtonReadMore>
            {expandedId === psychologist.name && (
              <DescriptionWrap>
                <UlReview>
                  {psychologist.reviews.map((review, index) => (
                    <li key={index} className="card_reviews">
                      <div>
                        <ReviewDiv>
                          <AvatarReviewIcon>
                            {review.reviewer[0]}
                          </AvatarReviewIcon>
                          <div>
                            <ReviewDivPName>{review.reviewer}</ReviewDivPName>
                            <ReviewDivPPartStar>
                              <SvgStar>
                                <use href={`${icons}#icon-star`}></use>
                              </SvgStar>
                              {review.rating}
                            </ReviewDivPPartStar>
                          </div>
                        </ReviewDiv>
                        <ReviewCommentText>{review.comment}</ReviewCommentText>
                      </div>
                    </li>
                  ))}
                </UlReview>
                <ButtonMakeAppoint
                  onClick={() => handleMakeAppointment(psychologist)}
                >
                  Make an appointment
                </ButtonMakeAppoint>
              </DescriptionWrap>
            )}
          </DescriptionWrap>
        </DivCardPsy>
      ))}
      {selectedPsychologist && (
        <ModalAppointment psychologist={selectedPsychologist} />
      )}
      {psychologists.length > loadMoreCount && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </PsycWrap>
  );
};

export default PsychologistCard;
