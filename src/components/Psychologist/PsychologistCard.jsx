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
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectFavorites,
} from '../../redux/auth/selectors.js';
import { Notify } from 'notiflix';
import { addFav, deleteFav } from '../../redux/auth/userSlice.js';

const PsychologistCard = ({ psychologists }) => {
  const dispatch = useDispatch();

  const [loadMoreCount, setLoadMoreCount] = useState(3);
  const [expandedId, setExpandedId] = useState(null);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

  const handleReadMore = id => {
    setExpandedId(expandedId === id ? null : id);
  };

  const addToFavorite = psychologist => {
    const isFavorite = favorites.some(
      favorite => favorite.name === psychologist.name
    );

    if (!isLoggedIn) {
      Notify.failure('User is not logged in');
      return;
    }

    if (!isFavorite) {
      dispatch(addFav(psychologist));
    } else {
      dispatch(deleteFav(psychologist));
    }
  };

  const removeFromFavorite = psychologist => {
    dispatch(deleteFav(psychologist));
  };

  const loadMore = () => {
    setLoadMoreCount(prevCount => prevCount + 3);
  };

  const handleMakeAppointment = psychologist => {
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
              <SvgHeart
                onClick={() =>
                  favorites.some(
                    favorite => favorite.name === psychologist.name
                  )
                    ? removeFromFavorite(psychologist)
                    : addToFavorite(psychologist)
                }
                favorite={favorites.some(
                  favorite => favorite.name === psychologist.name
                )}
              >
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
        <ModalAppointment
          psychologist={selectedPsychologist}
          closeModal={setSelectedPsychologist}
        />
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
