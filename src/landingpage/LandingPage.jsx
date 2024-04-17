import React from "react";
import Pic1st from "../assets/1stpic.jpg";
import Pic2nd from "../assets/2ndpic.jpg";
import Pic3rd from "../assets/3rdpic.jpg";
import Card1Pic1 from "../assets/Card1pic.jpg";
import Pic1 from "../assets/Dummy Logo.jpg";
import Card1Pic2 from "../assets/Card1pic2.jpg";
import Card2Pic1 from "../assets/Card2pic1.jpg";
import Card2pic2 from "../assets/Card2pic2.jpg";
import TestimonialCard1Logo from "../assets/Featured icon.jpg";
import TestimonialCard2Logo from "../assets/Card2Icon.jpg";
import TestimonialCard3Logo from "../assets/Card3Icon.jpg";
import TestimonialCard4Logo from "../assets/Card4Icon.jpg";
import Avatar from "../assets/Avatar.png";
import Star from "../assets/Frame.png";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
import Slider from "react-slick";
import {
  Card1,
  Card1First,
  Card1FirstDes,
  Card1FirstDesDiv,
  Card1FirstPic,
  Card1FirstPicDiv,
  Card1FirstButton,
  Card1Second,
  Card1h3,
  Card1p,
  Card2,
  CardDiv,
  DeatilH4,
  DetailBody,
  DetailBody2,
  DetailButton,
  DetailDescription,
  DetailHead,
  DetailInnerSection,
  DetailSection,
  FeatureDiv,
  FeatureInnerSection,
  FeatureList,
  FeatureListItem,
  FeatureMainSection,
  FirstDiv,
  FirstDivData,
  FirstPic,
  GetStartedDiv,
  GetStartedNavBtn,
  HeroHeadSection,
  LogiDiv,
  Logo,
  NavDiv,
  NavInnerDiv,
  Pic1Section,
  Pic2Section,
  PicInnerSection,
  PicSection,
  SecondDiv,
  SecondDivData,
  SecondPic,
  ThirdDiv,
  ThirdDivList,
  ThirdDivListItem,
  ThirdPic,
  Card1SecondPicDiv,
  Card1SecondPic,
  Card1SecondDesDiv,
  Card1SecondDes,
  Card1Secondh3,
  Card1Secondp,
  Card1SecondButton,
  Card2First,
  Card2Second,
  Card2FirstPicDiv,
  Card2FirstPic,
  Card2FirstDesDiv,
  Card2FirstDes,
  Card2h3,
  Card2p,
  Card2FirstButton,
  Card2SecondPicDiv,
  Card2SecondPic,
  Card2SecondDesDiv,
  Card2SecondDes,
  Card2Secondh3,
  Card2Secondp,
  Card2SecondButton,
  TestimonialSectionMainDiv,
  TestimonialHeadDiv,
  TestimonialButton,
  TestimonialButtonDiv,
  TestimonialH1,
  TestimonialP,
  TestimonialCardDiv,
  TestimonialCardInnerDiv,
  TestimonialCard1,
  TestimonialCard2,
  TestimonialCard3,
  TestimonialCard4,
  TestimonialCard1Pic,
  TestimonialCard1InnerDiv,
  TestimonialCard1InnerH3,
  TestimonialCard1InnerP,
  FAQSection,
  FAQInnerDiv,
  FAQButtonDiv,
  FAQButton,
  FAQH1,
  FAQH1Div,
  FAQDetailDiv,
  FAQInnerDiv1,
  FAQInnerDiv2,
  FAQAvatar,
  FAQName,
  FAQH3,
  FAQStar,
  FAQp,
  LastSection,
  LastSectionHeadDiv,
  LastSectionButtonDiv,
  LastSectionButton,
  LastSectionInnerHeadDiv,
  LastSectionHeadH1,
  LastSectionHeadDes,
  LastSectionQASection,
  LastSectionQA1,
  LastSectionQA,
  LastSectionQA1Inner,
  PlusMinus,
  LastSectionQuestion,
  LastSectionAnswer,
  LastSectionQADiv,
  FooterSection,
  FooterSectionDiv,
  FooterSectionInnerDiv,
  FooterSectionLogo,
  FooterSectionP,
  FooterSectionListDiv,
  FooterSectionSpan,
  FooterSectionList2Div,
  FooterSectionStayusDiv,
  FooterSectionStayusP,
  FooterSectionStayusInnerDiv,
  FooterSectionStayusSearch,
  FooterSectionStayusButton,
} from "./LandingPagestyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
      <FAQSection>
        <Slider {...settings}>
        <FAQInnerDiv>
          <FAQButtonDiv>
            <FAQButton>Testimonials</FAQButton>
            <br />
          </FAQButtonDiv>
          <FAQH1Div>
            <FAQH1>
              Craft AI has saved us thousands of hours of work. We are able to
              spin up projects and features faster.
            </FAQH1>
          </FAQH1Div>
          <FAQDetailDiv>
            <FAQInnerDiv1>
              <FAQAvatar src={Avatar} />
            </FAQInnerDiv1>
            <FAQInnerDiv2>
              <FAQName>
                <FAQH3>MOllie Hall</FAQH3>
              </FAQName>
              <FAQName style={{ gap: "5px" }}>
                <FAQStar src={Star} />
                <FAQStar src={Star} />
                <FAQStar src={Star} />
                <FAQStar src={Star} />
                <FAQStar src={Star} />
              </FAQName>
              <FAQName style={{ marginTop: "2px" }}>
                <FAQp>
                  {" "}
                  Hear from some of our amazing customers who are automating
                  their finances.
                </FAQp>
              </FAQName>
            </FAQInnerDiv2>
          </FAQDetailDiv>
        </FAQInnerDiv>
        </Slider>
      </FAQSection>
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
          <LastSectionQA1>
            <LastSectionQA1Inner>
              <PlusMinus src={Minus} />
              <LastSectionQuestion>
                How do I create an account on your platform?
              </LastSectionQuestion>
              <LastSectionAnswer style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQA1Inner>
          </LastSectionQA1>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={Plus} />
              <LastSectionQuestion>
                What file formats are available for logo downloads?
              </LastSectionQuestion>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={Plus} />
              <LastSectionQuestion>
                Can I customize a pre-designed logo template?
              </LastSectionQuestion>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={Plus} />
              <LastSectionQuestion>
                Is there a refund policy for logo purchases?
              </LastSectionQuestion>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={Plus} />
              <LastSectionQuestion>
                How do I contact customer support for assistance?
              </LastSectionQuestion>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={Plus} />
              <LastSectionQuestion>
                Are there any subscription plans available for extended
                features?
              </LastSectionQuestion>
            </LastSectionQADiv>
          </LastSectionQA>
        </LastSectionQASection>
      </LastSection>
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
