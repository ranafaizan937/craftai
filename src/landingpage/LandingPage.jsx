import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FAQSection from "./FAQSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import LastSectionComponent from "./LastSectionComponent";
import NavBar from "./NavBar";
import TestomonialSection from "./TestomonialSection";

export default function LandingPage() {


  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      {/* <FeatureMainSection>
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
      </FeatureMainSection> */}
      <FeatureSection></FeatureSection>
      {/* <TestimonialSectionMainDiv>
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
      </TestimonialSectionMainDiv> */}
      <TestomonialSection></TestomonialSection>
      {/* <FAQSection> */}
      {/* <div className="FAQMainDiv">
        <Slider className="slider234" {...settings}>
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
      </div> */}
      <FAQSection></FAQSection>
      {/* <LastSection>
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
                    setOne(!one)
                    // setTwo(false)
                }}
              />
              <LastSectionQuestion>
                How do I create an account on your platform?
              </LastSectionQuestion>

              <LastSectionAnswer className={one ? "open" : "close"} style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQA1Inner>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={two ? Plus : Minus}
                onClick={() => {
                    setTwo(!two)
                    // setOne(false)
                }}/>
              <LastSectionQuestion>
                What file formats are available for logo downloads?
              </LastSectionQuestion>
              <LastSectionAnswer className={two ? "open" : "close"} style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={three ? Plus : Minus}
                onClick={() => {
                    setThree(!three)
                    // setOne(false)
                }} />
              <LastSectionQuestion>
                Can I customize a pre-designed logo template?
              </LastSectionQuestion>
              <LastSectionAnswer className={three ? "open" : "close"} style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={four ? Plus : Minus}
                onClick={() => {
                    setFour(!four)
                    // setOne(false)
                }}  />
              <LastSectionQuestion>
                Is there a refund policy for logo purchases?
              </LastSectionQuestion>
              <LastSectionAnswer className={four ? "open" : "close"} style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={five ? Plus : Minus}
                onClick={() => {
                    setFive(!five)
                    // setOne(false)
                }}  />
              <LastSectionQuestion>
                How do I contact customer support for assistance?
              </LastSectionQuestion>
              <LastSectionAnswer className={five ? "open" : "close"} style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
          <LastSectionQA>
            <LastSectionQADiv>
              <PlusMinus src={six ? Plus : Minus}
                onClick={() => {
                    setSix(!six)
                    // setOne(false)
                }}  />
              <LastSectionQuestion>
                Are there any subscription plans available for extended
                features?
              </LastSectionQuestion>
              <LastSectionAnswer className={six ? "open" : "close"} style={{ marginLeft: "30px" }}>
                To create an account on our platform, simply click on the "Sign
                Up" button on the homepage. Fill in the required information,
                verify your email, and you're all set to explore and use our
                services.
              </LastSectionAnswer>
            </LastSectionQADiv>
          </LastSectionQA>
        </LastSectionQASection>
      </LastSection> */}
      <LastSectionComponent></LastSectionComponent>
      
      <Footer></Footer>
    </>
  );
}
