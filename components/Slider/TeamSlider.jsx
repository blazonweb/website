import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      // detailUrl:{
      //   detail: 'team-detail',
      // },
      memberImage: '/images/team-9.jpg',
      detailUrl:'/team/shamsad',
      memberName: 'Shamsad P',
      memberDesignation: 'Graphic Designer',
      memberSocial: {
        linkedin: '#',
        instagram: 'https://instagram.com/shamzgea',
        // youtube: '/',
        facebook: '#',
      },
    },
    {
      // detailUrl:{
      //   detail: 'team-detail',
      // },
      memberImage: '/images/team-1.jpg',
      detailUrl:'/team/firos-vk',
      memberName: 'Firos vk',
      memberDesignation: 'Web Developer',
      memberSocial: {
        linkedin: 'https://in.linkedin.com/in/firos-vk-736909238',
        instagram: 'https://instagram.com/hellofiru',
        // youtube: '/',
        facebook: 'https://www.facebook.com/profile.php?id=100031786308601',
      },
    },
    {
      // detailUrl: '/team-detail',
      memberImage: '/images/team-2.jpg',
      detailUrl:'/team/sareenak',
      memberName: 'Sareena K',
      memberDesignation: 'Consultant',
      memberSocial: {
        linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        facebook: '/',
        instagram: '/',
      },
    },
    {
      //  detailUrl: '/team-detail',
      memberImage: '/images/team-3.jpg',
      memberName: 'Thajuneesa K',
      detailUrl:'/team/thajuneesa',
      memberDesignation: 'Web developer',
      memberSocial: {
        linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        facebook: '/',
        instagram: '/',
      },
    },
    {
      // detailUrl: '/team-detail',
      memberImage: '/images/team-4.jpg',
      detailUrl:'/team/abi-nihaz',
      memberName: 'Abi Nihas',
      memberDesignation: 'Graphic Designer',
      memberSocial: {
        linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        facebook: '/',
        instagram: '/',
      },
    },
    {
      // detailUrl: '/team-detail',
      memberImage: '/images/team-5.jpg',
      detailUrl:'/team/imran',
      memberName: 'Imran K',
      memberDesignation: 'Consultant',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },

    {
      // detailUrl: '/team-detail',
      memberImage: '/images/team-6.jpg',
      detailUrl:'/team/shalim',
      memberName: 'Shalim M',
      memberDesignation: 'Consultant',
      memberSocial: {
        linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        facebook: '/',
        instagram: '/',
      },
    },

    {
      // detailUrl: '/team-detail',
      memberImage: '/images/team-7.jpg',
      detailUrl:'/team/irshad',
      memberName: 'Irshad K',
      memberDesignation: 'Web Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
        instagram: '/',
      },
    },

    {
      // detailUrl: '/team-detail',
      memberImage: '/images/team-8.jpg',
      detailUrl:'/team/shamsad',
      memberName: 'Mujeeb Rahman',
      memberDesignation: 'Consultant',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
        instagram: '/',
      },
    },



  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
{/*             detailUrl={item.detailUrl} */}
          />
        </Div>
      ))}
    </Slider>
  );
}
