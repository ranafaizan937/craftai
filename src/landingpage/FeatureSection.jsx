import React from "react";
import {
  Card1,
  Card1First,
  Card1FirstButton,
  Card1FirstDes,
  Card1FirstDesDiv,
  Card1FirstPic,
  Card1FirstPicDiv,
  Card1Second,
  Card1SecondButton,
  Card1SecondDes,
  Card1SecondDesDiv,
  Card1SecondPic,
  Card1SecondPicDiv,
  Card1Secondh3,
  Card1Secondp,
  Card1h3,
  Card1p,
  Card2,
  Card2First,
  Card2FirstButton,
  Card2FirstDes,
  Card2FirstDesDiv,
  Card2FirstPic,
  Card2FirstPicDiv,
  Card2Second,
  Card2SecondButton,
  Card2SecondDes,
  Card2SecondDesDiv,
  Card2SecondPic,
  Card2SecondPicDiv,
  Card2Secondh3,
  Card2Secondp,
  Card2h3,
  Card2p,
  CardDiv,
  FeatureInnerSection,
  FeatureMainSection,
  FirstDiv,
  FirstDivData,
  SecondDiv,
  SecondDivData,
  ThirdDiv,
  ThirdDivList,
  ThirdDivListItem,
} from "./FeatureSectionStyle";
import Card1Pic1 from "../assets/Card1pic.jpg";
import Card1Pic2 from "../assets/Card1pic2.jpg";
import Card2Pic1 from "../assets/Card2pic1.jpg";
import Card2pic2 from "../assets/Card2pic2.jpg";

export default function FeatureSection() {
  return (
    <>
      <FeatureMainSection>
        <FeatureInnerSection>
          <FirstDiv>
            <FirstDivData>
              Instantly create with our AI designs algorithm
            </FirstDivData>
          </FirstDiv>
          <SecondDiv>
            <SecondDivData>
              Transform your brand instantly with our AI-powered generator.
              Crafted in seconds, our result exude timeless style and enduring
              appeal.
            </SecondDivData>
          </SecondDiv>
          <ThirdDiv>
            <ThirdDivList>
              <ThirdDivListItem>View All</ThirdDivListItem>
              <ThirdDivListItem>Category one</ThirdDivListItem>
              <ThirdDivListItem>Category two</ThirdDivListItem>
              <ThirdDivListItem>Category three</ThirdDivListItem>
              <ThirdDivListItem>Category four</ThirdDivListItem>
            </ThirdDivList>
          </ThirdDiv>
          <CardDiv>
            <Card1>
              <Card1First>
                <Card1FirstPicDiv>
                  <Card1FirstPic src={Card1Pic1} />
                </Card1FirstPicDiv>
                <Card1FirstDesDiv>
                  <Card1FirstDes>
                    <Card1h3>AL Logo Maker</Card1h3>
                    <Card1p>
                      Craft a unique brand identity with our Logo Maker.
                      Effortless Design, endless possibilities
                    </Card1p>
                  </Card1FirstDes>
                </Card1FirstDesDiv>
                <Card1FirstButton type="primary">Try Now</Card1FirstButton>
              </Card1First>
              <Card1Second>
                <Card1SecondPicDiv>
                  <Card1SecondPic src={Card1Pic2} />
                </Card1SecondPicDiv>
                <Card1SecondDesDiv>
                  <Card1SecondDes>
                    <Card1Secondh3>AL Video Creator</Card1Secondh3>
                    <Card1Secondp>
                      Bring your ideas with our AL-powered Vieo Creator. From
                      consept to masterpiece in a few click
                    </Card1Secondp>
                  </Card1SecondDes>
                </Card1SecondDesDiv>
                <Card1SecondButton type="primary">Try Now</Card1SecondButton>
              </Card1Second>
            </Card1>
            <Card2>
              <Card2First>
                <Card2FirstPicDiv>
                  <Card2FirstPic src={Card2Pic1} />
                </Card2FirstPicDiv>
                <Card2FirstDesDiv>
                  <Card2FirstDes>
                    <Card2h3>AL Mockup Generator</Card2h3>
                    <Card2p>
                      Visulaize your designs in real-world scenarios. Our Mockup
                      Generator adds realism to your creative vision
                    </Card2p>
                  </Card2FirstDes>
                </Card2FirstDesDiv>
                <Card2FirstButton type="primary">Try Now</Card2FirstButton>
              </Card2First>
              <Card2Second>
                <Card2SecondPicDiv>
                  <Card2SecondPic src={Card2pic2} />
                </Card2SecondPicDiv>
                <Card2SecondDesDiv>
                  <Card2SecondDes>
                    <Card2Secondh3>AL Content Creator</Card2Secondh3>
                    <Card2Secondp>
                      Craft a unique brand identity with our Logo Maker.
                      Effortless Design, endless possibilities
                    </Card2Secondp>
                  </Card2SecondDes>
                </Card2SecondDesDiv>
                <Card2SecondButton type="primary">Try Now</Card2SecondButton>
              </Card2Second>
            </Card2>
          </CardDiv>
        </FeatureInnerSection>
      </FeatureMainSection>
    </>
  );
}
