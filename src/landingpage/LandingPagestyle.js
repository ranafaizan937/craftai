import { styled } from "styled-components";
import { Button, Input } from "antd";
import Slider from "react-slick";

// export const NavDiv = styled.div`
//   width: 100%;
//   height: 80px;
//   /* border: 2px solid black; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const NavInnerDiv = styled.div`
//   width: 86%;
//   height: 44px;
//   /* margin: auto; */
//   display: flex;
// `;

// export const LogiDiv = styled.div`
//   /* border: 2px solid red; */
//   width: 20%;
// `;
// export const Logo = styled.img`
//   width: 120px;
//   height: 34px;
// `;
// export const FeatureDiv = styled.div`
//   width: 60%;
//   /* display: flex; */
// `;
// export const FeatureList = styled.ul`
//   display: flex;
//   gap: 3rem;
//   justify-content: center;
//   margin-top: 0.5rem;
//   color: #425f80;
// `;

// export const FeatureListItem = styled.li`
//   list-style-type: none;
//   cursor: pointer;
// `;
// export const GetStartedDiv = styled.div`
//   width: 20%;
//   display: flex;
//   justify-content: end;
// `;
// export const GetStartedNavBtn = styled(Button)`
//   right: 0;
//   cursor: pointer;
// `;
// export const HeroHeadSection = styled.div`
//   height: 692px;
//   width: 100%;
//   background-color: #e2f3fd;
//   display: flex;
// `;
// export const DetailSection = styled.div`
//   width: 50%;
//   height: 692px;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;
// export const DetailInnerSection = styled.div`
//   height: 375px;
//   width: 510px;
// `;
// export const DetailHead = styled.div`
//   width: 249px;
//   height: 28px;
//   font-size: 14px;
//   background-color: #d5cdf2;
//   border-radius: 14px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
// `;
// export const DeatilH4 = styled.h4`
//   color: #0051ad;
// `;
// export const DetailBody = styled.h1`
//   font-size: 54px;
//   font-family: Inter;
// `;
// export const DetailBody2 = styled.h1`
//   font-size: 54px;
//   color: #116dd0;
// `;
// export const DetailDescription = styled.p`
//   font-size: 16px;
//   color: #4f4d55;
//   margin-top: 32px;
// `;
// export const DetailButton = styled(Button)`
//   width: 188px;
//   height: 56px;
//   margin-top: 35px;
// `;
// export const PicSection = styled.div`
//   width: 50%;
//   height: 692px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const PicInnerSection = styled.div`
//   height: 542px;
//   width: 544px;
//   display: flex;
// `;
// export const Pic1Section = styled.div`
//   width: 50%;
//   height: 542px;
// `;
// export const FirstPic = styled.img``;
// export const Pic2Section = styled.div`
//   width: 50%;
//   height: 542px;
// `;
// export const SecondPic = styled.img``;
// export const ThirdPic = styled.img``;
// export const FeatureMainSection = styled.div`
//   width: 100%;
//   height: 1644px;
//   /* border: 2px solid red; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const FeatureInnerSection = styled.div`
//   width: 1080px;
//   height: 1452px;
//   /* border: 2px solid blue; */
// `;
// export const FirstDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// export const FirstDivData = styled.h2`
//   font-size: 36px;
// `;
// export const SecondDiv = styled.div``;
// export const SecondDivData = styled.p`
//   font-size: 20px;
//   color: #475467;
//   width: 880px;
//   margin: auto;
//   margin-top: 20px;
//   text-align: center;
// `;
// export const ThirdDiv = styled.div`
//   margin-top: 32px;
//   /* border: 2px solid red; */
//   font-size: 16px;
//   color: #4f4d55;
// `;
// export const ThirdDivList = styled.ul`
//   display: flex;
//   gap: 1rem;
//   font-weight: 475;
//   width: fit-content;
//   margin: auto;
// `;
// export const ThirdDivListItem = styled.li`
//   list-style-type: none;
// `;
// export const CardDiv = styled.div`
//   margin-top: 64px;
//   height: 1226px;
// `;
// export const Card1 = styled.div`
//   height: 581px;
//   display: flex;
//   gap: 48px;
// `;
// export const Card1First = styled.div`
//   height: 581px;
//   width: 50%;
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
//     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
// `;
// export const Card1FirstPicDiv = styled.div`
//   height: 360px;
//   width: 100%;
// `;
// export const Card1FirstPic = styled.img`
//   height: 360px;
//   width: 100%;
//   border-radius: 10px;
// `;
// export const Card1FirstDesDiv = styled.div`
//   width: 100%;
//   margin-top: 24px;
// `;
// export const Card1FirstDes = styled.div`
//   height: 88px;
//   width: 488px;
//   margin: auto;
// `;
// export const Card1h3 = styled.h3``;
// export const Card1p = styled.p`
//   color: #425f80;
// `;
// export const Card1FirstButton = styled(Button)`
//   width: 129px;
//   height: 44px;
//   margin-top: 15px;
//   margin-left: 15px;
// `;
// export const Card1Second = styled.div`
//   height: 581px;
//   width: 50%;
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
//     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
// `;
// export const Card1SecondPicDiv = styled.div`
//   height: 360px;
//   width: 100%;
// `;
// export const Card1SecondPic = styled.img`
//   height: 360px;
//   width: 100%;
//   border-radius: 10px;
// `;
// export const Card1SecondDesDiv = styled.div`
//   width: 100%;
//   margin-top: 24px;
// `;
// export const Card1SecondDes = styled.div`
//   height: 88px;
//   width: 488px;
//   margin: auto;
// `;
// export const Card1Secondh3 = styled.h3``;
// export const Card1Secondp = styled.p`
//   color: #425f80;
// `;
// export const Card1SecondButton = styled(Button)`
//   width: 129px;
//   height: 44px;
//   margin-top: 15px;
//   margin-left: 15px;
// `;
// export const Card2 = styled.div`
//   height: 581px;
//   display: flex;
//   gap: 48px;
//   margin-top: 35px;
// `;
// export const Card2First = styled.div`
//   height: 581px;
//   width: 50%;
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
//     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
// `;
// export const Card2FirstPicDiv = styled.div`
//   height: 360px;
//   width: 100%;
// `;
// export const Card2FirstPic = styled.img`
//   height: 360px;
//   width: 100%;
//   border-radius: 10px;
// `;
// export const Card2FirstDesDiv = styled.div`
//   width: 100%;
//   margin-top: 24px;
// `;
// export const Card2FirstDes = styled.div`
//   height: 88px;
//   width: 488px;
//   margin: auto;
// `;
// export const Card2h3 = styled.h3``;
// export const Card2p = styled.p`
//   color: #425f80;
// `;
// export const Card2FirstButton = styled(Button)`
//   width: 129px;
//   height: 44px;
//   margin-top: 15px;
//   margin-left: 15px;
// `;
// export const Card2Second = styled.div`
//   height: 581px;
//   width: 50%;
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
//     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
// `;
// export const Card2SecondPicDiv = styled.div`
//   height: 360px;
//   width: 100%;
// `;
// export const Card2SecondPic = styled.img`
//   height: 360px;
//   width: 100%;
//   border-radius: 10px;
// `;
// export const Card2SecondDesDiv = styled.div`
//   width: 100%;
//   margin-top: 24px;
// `;
// export const Card2SecondDes = styled.div`
//   height: 88px;
//   width: 488px;
//   margin: auto;
// `;
// export const Card2Secondh3 = styled.h3``;
// export const Card2Secondp = styled.p`
//   color: #425f80;
// `;
// export const Card2SecondButton = styled(Button)`
//   width: 129px;
//   height: 44px;
//   margin-top: 15px;
//   margin-left: 15px;
// `;
// export const TestimonialSectionMainDiv = styled.div`
//   width: 100%;
//   height: 738px;
//   background-color: #e2f3fd;
// `;
// export const TestimonialHeadDiv = styled.div`
//   margin-top: 96px;
//   height: 164px;
//   width: 85%;
//   margin-left: 115px;
// `;
// export const TestimonialButtonDiv = styled.div`
//   /* border: 2px solid blue; */
//   display: flex;
//   align-items: center;
// `;
// export const TestimonialButton = styled(Button)`
//   color: #0051ad;
//   background-color: #e2f3fd;
//   width: 83px;
//   margin: auto;
//   border-radius: 30px;
// `;
// export const TestimonialH1 = styled.h1`
//   font-size: 36px;
//   text-align: center;
// `;
// export const TestimonialP = styled.p`
//   width: 768px;
//   margin: auto;
//   text-align: center;
//   color: #475467;
// `;
// export const TestimonialCardDiv = styled.div`
//   width: 95%;
//   margin-top: 64px;
//   margin-left: 40px;
//   height: 318px;
// `;
// export const TestimonialCardInnerDiv = styled.div`
//   width: 100%;
//   height: 318px;
//   margin-right: 32px;
//   margin-left: 32px;
//   display: flex;
//   justify-content: space-between;
// `;
// export const TestimonialCard1 = styled.div`
//   height: 318px;
//   width: 286px;
// `;
// export const TestimonialCard2 = styled.div`
//   height: 318px;
//   width: 286px;
// `;
// export const TestimonialCard3 = styled.div`
//   height: 318px;
//   width: 286px;
// `;
// export const TestimonialCard4 = styled.div`
//   height: 318px;
//   width: 286px;
// `;
// export const TestimonialCard1Pic = styled.img`
//   margin-top: 24px;
//   margin-left: 24px;
// `;
// export const TestimonialCard1InnerDiv = styled.div`
//   width: 238px;
//   height: 158px;
//   margin-top: 35px;
//   margin-left: 20px;
// `;
// export const TestimonialCard1InnerH3 = styled.h3`
//   font-size: 20px;
// `;
// export const TestimonialCard1InnerP = styled.p`
//   font-size: 16px;
//   color: #475467;
// `;
// export const FAQSection = styled.div`
//   width: 99%;
//   height: 666px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const FAQInnerDiv = styled.div`
//   background-color: #0068d6;
//   width: 90% !important;
//   height: 474px;
//   border-radius: 16px;
//   display: inline-block;
// `;
// export const FAQSlider = styled(Slider)`
//   width: 99%;
// `;
// export const FAQButtonDiv = styled.div`
//   /* border: 2px solid blue; */
//   display: flex;
//   align-items: center;
//   margin-top: 64px;
// `;
// export const FAQButton = styled(Button)`
//   color: #0051ad;
//   background-color: #e2f3fd;
//   width: 109px;
//   margin: auto;
//   border-radius: 30px;
//   background-color: #02336e;
//   color: white;
// `;
// export const FAQH1 = styled.h1`
//   font-size: 36px;
//   text-align: center;
// `;
// export const FAQH1Div = styled.h1`
//   font-size: 36px;
//   color: white;
// `;
// export const FAQDetailDiv = styled.div`
//   width: 100%;
//   height: 144px;
//   margin-top: 32px;
// `;
// export const FAQInnerDiv1 = styled.div`
//   height: 72px;
//   display: flex;
//   justify-content: center;
// `;
// export const FAQAvatar = styled.img``;
// export const FAQInnerDiv2 = styled.div`
//   height: 72px;
// `;
// export const FAQName = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// export const FAQH3 = styled.h3`
//   font-size: 16px;
//   color: white;
// `;
// export const FAQStar = styled.img``;
// export const FAQp = styled.p`
//   font-size: 14px;
//   color: #e2ebf3;
// `;
// export const LastSection = styled.div`
//   width: 100%;
//   /* height: 786px; */
// `;
// export const LastSectionHeadDiv = styled.div`
//   height: 154px;
//   margin-top: 96px;
// `;
// export const LastSectionButtonDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// export const LastSectionButton = styled(Button)`
//   border-radius: 16px;
//   color: #0051ad;
//   background-color: #e2f3fd;
// `;
// export const LastSectionInnerHeadDiv = styled.div`
//   margin-top: 32px;
// `;
// export const LastSectionHeadH1 = styled.h1`
//   font-size: 36px;
//   text-align: center;
// `;
// export const LastSectionHeadDes = styled.p`
//   font-size: 20px;
//   color: #475467;
//   text-align: center;
// `;
// export const LastSectionQASection = styled.div`
//   margin-top: 64px;
//   /* height: 616px; */
//   width: 53%;
//   margin-left: 260px;
// `;
// export const LastSectionQA1 = styled.div`
//   width: 100%;
//   /* height: 156px; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// export const LastSectionQA1Inner = styled.div`
//   width: 95%;
// `;
// export const PlusMinus = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;
// export const LastSectionQuestion = styled.span`
//   font-size: 17px;
// `;
// export const LastSectionAnswer = styled.p`
//   font-size: 16px;
//   color: #475467;
//   overflow: hidden;
//   margin-top: 10px;
// `;
// export const LastSectionQA = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 10px;
// `;
// export const LastSectionQADiv = styled.div`
//   width: 95%;
// `;
export const FooterSection = styled.div`
  width: 100%;
  height: 472px;
  background-color: #f9fafb;
`;
export const FooterSectionDiv = styled.div`
  width: 85%;
  height: 240px;
  margin-top: 64px;
  margin-left: 80px;
  display: flex;
`;
export const FooterSectionInnerDiv = styled.div`
  width: 320px;
  height: 240px;
  margin-top: 40px;
`;
export const FooterSectionLogo = styled.img`
  width: 110px;
  height: 32px;
`;
export const FooterSectionP = styled.p`
  color: #475467;
  font-size: 13px;
  margin-top: 16px;
`;
export const FooterSectionListDiv = styled.div`
  display: flex;
  height: 230px;
  flex-direction: column;
  align-items: end;
`;
export const FooterSectionList2Div = styled.div`
  display: flex;
  height: 230px;
  flex-direction: column;
  align-items: center;
`;
export const FooterSectionSpan = styled.p`
  color: #0051ad;
  font-size: 16px;
  margin-top: 8px;
  font-weight: bold;
`;
export const FooterSectionStayusDiv = styled.div`
  height: 80px;
  width: 220px;
  margin-left: 40px;
`;
export const FooterSectionStayusP = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
export const FooterSectionStayusInnerDiv = styled.div`
  margin-top: 16px;
  height: 42px;
`;
export const FooterSectionStayusSearch = styled(Input)`
  width: 135px;
`;
export const FooterSectionStayusButton = styled.button`
  margin-left: 5px;
  background-color: #0068d6;
  color: white;
  height: 33px;
  border-radius: 10px;
  width: 80px;
`;
