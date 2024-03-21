import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import {
  AvatarReviewIcon,
  AvatarWrap,
  ButLoadMore,
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
} from './Favourite.styled';
import icons from '../../img/icons.svg';
import ModalAppointment from '../ModalAppointment/ModalAppointment'; // Adjust import path
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

const FavouritesCard = ({ filteredPsychologists , setFilteredPsychologists, setPsychologists}) => {
  const [loadMoreCount, setLoadMoreCount] = useState(3);
  const [expandedId, setExpandedId] = useState(null);
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);
  const [favoritePsychologists, setFavoritePsychologists] = useState(
    JSON.parse(localStorage.getItem('favorite')) || []
  );

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleReadMore = id => {
    setExpandedId(expandedId === id ? null : id);
  };

  const addToFavorite = psychologist => {
    const isFavorite = favoritePsychologists.some(
      favorite => favorite.name === psychologist.name
    );

    if (!isLoggedIn) {
      Notify.failure('User is not logged in');
      return;
    }

    if (!isFavorite) {
      const updatedFavorites = [...favoritePsychologists, psychologist];
      setFavoritePsychologists(updatedFavorites);
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorite = psychologist => {
    const updatedFavorites = favoritePsychologists.filter(
      favorite => favorite.name !== psychologist.name
    );
    setFavoritePsychologists(updatedFavorites);
    localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
    
    setFilteredPsychologists(filteredPsychologists.filter(
      favorite => favorite.name !== psychologist.name
    ));
    setPsychologists(updatedFavorites)
  };

  const loadMore = () => {
    setLoadMoreCount(prevCount => prevCount + 3);
  };

  const handleMakeAppointment = psychologist => {
    setSelectedPsychologist(psychologist);
  };

  return (
    <PsycWrap>
      {filteredPsychologists.slice(0, loadMoreCount).map(favoritePsychologist => (
        <DivCardPsy
          key={favoritePsychologist.name}
          className={expandedId === favoritePsychologist.name ? 'active' : ''}
        >
          <SvgImageAvatar
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
            <circle cx="7.00065" cy="7.00009" r="4.66667" fillRule="#38CD3E" />
          </SvgImageAvatar>
          <AvatarWrap src={favoritePsychologist.avatar_url} alt="avatar psychologist" />
          <DescriptionWrap>
            <HeadDescriptionWrap>
              <PsyText>Psychologist</PsyText>
              <RatingPriceBlock>
                <SvgStar>
                  <use href={`${icons}#icon-star`}></use>
                </SvgStar>
                <RatingPriceText>Rating: {favoritePsychologist.rating}</RatingPriceText>
                <RatingPriceText>
                  Price / 1 hour:{' '}
                  <RatingPriceTextSpan>
                    {favoritePsychologist.price_per_hour}$
                  </RatingPriceTextSpan>{' '}
                </RatingPriceText>
              </RatingPriceBlock>
              <SvgHeart
                onClick={() =>
                  isLoggedIn
                    ? favoritePsychologists.some(
                        favorite => favorite.name === favoritePsychologist.name
                      )
                      ? removeFromFavorite(favoritePsychologist)
                      : addToFavorite(favoritePsychologist)
                    : Notify.failure('User is not logged in')
                }
                favorite={
                  isLoggedIn &&
                  favoritePsychologists.some(
                    favorite => favorite.name === favoritePsychologist.name
                  )
                }
              >
                <use href={`${icons}#icon-heart`}></use>
              </SvgHeart>
            </HeadDescriptionWrap>
            <PsychologistName>{favoritePsychologist.name}</PsychologistName>
            <SkillsBlock>
              <SkillsBlockText>
                <SkillsSpan>Experience: </SkillsSpan> {favoritePsychologist.experience}{' '}
                years
              </SkillsBlockText>
              <SkillsBlockText>
                <SkillsSpan>License: </SkillsSpan> {favoritePsychologist.license}
              </SkillsBlockText>
              <SkillsBlockText>
                <SkillsSpan>Specialization: </SkillsSpan>{' '}
                {favoritePsychologist.specialization}
              </SkillsBlockText>
              <SkillsBlockText>
                <SkillsSpan>Initial consultation: </SkillsSpan>{' '}
                {favoritePsychologist.initial_consultation}
              </SkillsBlockText>
            </SkillsBlock>
            <DescriptionText>{favoritePsychologist.about}</DescriptionText>
            <ButtonReadMore
              type="button"
              onClick={() => handleReadMore(favoritePsychologist.name)}
              id={favoritePsychologist.name}
            >
              {expandedId !== favoritePsychologist.name ? 'Read More' : null}
            </ButtonReadMore>
            {expandedId === favoritePsychologist.name && (
              <DescriptionWrap>
                <UlReview>
                  {favoritePsychologist.reviews.map((review, index) => (
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
                  onClick={() => handleMakeAppointment(favoritePsychologist)}
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
      {filteredPsychologists.length > loadMoreCount && (
        <ButLoadMore type="button" onClick={loadMore}>
          Load more
        </ButLoadMore>
      )}
    </PsycWrap>
  );
};

export default FavouritesCard;
