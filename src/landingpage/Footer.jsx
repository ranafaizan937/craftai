import React from "react";
import {
  FooterSection,
  FooterSectionDiv,
  FooterSectionInnerDiv,
  FooterSectionList2Div,
  FooterSectionListDiv,
  FooterSectionLogo,
  FooterSectionP,
  FooterSectionSpan,
  FooterSectionStayusButton,
  FooterSectionStayusDiv,
  FooterSectionStayusInnerDiv,
  FooterSectionStayusP,
  FooterSectionStayusSearch,
} from "./FooterStyle";
import Pic1 from "../assets/Dummy Logo.jpg";

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterSectionDiv>
          <FooterSectionInnerDiv>
            <FooterSectionLogo src={Pic1} />
            <FooterSectionP>
              Design amazing digital experiences that create more happy in the
              world.
            </FooterSectionP>
          </FooterSectionInnerDiv>
          <FooterSectionInnerDiv>
            <FooterSectionListDiv>
              <FooterSectionSpan style={{ color: "black", marginTop: "0" }}>
                Product
              </FooterSectionSpan>
              <FooterSectionSpan>Overview</FooterSectionSpan>
              <FooterSectionSpan>Feature</FooterSectionSpan>
              <FooterSectionSpan>Solutions</FooterSectionSpan>
              <FooterSectionSpan>Tutorial</FooterSectionSpan>
              <FooterSectionSpan>Pricing</FooterSectionSpan>
            </FooterSectionListDiv>
          </FooterSectionInnerDiv>
          <FooterSectionInnerDiv>
            <FooterSectionList2Div>
              <FooterSectionSpan
                style={{ color: "black", marginTop: "0", alignItems: "center" }}
              >
                Product
              </FooterSectionSpan>
              <FooterSectionSpan>Overview</FooterSectionSpan>
              <FooterSectionSpan>Feature</FooterSectionSpan>
              <FooterSectionSpan>Solutions</FooterSectionSpan>
              <FooterSectionSpan>Tutorial</FooterSectionSpan>
              <FooterSectionSpan>Pricing</FooterSectionSpan>
            </FooterSectionList2Div>
          </FooterSectionInnerDiv>
          <FooterSectionInnerDiv>
            <FooterSectionStayusDiv>
              <FooterSectionStayusP>Stay up to date</FooterSectionStayusP>
              <FooterSectionStayusInnerDiv>
                <FooterSectionStayusSearch placeholder="Email"></FooterSectionStayusSearch>
                <FooterSectionStayusButton>Subscribe</FooterSectionStayusButton>
              </FooterSectionStayusInnerDiv>
            </FooterSectionStayusDiv>
          </FooterSectionInnerDiv>
        </FooterSectionDiv>
      </FooterSection>
    </>
  );
}
