import { styled } from "styled-components";
import { Button, Input } from "antd";
import Slider from "react-slick";

export const NavDiv = styled.div`
  width: 100%;
  height: 80px;
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavInnerDiv = styled.div`
  width: 86%;
  height: 44px;
  /* margin: auto; */
  display: flex;
`;

export const LogiDiv = styled.div`
  /* border: 2px solid red; */
  width: 20%;
`;
export const Logo = styled.img`
  width: 120px;
  height: 34px;
`;
export const FeatureDiv = styled.div`
  width: 60%;
  /* display: flex; */
`;
export const FeatureList = styled.ul`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 0.5rem;
  color: #425f80;
`;

export const FeatureListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`;
export const GetStartedDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: end;
`;
export const GetStartedNavBtn = styled(Button)`
  right: 0;
  cursor: pointer;
`;
