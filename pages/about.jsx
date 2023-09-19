import Head from 'next/head';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import TeamSlider from '../components/Slider/TeamSlider';
import Spacing from '../components/Spacing';

export default function About() {
  const funfaceData = [
    {
      title: ' Happy Clients',
      factNumber: '20K',
    },
    {
      title: 'Completed Campaigns',
      factNumber: '4K',
    },
    {
      title: 'On-Time Delivery',
      factNumber: '100%',
    },
    {
      title: 'Live Websites',
      factNumber: '70',
    },
  ];
  return (
    <>
      <Head>
        <title>Home - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Us"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="About Us"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Your trusted partner for business"
                subtitle="About Our Agency"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                Blazon Web, founded in 2022 by four visionary young men, is an innovative
                digital agency empowering business owners to enhance their online
                presence and thrive in the digital realm. As a leading digital agency,
                we bring together a team of talented professionals
                who are dedicated to delivering exceptional results and
                unparalleled creativity.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/about_img_1.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/about_img_2.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_3.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

        {/* Start Fun Fact Section */}
        <Div className="container">
          <FunFact
            title="Driving Success"
            subtitle="At Blazon Web, we measure our success not only in terms of creativity
            and innovation but also through the tangible results we achieve for our clients."
            data={funfaceData}
          />
        </Div>
        {/* End Fun Fact Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/about_img_4.jpeg"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Highly experienced pepole with us"
                subtitle="Why Choose Us"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                we value long-term relationships and strive to exceed expectations in
                every project we undertake. Our dedication to client satisfaction is
                unwavering, and we measure our success by the success of our
                clients. When you work with us, you can expect personalized attention,
                top-notch customer service, and a commitment to delivering projects
                on time and within budget.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                Experience the Blazon Web difference and contact us today to
                discuss how we can help you achieve digital success
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
