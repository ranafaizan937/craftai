import React, { useState } from "react";
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.png";
import {
  LastSection,
  LastSectionAnswer,
  LastSectionButton,
  LastSectionButtonDiv,
  LastSectionHeadDes,
  LastSectionHeadDiv,
  LastSectionHeadH1,
  LastSectionInnerHeadDiv,
  LastSectionQA,
  LastSectionQA1Inner,
  LastSectionQADiv,
  LastSectionQASection,
  LastSectionQuestion,
  PlusMinus,
} from "./LastSectionStyle";


export default function LastSectionComponent() {

    
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);
  const [five, setFive] = useState(true);
  const [six, setSix] = useState(true);
  return (
    <>
      <LastSection>
        <LastSectionHeadDiv>
          <LastSectionButtonDiv>
            <LastSectionButton>FAQs</LastSectionButton>
          </LastSectionButtonDiv>
          <LastSectionInnerHeadDiv>
            <LastSectionHeadH1>
              Queries Answered for a Seamless Experience
            </LastSectionHeadH1>
            <LastSectionHeadDes>
              Explore our FAQ section for comprehensive answers to common
              queries.{" "}
            </LastSectionHeadDes>
          </LastSectionInnerHeadDiv>
        </LastSectionHeadDiv>
        <LastSectionQASection>
          <LastSectionQA>
            <LastSectionQA1Inner>
              <PlusMinus
                src={one ? Plus : Minus}
                onClick={() => {
                  setOne(!one);
                  // setTwo(false)
                }}
              />
              <LastSectionQuestion>
                How do I create an account on your platform?
              </LastSectionQuestion>

              <LastSectionAnswer
                className={one ? "open" : "close"}
                style={{ marginLeft: "30px" }}
              >
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQA1Inner>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus
                src={two ? Plus : Minus}
                onClick={() => {
                  setTwo(!two);
                  // setOne(false)
                }}
              />
              <LastSectionQuestion>
                What file formats are available for logo downloads?
              </LastSectionQuestion>
              <LastSectionAnswer
                className={two ? "open" : "close"}
                style={{ marginLeft: "30px" }}
              >
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus
                src={three ? Plus : Minus}
                onClick={() => {
                  setThree(!three);
                  // setOne(false)
                }}
              />
              <LastSectionQuestion>
                Can I customize a pre-designed logo template?
              </LastSectionQuestion>
              <LastSectionAnswer
                className={three ? "open" : "close"}
                style={{ marginLeft: "30px" }}
              >
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus
                src={four ? Plus : Minus}
                onClick={() => {
                  setFour(!four);
                  // setOne(false)
                }}
              />
              <LastSectionQuestion>
                Is there a refund policy for logo purchases?
              </LastSectionQuestion>
              <LastSectionAnswer
                className={four ? "open" : "close"}
                style={{ marginLeft: "30px" }}
              >
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus
                src={five ? Plus : Minus}
                onClick={() => {
                  setFive(!five);
                  // setOne(false)
                }}
              />
              <LastSectionQuestion>
                How do I contact customer support for assistance?
              </LastSectionQuestion>
              <LastSectionAnswer
                className={five ? "open" : "close"}
                style={{ marginLeft: "30px" }}
              >
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus
                src={six ? Plus : Minus}
                onClick={() => {
                  setSix(!six);
                  // setOne(false)
                }}
              />
              <LastSectionQuestion>
                Are there any subscription plans available for extended
                features?
              </LastSectionQuestion>
              <LastSectionAnswer
                className={six ? "open" : "close"}
                style={{ marginLeft: "30px" }}
              >
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
        </LastSectionQASection>
      </LastSection>
    </>
  );
}
