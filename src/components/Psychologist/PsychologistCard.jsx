import { AvatarWrap, DescriptionText, DescriptionWrap, HeadDescriptionWrap, PsyText, PsycWrap, PsychologistName, RatingPriceBlock, RatingPriceText, RatingPriceTextSpan, ReadMoreButton, SkillsBlock, SkillsBlockText, SkillsSpan, SvgHeart, SvgStar } from "./PsychologistCard.styled"
import icons from '../../img/icons.svg';

const PsychologistCard = () => {
  return (
    <PsycWrap>
        <AvatarWrap></AvatarWrap>  
        <DescriptionWrap>
           <HeadDescriptionWrap>
            <PsyText>Psychologist</PsyText>
            <RatingPriceBlock>
              <SvgStar>
                <use href={`${icons}#icon-star`}></use>
              </SvgStar>
              <RatingPriceText>Rating: 4.7</RatingPriceText>
              <RatingPriceText>Price / 1 hour: <RatingPriceTextSpan>180$</RatingPriceTextSpan> </RatingPriceText>
            </RatingPriceBlock>
            <SvgHeart>
                <use href={`${icons}#icon-heart`}></use>
              </SvgHeart>
            </HeadDescriptionWrap> 
            <PsychologistName>Dr. Mark Thompson</PsychologistName>
            <SkillsBlock>
              <SkillsBlockText><SkillsSpan>Experience: </SkillsSpan> 20 years</SkillsBlockText>
              <SkillsBlockText><SkillsSpan>License: </SkillsSpan> Licensed Psychologist (License #54321)</SkillsBlockText>
              <SkillsBlockText><SkillsSpan>Specialization: </SkillsSpan>  Relationship Counseling</SkillsBlockText>
              <SkillsBlockText><SkillsSpan>Initial_consultation: </SkillsSpan> Free 60-minute initial consultation</SkillsBlockText>
            </SkillsBlock>
            <DescriptionText>
            Dr. Mark Thompson is a highly experienced and licensed psychologist specializing in Relationship Counseling. With 20 years of practice, he has helped individuals navigate and improve their relationships, leading to better well-being and personal growth. Dr. Thompson is known for his expertise and ability to provide invaluable insights to his clients. His approach to therapy is tailored to each individual's unique needs, ensuring a supportive and effective counseling experience.
            </DescriptionText>
            <ReadMoreButton type="button">Read more</ReadMoreButton>
        </DescriptionWrap>    
    </PsycWrap>
  )
}

export default PsychologistCard
