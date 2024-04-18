import { styled } from "styled-components";
import { Button, Input } from "antd";
import Slider from "react-slick";

export const FAQSection = styled.div`
  width: 99%;
  height: 666px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FAQInnerDiv = styled.div`
  background-color: #0068d6;
  width: 90% !important;
  height: 474px;
  border-radius: 16px;
  display: inline-block;
`;
export const FAQSlider = styled(Slider)`
  width: 99%;
`;
export const FAQButtonDiv = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  align-items: center;
  margin-top: 64px;
`;
export const FAQButton = styled(Button)`
  color: #0051ad;
  background-color: #e2f3fd;
  width: 109px;
  margin: auto;
  border-radius: 30px;
  background-color: #02336e;
  color: white;
`;
export const FAQH1 = styled.h1`
  font-size: 36px;
  text-align: center;
`;
export const FAQH1Div = styled.h1`
  font-size: 36px;
  color: white;
`;
export const FAQDetailDiv = styled.div`
  width: 100%;
  height: 144px;
  margin-top: 32px;
`;
export const FAQInnerDiv1 = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
`;
export const FAQAvatar = styled.img``;
export const FAQInnerDiv2 = styled.div`
  height: 72px;
`;
export const FAQName = styled.div`
  display: flex;
  justify-content: center;
`;
export const FAQH3 = styled.h3`
  font-size: 16px;
  color: white;
`;
export const FAQStar = styled.img``;
export const FAQp = styled.p`
  font-size: 14px;
  color: #e2ebf3;
`;
