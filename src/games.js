import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ image, title, link }) => (
  <div className="card-s2">
      <img src={image} className="img-fluid thumbnail" alt={title} />
  </div>
);

// const CardRow = ({ cards }) => (
//   <div className="row">
//     {cards.map((card, index) => (
//       <div className="col-2 mt-5 mb-5" key={index}>
//         <Card
//           image={card.image}
//           title={card.title}
//           text={card.text}
//           link={card.link}
//           buttonText={card.btn}
//         />
//       </div>
//     ))}
//   </div>
// );

const Games = () => {
  const cards = [
    {
      image: "./images/icons-1.png",
      title: 'Flappy Bird',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-2.png',
      title: 'Snake',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-3.png',
      title: 'Weather App',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: "./images/icons-5.png",
      title: 'Terminal',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: "./images/icons-1.png",
      title: 'Flappy Bird',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-2.png',
      title: 'Snake',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-3.png',
      title: 'Weather App',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: "./images/icons-5.png",
      title: 'Terminal',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Scroll to the next slide
      }
    }, 3000); // Change the interval duration as per your preference

    return () => clearInterval(interval);
  }, []);

  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Display three cards at a time
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '0px', // Adjust the padding to center the cards
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    swipe: false,
    pauseOnHover: false,
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className="container-fluid mb-5 mt-5">
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div className="slide-item" key={index}>
            <Card image={card.image} title={card.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Games;
