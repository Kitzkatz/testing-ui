/* 30 banners
 */

'use client';

import React from 'react';
import { useState } from 'react';
//import "./styles/banner-components.css"

// 1

const SimpleBanner = (props) => {
  return (
    <div className="simple-banner" style={props.style}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

// 2

const ImageBanner = (props) => {
  return (
    <div className="image-banner">
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
};

// 3

const PromoBanner = (props) => {
  return (
    <div className="promo-banner">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <p>Promo Code: {props.promoCode}</p>
    </div>
  );
};

// 4

const VideoBanner = (props) => {
  return (
    <div className="video-banner">
      <video controls>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// 5

const CustomBanner = (props) => {
  return <div className="custom-banner">{props.children}</div>;
};

// 6

const CountdownBanner = (props) => {
  const calculateTimeRemaining = () => {
    const now = new Date();

    const targetDate = new Date(props.endDate);

    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTimeRemaining();

  return (
    <div className="countdown-banner" style={props.style}>
      <h2>{props.title}</h2>
      <p>
        {days}d {hours}h {minutes}m {seconds}s left
      </p>
    </div>
  );
};

// 7

const ActionBanner = (props) => {
  return (
    <div className="action-banner">
      <h2>{props.title}</h2>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
  );
};

// 8

const AlertBanner = (props) => {
  return (
    <div className={`alert-banner ${props.type}`}>
      <p>{props.message}</p>
    </div>
  );
};

// 9

const FeaturedBanner = (props) => {
  return (
    <div className="featured-banner">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.imgTitle} />
    </div>
  );
};

// 10

const SlideshowBanner = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + props.images.length) % props.images.length
    );
  };

  return (
    <div className="slideshow-banner">
      <img
        src={props.images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
      />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

// 11
const CarouselBanner = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? props.images.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % props.images.length);
  };

  return (
    <div className="carousel-banner">
      <img src={props.images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

// 12

const SaleBanner = (props) => {
  return (
    <div className="sale-banner">
      <h2>{props.discount}% Off Sale!</h2>
      <p>Ends on {props.endDate}</p>
    </div>
  );
};

// 13

const FeatureComparisonBanner = (props) => {
  return (
    <div className="feature-comparison-banner">
      <h2>Compare Features</h2>
      <ul>
        {props.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

// 14

const CallToActionBanner = (props) => {
  return (
    <div className="call-to-action-banner">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button onClick={props.onClick}>{props.actionText}</button>
    </div>
  );
};

// 15

const EventBanner = (props) => {
  return (
    <div className="event-banner">
      <h2>{props.eventName}</h2>
      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

// 16

const GradientBanner = (props) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${props.gradientColors[0]}, ${props.gradientColors[1]})`,
  };

  return (
    <div className="gradient-banner" style={props.gradientStyle}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
};

// 17

const ProductFeatureBanner = (props) => {
  return (
    <div className="product-feature-banner">
      <i className={`icon ${props.icon}`}></i>
      <p>{props.feature}</p>
    </div>
  );
};

// 18

const VideoBackgroundBanner = (props) => {
  return (
    <div className="video-background-banner">
      <video autoPlay loop muted>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// 19

const NotificationBanner = (props) => {
  return (
    <div className="notification-banner">
      <p>{props.message}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

// 20

const AnimatedBanner = (props) => {
  return (
    <div className={`animated-banner ${props.animationType}`}>
      {props.content}
    </div>
  );
};

// 21

const TestimonialBanner = (props) => {
  return (
    <div className="testimonial-banner">
      <blockquote>{props.quote}</blockquote>
      <p>{props.author}</p>
      <p>{props.position}</p>
    </div>
  );
};

// 22

const InfoBanner = (props) => {
  return (
    <div className="info-banner">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

// 23

const HolidayBanner = (props) => {
  return (
    <div className="holiday-banner">
      <h2>{props.occasion}</h2>
      <p>{props.message}</p>
    </div>
  );
};

// 24

const CallToActionImageBanner = (props) => {
  return (
    <div className="call-to-action-image-banner">
      <img src={props.imageUrl} alt={props.altText} />
      <button onClick={props.onClick}>{props.actionText}</button>
    </div>
  );
};

// 25

const AnnouncementBanner = (props) => {
  return (
    <div className="announcement-banner">
      <p>{props.announcement}</p>
    </div>
  );
};

// 26

const NotificationBar = (props) => {
  return (
    <div className={`notification-bar ${props.type}`}>
      <p>{props.message}</p>
      <button onClick={props.onClose}>Dismiss</button>
    </div>
  );
};

// 27

const SeasonalBanner = (props) => {
  return (
    <div className="seasonal-banner">
      <h2>{props.season} Special</h2>
      <p>{props.message}</p>
    </div>
  );
};

// 28

const CallToActionVideoBanner = (props) => {
  return (
    <div className="call-to-action-video-banner">
      <video controls>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={props.onClick}>{props.actionText}</button>
    </div>
  );
};

// 29

const QuoteBanner = (props) => {
  return (
    <div className="quote-banner">
      <blockquote>{props.quote}</blockquote>
      <p>- {props.author}</p>
    </div>
  );
};

// 30

const FeatureHighlightBanner = (props) => {
  return (
    <div className="feature-highlight-banner">
      <i className={`icon ${props.icon}`}></i>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export {
  SimpleBanner,
  ImageBanner,
  PromoBanner,
  VideoBanner,
  CustomBanner,
  CountdownBanner,
  ActionBanner,
  AlertBanner,
  FeaturedBanner,
  SlideshowBanner,
  CarouselBanner,
  SaleBanner,
  FeatureComparisonBanner,
  CallToActionBanner,
  EventBanner,
  GradientBanner,
  ProductFeatureBanner,
  VideoBackgroundBanner,
  NotificationBanner,
  AnimatedBanner,
  TestimonialBanner,
  InfoBanner,
  HolidayBanner,
  CallToActionImageBanner,
  AnnouncementBanner,
  NotificationBar,
  SeasonalBanner,
  CallToActionVideoBanner,
  QuoteBanner,
  FeatureHighlightBanner,
};
