import React from "react";
import {
  DeatilH4,
  DetailBody,
  DetailBody2,
  DetailButton,
  DetailDescription,
  DetailHead,
  DetailInnerSection,
  DetailSection,
  FirstPic,
  HeroHeadSection,
  Pic1Section,
  Pic2Section,
  PicInnerSection,
  PicSection,
  SecondPic,
  ThirdPic,
} from "./HeroSectionStyle";
import Pic1st from "../assets/1stpic.jpg";
import Pic2nd from "../assets/2ndpic.jpg";
import Pic3rd from "../assets/3rdpic.jpg";

export default function HeroSection() {
  return (
    <>
      <HeroHeadSection>
        <DetailSection>
          <DetailInnerSection>
            <DetailHead>
              <DeatilH4>CRAFT, CUSTOMIZE, CAPTIVE!</DeatilH4>
            </DetailHead>
            {/* <h1>Elevate Your Creativity With</h1> */}
            <DetailBody>Elevate Your Creativity With</DetailBody>
            <DetailBody2>AI-Powered Tools</DetailBody2>
            <DetailDescription>
              Explore our AI-Powered tool for logo design, video creationn and
              stunning mockups
            </DetailDescription>
            <DetailButton type="primary">Get Started Now</DetailButton>
          </DetailInnerSection>
        </DetailSection>
        <PicSection>
          <PicInnerSection>
            <Pic1Section>
              <FirstPic src={Pic1st} />
            </Pic1Section>
            <Pic2Section>
              <SecondPic src={Pic2nd} />
              <ThirdPic src={Pic3rd} />
            </Pic2Section>
          </PicInnerSection>
        </PicSection>
      </HeroHeadSection>
    </>
  );
}
