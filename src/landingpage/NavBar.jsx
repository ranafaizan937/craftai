import "./NavBarStyle";
import React from "react";
import Pic1 from "../assets/Dummy Logo.jpg";
import {
  FeatureDiv,
  FeatureList,
  FeatureListItem,
  GetStartedDiv,
  GetStartedNavBtn,
  LogiDiv,
  Logo,
  NavDiv,
  NavInnerDiv,
} from "./NavBarStyle";

export default function NavBar() {
  return (
    <>
      <NavDiv>
        <NavInnerDiv>
          <LogiDiv>
            <Logo src={Pic1} />
          </LogiDiv>
          <FeatureDiv>
            <FeatureList>
              <FeatureListItem>Use Cases</FeatureListItem>
              <FeatureListItem>Features</FeatureListItem>
              <FeatureListItem>Resourcing</FeatureListItem>
              <FeatureListItem>Pricing</FeatureListItem>
            </FeatureList>
          </FeatureDiv>
          <GetStartedDiv>
            <GetStartedNavBtn type="primary">Get Started</GetStartedNavBtn>
          </GetStartedDiv>
        </NavInnerDiv>
      </NavDiv>
    </>
  );
}
