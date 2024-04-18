import React from "react";
import {
  TestimonialButton,
  TestimonialButtonDiv,
  TestimonialCard1,
  TestimonialCard1InnerDiv,
  TestimonialCard1InnerH3,
  TestimonialCard1InnerP,
  TestimonialCard1Pic,
  TestimonialCard2,
  TestimonialCard3,
  TestimonialCard4,
  TestimonialCardDiv,
  TestimonialCardInnerDiv,
  TestimonialH1,
  TestimonialHeadDiv,
  TestimonialP,
  TestimonialSectionMainDiv,
} from "./TestomonialSectionStyle";
import TestimonialCard3Logo from "../assets/Card3Icon.jpg";
import TestimonialCard4Logo from "../assets/Card4Icon.jpg";
import TestimonialCard2Logo from "../assets/Card2Icon.jpg";
import TestimonialCard1Logo from "../assets/Featured icon.jpg";

export default function TestomonialSection() {
  return (
    <>
      <TestimonialSectionMainDiv>
        <TestimonialHeadDiv>
          <TestimonialButtonDiv>
            <TestimonialButton>Features</TestimonialButton>
          </TestimonialButtonDiv>
          <TestimonialH1>
            PowerFul Features Redefining Design Excellence
          </TestimonialH1>
          <TestimonialP>
            Discover innovation with our website's cutting-edge features,
            redefining excellence for a seamless ands efficient user experience
            like never before.
          </TestimonialP>
        </TestimonialHeadDiv>
        <TestimonialCardDiv>
          <TestimonialCardInnerDiv>
            <TestimonialCard1>
              <TestimonialCard1Pic src={TestimonialCard1Logo} />
              <TestimonialCard1InnerDiv>
                <TestimonialCard1InnerH3>
                  AI-Powered Creativity
                </TestimonialCard1InnerH3>
                <TestimonialCard1InnerP>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  a asperiores, repudiandae similique vero fugit.
                </TestimonialCard1InnerP>
              </TestimonialCard1InnerDiv>
            </TestimonialCard1>
            <TestimonialCard2>
              <TestimonialCard1Pic src={TestimonialCard2Logo} />
              <TestimonialCard1InnerDiv>
                <TestimonialCard1InnerH3>
                  Effortless Design
                </TestimonialCard1InnerH3>
                <TestimonialCard1InnerP>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  a asperiores, repudiandae similique vero fugit.
                </TestimonialCard1InnerP>
              </TestimonialCard1InnerDiv>
            </TestimonialCard2>
            <TestimonialCard3>
              <TestimonialCard1Pic src={TestimonialCard3Logo} />
              <TestimonialCard1InnerDiv>
                <TestimonialCard1InnerH3>
                  High-Quality Output
                </TestimonialCard1InnerH3>
                <TestimonialCard1InnerP>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  a asperiores, repudiandae similique vero fugit.
                </TestimonialCard1InnerP>
              </TestimonialCard1InnerDiv>
            </TestimonialCard3>
            <TestimonialCard4>
              <TestimonialCard1Pic src={TestimonialCard4Logo} />
              <TestimonialCard1InnerDiv>
                <TestimonialCard1InnerH3>
                  Customization Option
                </TestimonialCard1InnerH3>
                <TestimonialCard1InnerP>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  a asperiores, repudiandae similique vero fugit.
                </TestimonialCard1InnerP>
              </TestimonialCard1InnerDiv>
            </TestimonialCard4>
          </TestimonialCardInnerDiv>
        </TestimonialCardDiv>
      </TestimonialSectionMainDiv>
    </>
  );
}
