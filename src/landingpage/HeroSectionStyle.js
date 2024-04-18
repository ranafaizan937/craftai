import { styled } from "styled-components";
import { Button, Input } from "antd";
import Slider from "react-slick";

export const HeroHeadSection = styled.div`
  height: 692px;
  width: 100%;
  background-color: #e2f3fd;
  display: flex;
`;
export const DetailSection = styled.div`
  width: 50%;
  height: 692px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const DetailInnerSection = styled.div`
  height: 375px;
  width: 510px;
`;
export const DetailHead = styled.div`
  width: 249px;
  height: 28px;
  font-size: 14px;
  background-color: #d5cdf2;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
export const DeatilH4 = styled.h4`
  color: #0051ad;
`;
export const DetailBody = styled.h1`
  font-size: 54px;
  font-family: Inter;
`;
export const DetailBody2 = styled.h1`
  font-size: 54px;
  color: #116dd0;
`;
export const DetailDescription = styled.p`
  font-size: 16px;
  color: #4f4d55;
  margin-top: 32px;
`;
export const DetailButton = styled(Button)`
  width: 188px;
  height: 56px;
  margin-top: 35px;
`;
export const PicSection = styled.div`
  width: 50%;
  height: 692px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PicInnerSection = styled.div`
  height: 542px;
  width: 544px;
  display: flex;
`;
export const Pic1Section = styled.div`
  width: 50%;
  height: 542px;
`;
export const FirstPic = styled.img``;
export const Pic2Section = styled.div`
  width: 50%;
  height: 542px;
`;
export const SecondPic = styled.img``;
export const ThirdPic = styled.img``;
