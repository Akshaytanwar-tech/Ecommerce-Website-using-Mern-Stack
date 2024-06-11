import React from "react";
import akshay from "../Pictures/akshay.jpg";

const About = () => {
  return (
    <>
      <section
        class="text-center"
        style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="display-4">About Us</h1>
              <p class="mt-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Welcome to our e-commerce store! We are dedicated to bringing
                you the best products at the best prices. Our mission is to make
                your shopping experience as enjoyable and seamless as possible.
                We believe in quality, affordability, and exceptional customer
                service.
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-4 mx-auto">
              <img
                src={akshay}
                alt="Your Name"
                class="img-fluid rounded-circle"
                style={{ maxWidth: "200px", margin: "20px 0" }}
              />
              <h2 class="mt-3">Akshay tanwar</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
