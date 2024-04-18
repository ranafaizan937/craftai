import { styled } from "styled-components";
import { Button, Input } from "antd";
import Slider from "react-slick";

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
