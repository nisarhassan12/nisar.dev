import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Testimonial from "./testimonial";
import styled from "@emotion/styled";

const StyledTestimonials = styled.section`
  text-align: center;

  .heading--underlined {
    &::after {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .testimonials {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
      flex-direction: column;
      align-items: center;
    }

    & > * {
      flex: 0 0 49%;
    }
  }
`;

const Testimonials = () => (
  <StyledTestimonials id="testimonials">
    <div className="row">
      <h2 className="heading--underlined">Testimonials</h2>
      <div className="testimonials">
        <Testimonial
          name="Nicholas Shook"
          role="Attorney, Software Developer"
          quote="Nisar is a fantastic UI developer and engineer. He helped our website become ARIA-compliant by enforcing accessibility standards in a thorough, test-driven way. We appreciated his clear communication and his awesome work product in our time spent together. I highly recommend booking Nisar for UI needs."
        >
          <StaticImage src="../../images/nicholas-shook.jpg" alt="Nicholas Shook" style={{borderRadius: '50%'}} imgStyle={{borderRadius: '50%'}}/>
        </Testimonial>
        <Testimonial
          name="Josef Kruckenberg"
          role="Drupal Contributor"
          quote="Working with Nisar was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution. I appreciated him challenging my concept and implementing a solution that performs well using Gatsby.js. Nisar also performed API integration, design and frontend development leading the project to success in a very agile and quality appreciating manner."
        >
          <StaticImage src="../../images/josef.jpg" alt="Josef Kruckenberg" style={{borderRadius: '50%'}} imgStyle={{borderRadius: '50%'}}/>
        </Testimonial>
      </div>
    </div>
  </StyledTestimonials>
);

export default Testimonials;
