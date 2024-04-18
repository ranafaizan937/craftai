import React from "react";
import {
  FAQAvatar,
  FAQButton,
  FAQButtonDiv,
  FAQDetailDiv,
  FAQH1,
  FAQH1Div,
  FAQH3,
  FAQInnerDiv,
  FAQInnerDiv1,
  FAQInnerDiv2,
  FAQName,
  FAQStar,
  FAQp,

} from "./FAQSectionStyle";
import Avatar from "../assets/Avatar.png";
import Star from "../assets/Frame.png";
import Slider from "react-slick";

export default function FAQSection() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="FAQMainDiv">
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
      </div>
    </>
  );
}
