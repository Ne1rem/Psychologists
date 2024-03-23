import styled from "styled-components";

export const PsycWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const DivCardPsy = styled.div`
    border-radius: 24px;
    background: rgb(255, 255, 255);
    padding: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const AvatarWrap = styled.img`
    width: 120px;
    height: 120px;
    border: 2px solid rgba(84, 190, 150, 0.2);
    border-radius: 30px;
    padding: 12px;
`
export const SvgImageAvatar = styled.svg`
  width: 14px;
  height: 14px;
  fill: #38CD3E;
  position: relative;
  top: 9px;
  left: 104px;
`;

export const DescriptionWrap = styled.div`
    width: 100%;
    padding-left: 24px;
`
export const HeadDescriptionWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
    
`
export const PsyText = styled.p`
    color: rgb(138, 138, 137);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    text-align: left;
    margin-right: auto;
`

export const RatingPriceBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 28px;
`

export const RatingPriceText = styled.p`
    color: var(--black-color);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    text-align: left;

&::after {
        content: '';
        width: 0px;
        height: 16px;
        border: 1px solid rgba(25, 26, 21, 0.2);
        margin-left: 16px;
        margin-right: 16px;
    }
    
    &:last-child::after {
        content: none;
    }
`
export const RatingPriceTextSpan = styled.span`
    color: var(--blue-color);
`
export const SvgStar = styled.svg`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`


export const SvgHeart = styled.svg`
    width: 26px;
    height: 26px;
    cursor: pointer;
    stroke: ${props => props.favorite ? '#3470FF' : 'rgb(25, 26, 21)'};
    fill: ${props => props.favorite ? '#3470FF' : 'none'};
`;


export const PsychologistName = styled.p`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 24px;
`
export const SkillsBlock = styled.div`
    display: flex;
    gap: 8px 4px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`

export const SkillsBlockText = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px 8px 16px;
    border-radius: 24px;
    background: rgb(243, 243, 243);
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0;
`
export const SkillsSpan = styled.span`
    color: var(--black-light-color);
`
export const DescriptionText = styled.p`
    color: rgba(25, 26, 21, 0.5);
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    margin-bottom: 14px;
`
export const ReadMoreButton = styled.button`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;

`

export const ButtonReadMore = styled.button`
font-family: Inter;
font-size: 16px;
font-weight: 500;
letter-spacing: 0em;
text-align: left;
text-decoration: underline;
`

export const AvatarReviewIcon = styled.p`
background: rgba(52, 112, 255, 0.2);
color: (var(--blue-color));
font-family: Inter;
font-size: 20px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
border-radius: 100px;
height: 44px;
width: 44px;
align-items: center;
justify-content: center;
display: flex;
margin-right: 12px;
`
export const ReviewDiv = styled.div`
display: flex;
margin-top: 28px;
align-items: center;
`
export const ReviewDivPName = styled.p`
color: rgba(25, 26, 21, 1);
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`
export const ReviewDivPPartStar = styled.p`
display: flex;
align-items: center;
`
export const ReviewCommentText = styled.p`
color: rgba(25, 26, 21, 0.5);
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
padding-top: 16px;
`
export const UlReview = styled.ul`
padding-bottom: 40px;
`

export const ButtonMakeAppoint = styled.button`
border-radius: 30px;
background: var(--blue-color);
color: #fff;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.01em;
padding: 14px 32px;
&:hover,
    &:focus,
    &:active {
            background: var(--hover-color);
            color: var(--white-color);
        }
`

export const ButLoadMore = styled.button`
border-radius: 30px;
margin-bottom:40px;
justify-content: center;
align-self: center;
max-width: 176px;
background: var(--blue-color);
color: #fff;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.01em;
padding: 14px 32px;
&:hover,
    &:focus,
    &:active {
            background: var(--hover-color);
            color: var(--white-color);
        }
`
