import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: 'Terms of Services',
      href: '/',
    },
    {
      title: 'Privacy Policy',
      href: '/',
    },
  ];

  const serviceMenu = [
    {
      title: 'Web Development',
      href: '#',
    },
    {
      title: 'Digital Marketing',
      href: '#',
    },
    {
      title: 'Branding',
      href: '#',
    },
   
  ];



  const quicklinkMenu = [
  
    {
      title: 'About Us',
      href: '#',
    },
    {
      title: 'Services',
      href: '#',
    },
    {
      title: 'Portfolio',
      href: '#',
    },
    {
      title: 'Team',
      href: '#',
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-sm-6 pe-4">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/blazon-logo.svg"
                  logoAlt="Blazon web logo"
                  text="Innovative digital agency empowering business owners to enhance their online presence and thrive in the digital realm."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-2 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={quicklinkMenu} menuHeading="Quick links" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
               
                <MenuWidget menuItems={serviceMenu} menuHeading="Our Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                {/* <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                /> */}

                 <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 Blazonweb Pvt Ltd.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
