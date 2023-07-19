import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, text, link, buttonText }) => (
  <div className="card card-s">
    <img src={image} className="card-img-top" />
      <div className="card-body card-body-s text-center">
      <Link to={link} className="card-link">
        <h5 className="c-title">{title}</h5>
      </Link>
      </div>
  </div>
);

const CardRow = ({ cards }) => (
  <div className="row">
    {cards.map((card, index) => (
      <div className="col-2 mt-5 mb-5" key={index}>
        <Card
          image={card.image}
          title={card.title}
          text={card.text}
          link={card.link}
          buttonText={card.btn}
        />
      </div>
    ))}
  </div>
);

const Games = () => {
  const cards = [
    {
      image: "./images/icons-1.png",
      title: 'Flappy Bird',
      text: 'Card 1',
      link: '/weatherApp',
      btn: 'button',
    },
    {
      image: './images/icons-4.png',
      title: 'Snake',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-3.png',
      title: 'Weather App',
      text: 'Card 1',
      link: '/weather-app/index.html',
      btn: 'button',
    },
    {
      image: './images/icons-2.png',
      title: 'Tetris',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: "./images/icons-5.png",
      title: 'Terminal',
      text: 'Card 1',
      link: '/terminal-app/index.html',
      btn: 'button',
    },
    {
      image: './images/icons-4.png',
      title: 'Snake',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-3.png',
      title: 'Weather App',
      text: 'Card 1',
      link: 'public/weather-app/index.html',
      btn: 'button',
    },
    {
      image: './images/icons-2.png',
      title: 'Tetris',
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
      image: './images/icons-4.png',
      title: 'Snake',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    {
      image: './images/icons-3.png',
      title: 'Weather App',
      text: 'Card 1',
      link: 'public/weather-app/index.html',
      btn: 'button',
    },
    {
      image: './images/icons-2.png',
      title: 'Tetris',
      text: 'Card 1',
      link: 'https://example.com/card1',
      btn: 'button',
    },
    
  ];

  return (
    <div className="container">
      <div className='gamesTitle'>
        <h1 className='co-white'>List of Project:</h1>
      </div>
      <div className="section">
      <div className="card-container">
          <CardRow cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Games;
