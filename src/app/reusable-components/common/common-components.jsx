/* 66 common components
 */

'use client';
import React from 'react';
//import "./styles/common-components.css"

// 1
// Header Component
const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">Logo</div>
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// 2
// Footer Component
const Footer = () => {
  return (
    <footer>
      {/* Copyright */}
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

// 3
// NavigationMenu Component
const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

// 4
// HeroSection Component
const HeroSection = (props) => {
  return (
    <section className="hero">
      {/* Hero content */}
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>{props.button}</button>
    </section>
  );
};

// 5
// CallToAction Component
const CallToAction = (props) => {
  return (
    <section className="cta">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>{props.button}</button>
    </section>
  );
};

// 6
// Testimonials Component
const Testimonials = (props) => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        {props.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.text}</p>
            <cite>{testimonial.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

// 7
// ContactForm Component
const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form>
        {/* Form fields */}
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
};

// 8
// ProductCard Component #1
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.imgName} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button>{props.button}</button>
    </div>
  );
};

// 9
/*
Deleted

*/

// 10
// BlogPost Component
const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{props.excerpt}</p>
      <a href={props.link}>Read More</a>
    </div>
  );
};

// 11
// Sidebar Component
const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      {/* Sidebar content */}
      <ul>
        <li>
          <a href={props.homeLink}>Home</a>
        </li>
        <li>
          <a href={props.aboutLink}>About</a>
        </li>
        <li>
          <a href={props.serviceLink}>Services</a>
        </li>
        <li>
          <a href={props.contactLink}>Contact</a>
        </li>
      </ul>
    </aside>
  );
};

// 12
// Modal Component
const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {props.children}
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

// 13
/*
DELETED

*/

// 14
// ErrorAlert Component
const ErrorAlert = (props) => {
  return (
    <div className="error-alert">
      <p>{props.message}</p>
    </div>
  );
};

// 15
// LoadingSpinner Component
const LoadingSpinner = () => {
  return <div className="loading-spinner">{/* Loading animation */}</div>;
};

//16
// VideoPlayer Component
const VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <video controls>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// 17
// SearchBar Component
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  );
};

/*
// 18
// Pagination Component
function Pagination({ currentPage, totalPages, onPageChange }) {
const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
return (
<ul className="pagination">
{pageNumbers.map(pageNumber => (
<li key={pageNumber}>
<button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
</li>
))}
</ul>
);
}
*/

// 19
// Pagination Component
const Pagination = (props) => {
  return (
    <div className="pagination">
      {Array.from({ length: props.totalPages }, (_, index) => (
        <button
          key={index}
          className={index + 1 === props.currentPage ? 'active' : ''}
          onClick={() => props.onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

// 20
// InteractiveTabs Component
const InteractiveTabs = (props) => {
  return (
    <div className="interactive-tabs">
      <ul>
        {props.tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => props.onTabSelect(tab.id)}
              className={tab.id === props.selectedTab ? 'active' : ''}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">{/* Content based on selectedTab */}</div>
    </div>
  );
};

// 21
// Accordion Component
const Accordion = (props) => {
  return (
    <div className="accordion">
      {props.items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-button">{item.title}</button>
          <div className="accordion-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

// 22
// ImageGallery Component
const ImageGallery = (props) => {
  return (
    <div className="image-gallery">
      {props.images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

// 23
/*
// ImageGallery Component
function ImageGallery({ images }) {
return (
<div className="image-gallery">
{images.map((image, index) => (
<img key={index} src={image.url} alt={`Image ${index + 1}`} />
))}
</div>
);
}
*/

// 24
// ProgressIndicator Component
const ProgressIndicator = (props) => {
  return (
    <div className="progress-indicator">
      <div
        className="progress-bar"
        style={{ width: `${props.progress}%` }}
      ></div>
    </div>
  );
};

// 25
// CountdownTimer Component
const CountdownTimer = (props) => {
  const calculateTimeLeft = () => {
    const difference = new Date(props.targetDate) - new Date();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <div>
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{' '}
        minutes,
        {timeLeft.seconds} seconds
      </div>
    </div>
  );
};

// 26
// ModalGallery Component
const ModalGallery = (props) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="modal-gallery">
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => openModal(index)}
        />
      ))}
      {selectedImageIndex !== null && (
        <div className="modal">
          <img
            src={props.images[selectedImageIndex].src}
            alt={props.images[selectedImageIndex].alt}
          />
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

// 27
// PricingTable Component
const PricingTable = (props) => {
  return (
    <div className="pricing-table">
      {props.plans.map((plan, index) => (
        <div key={index} className="pricing-plan">
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <span className="price">${plan.price}</span>
          <button>Select Plan</button>
        </div>
      ))}
    </div>
  );
};

// 28
/*
// SocialSharing Component
function SocialSharing(props) {
return (
<div className="social-sharing">
<a href={`https://facebook.com/sharer.php?u=${encodeURIComponent(props.shareUrl)}`}
target="_blank" rel="noopener noreferrer">
Share on Facebook
</a>
<a
href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(props.shareUrl)}&text=${encodeU
RIComponent(props.title)}`} target="_blank" rel="noopener noreferrer">
Share on Twitter
</a>
<a
href={`https://linkedin.com/shareArticle?url=${encodeURIComponent(props.shareUrl)}&title=${encode
URIComponent(props.title)}`} target="_blank" rel="noopener noreferrer">
Share on LinkedIn
</a>
</div>
);
}
*/

// 29
// FilterableList Component
const FilterableList = (props) => {
  const [filter, setFilter] = React.useState('');

  const filteredItems = props.items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="filterable-list">
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// 30
// CommentBox Component
const NewsletterSignup = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email to a server for subscription
  };

  return (
    <div className="newsletter-signup">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

// 31

// MapComponent Component
const MapComponent = (props) => {
  return (
    <div className="map-component">
      <iframe
        title="Google Map"
        src={`https://www.google.com/maps/@${props.longitude},${props.latitude},8z?entry=ttu;output=embed`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// 32
// Notification Component
const Notification = (props) => {
  return <div className={`notification ${props.type}`}>{props.message}</div>;
};

// 33
// AnimatedButton Component
const AnimatedButton = (props) => {
  return (
    <button className="animated-button">
      <span>{props.text1}</span>
      <span>{props.text2}</span>
      <span>{props.text3}</span>
    </button>
  );
};

// 34
// ProgressBar Component
const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${props.percentage}%` }}></div>
    </div>
  );
};

// 35
// SocialMediaIcons Component
const SocialMediaIcons = (props) => {
  return (
    <div className="social-media-icons">
      {props.links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab ${link.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

// 36
// TeamMember Component
const TeamMember = (props) => {
  return (
    <div className="team-member">
      <img src={props.imgUrl} alt={props.imgName} />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
};

// 37
// NewsletterArchive Component
const NewsletterArchive = (props) => {
  return (
    <div className="newsletter-archive">
      <h2>Newsletter Archive</h2>
      <ul>
        {props.newsletters.map((newsletter, index) => (
          <li key={index}>
            <a href={newsletter.url}>{newsletter.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 38
// StepIndicator Component
const StepIndicator = (props) => {
  return (
    <div className="step-indicator">
      {props.steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === props.currentStep ? 'active' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

// 39
// NotificationList Component
const NotificationList = (props) => {
  return (
    <div className="notification-list">
      {props.notifications.map((notification, index) => (
        <div key={index} className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

// 40
// CommentBox Component
const CommentBox = (props) => {
  return (
    <div className="comment-box">
      <h2>Comments</h2>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>
            <div className="comment-author">{comment.author}</div>
            <div className="comment-content">{comment.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 41
// FeatureHighlight Component
const FeatureHighlight = (props) => {
  return (
    <div className="feature-highlight">
      <div className="icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

// 42
// Timeline Component
const Timeline = (props) => {
  return (
    <div className="timeline">
      {props.events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="event-date">{event.date}</div>
          <div className="event-description">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

// 43
// PriceRangeFilter Component
const PriceRangeFilter = (props) => {
  return (
    <div className="price-range-filter">
      <input
        type="range"
        min={props.minPrice}
        max={props.maxPrice}
        onChange={props.onChange}
      />
      <div className="range-values">
        <span>{props.minPrice}</span>
        <span>{props.maxPrice}</span>
      </div>
    </div>
  );
};

// 44
// WeatherWidget Component
const WeatherWidget = (props) => {
  return (
    <div className="weather-widget">
      <h2>Weather in {props.city}</h2>
      <p>Temperature: {props.temperature}°C</p>
    </div>
  );
};

// 45
// AnimatedAccordion Component
const AnimatedAccordion = (props) => {
  const [activeSection, setActiveSection] = React.useState(null);

  return (
    <div className="animated-accordion">
      {props.sections.map((section, index) => (
        <div
          key={index}
          className={`section ${index === activeSection ? 'active' : ''}`}
          onClick={() =>
            setActiveSection(index === activeSection ? null : index)
          }
        >
          <div className="section-title">{section.title}</div>
          <div className="section-content">{section.content}</div>
        </div>
      ))}
    </div>
  );
};

// 46
// LanguageSelector Component
const LanguageSelector = (props) => {
  return (
    <div className="language-selector">
      <select
        value={props.selectedLanguage}
        onChange={(e) => props.onSelectLanguage(e.target.value)}
      >
        {props.languages.map((language, index) => (
          <option key={index} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// 47
// Ratings Component
const Ratings = (props) => {
  return (
    <div className="ratings">
      {Array.from({ length: props.rating }).map((_, index) => (
        <span key={index} className="star">
          ★
        </span>
      ))}
    </div>
  );
};

// 48
// ChatBox Component
const ChatBox = (props) => {
  const [newMessage, setNewMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the newMessage to the chat
    setNewMessage('');
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {props.messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-sender">{message.sender}</div>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

// 49
// CodeSnippet Component
const CodeSnippet = (props) => {
  return (
    <pre className="code-snippet">
      <code>{props.code}</code>
    </pre>
  );
};

// 50
// ImageSlider Component
const ImageSlider = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + props.images.length) % props.images.length
    );
  };

  return (
    <div className="image-slider">
      <img
        src={props.images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button onClick={goToPreviousImage}>Previous</button>
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};

// 51
// VideoBackground Component
const VideoBackground = (props) => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// 52
// QuizComponent Component
const QuizComponent = (props) => {
  return (
    <div className="quiz-component">
      <h3>{props.question}</h3>
      <ul>
        {props.options.map((option, index) => (
          <li key={index} onClick={() => props.onSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 53
/*
// PaymentForm Component
function PaymentForm() {
const [cardNumber, setCardNumber] = React.useState('');
const [expiryDate, setExpiryDate] = React.useState('');
const [cvv, setCvv] = React.useState('');
const handleSubmit = (e) => {
e.preventDefault();
// Process payment information
};
return (
<div className="payment-form">
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Card Number" value={cardNumber} onChange={(e)
=> setCardNumber(e.target.value)} />
<input type="text" placeholder="Expiry Date" value={expiryDate} onChange={(e) =>
setExpiryDate(e.target.value)} />
<input type="text" placeholder="CVV" value={cvv} onChange={(e) =>
setCvv(e.target.value)} />
<button type="submit">Pay Now</button>
</form>
</div>
);
}
*/

// 54
// StarRating Component
const StarRating = (props) => {
  const stars = Array.from({ length: props.maxRating }, (_, index) => (
    <span
      key={index}
      className={`star ${index < props.rating ? 'filled' : ''}`}
    >
      ★
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

// 55
// ScrollToTopButton Component
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      Scroll to Top
    </button>
  );
};

// 56
// Countdown Component
const Countdown = (props) => {
  const calculateTimeLeft = () => {
    const difference = new Date(props.targetDate) - new Date();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div>
        <div>{timeLeft.days}</div>
        <div>Days</div>
      </div>
      <div>
        <div>{timeLeft.hours}</div>
        <div>Hours</div>
      </div>
      <div>
        <div>{timeLeft.minutes}</div>
        <div>Minutes</div>
      </div>
      <div>
        <div>{timeLeft.seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
};

// 57
// AudioPlayer Component
const AudioPlayer = (props) => {
  return (
    <div className="audio-player">
      <audio controls>
        <source src={props.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

// 58
// ColorPicker Component
const ColorPicker = (props) => {
  return (
    <div className="color-picker">
      {props.colors.map((color, index) => (
        <div
          key={index}
          className={`color ${color === props.selectedColor ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => props.onSelectColor(color)}
        ></div>
      ))}
    </div>
  );
};

// 59
// Carousel Component
const Carousel = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + props.images.length) % props.images.length
    );
  };

  return (
    <div className="carousel">
      <img
        src={props.images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button onClick={goToPreviousImage}>Previous</button>
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};

// 60
// CountdownBadge Component
const CountdownBadge = (props) => {
  const calculateTimeLeft = () => {
    const difference = new Date(props.targetDate) - new Date();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return days;
  };

  const daysLeft = calculateTimeLeft();

  return (
    <div className="countdown-badge">
      {daysLeft > 0 ? `${daysLeft} days left` : 'Hurry, it ends today!'}
    </div>
  );
};

// 61
// CarouselSlider Component
const CarouselSlider = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextItem = () => {
    setCurrentIndex((currentIndex + 1) % props.items.length);
  };

  const goToPreviousItem = () => {
    setCurrentIndex(
      (currentIndex - 1 + props.items.length) % props.items.length
    );
  };

  return (
    <div className="carousel-slider">
      <div className="slider-content">
        <img
          src={props.items[currentIndex].image}
          alt={props.items[currentIndex].title}
        />
        <h3>{props.items[currentIndex].title}</h3>
        <p>{props.items[currentIndex].description}</p>
      </div>
      <div className="slider-controls">
        <button onClick={goToPreviousItem}>Previous</button>
        <button onClick={goToNextItem}>Next</button>
      </div>
    </div>
  );
};

// 62
// VideoPlaylist Component
const VideoPlaylist = (props) => {
  return (
    <div className="video-playlist">
      {props.videos.map((video, index) => (
        <div
          key={index}
          className="video-item"
          onClick={() => props.onVideoSelect(video)}
        >
          <img src={video.thumbnail} alt={video.title} />
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

// 63
// TabbedContent Component
const TabbedContent = (props) => {
  return (
    <div className="tabbed-content">
      <ul className="tab-list">
        {props.tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${tab.id === props.activeTab ? 'active' : ''}`}
            onClick={() => props.onTabChange(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {props.tabs.find((tab) => tab.id === props.activeTab)?.content}
      </div>
    </div>
  );
};

// 64
// NotificationBadge Component
const NotificationBadge = (props) => {
  return (
    <div className="notification-badge">
      {props.count > 0 && <div className="count">{props.count}</div>}
      <i className="fas fa-bell"></i>
    </div>
  );
};

// 65
// FilterableTable Component
const FilterableTable = (props) => {
  const [filter, setFilter] = React.useState('');

  const filteredData = props.data.filter((item) =>
    props.columns.some((column) =>
      item[column].toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className="filterable-table">
      <input
        type="text"
        placeholder="Filter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {props.columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {props.columns.map((column) => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 66
// ProgressBarWithLabel Component
const ProgressBarWithLabel = (props) => {
  return (
    <div className="progress-bar-with-label">
      <div className="label">Progress: {props.progress}%</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${props.progress}%` }}></div>
      </div>
    </div>
  );
};

// 67
// ToggleSwitch Component
const ToggleSwitch = (props) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={props.value} onChange={props.onChange} />
      <span className="slider"></span>
    </label>
  );
};

// 68
// TagList Component
const TagList = (props) => {
  return (
    <div className="tag-list">
      {props.tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

// 69
// TimelineChart Component
const TimelineChart = (props) => {
  return (
    <div className="timeline-chart">
      <ul>
        {props.data.map((entry, index) => (
          <li key={index}>
            <div className="date">{entry.date}</div>
            <div className="event">{entry.event}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 70
// ReviewCard Component
const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <div className="rating">{props.rating} stars</div>
        <p>{props.text}</p>
      </div>
      <div className="review-author">
        <img src={props.authorAvatar} alt={props.authorName} />
        <p>{props.authorName}</p>
      </div>
    </div>
  );
};

// ... Define other components similarly
export {
  Header,
  Footer,
  NavigationMenu,
  HeroSection,
  CallToAction,
  Testimonials,
  ContactForm,
  ProductCard,
  //ProductCards,
  BlogPost,
  Sidebar,
  Modal,
  ErrorAlert,
  LoadingSpinner,
  VideoPlayer,
  SearchBar,
  Pagination,
  InteractiveTabs,
  Accordion,
  ImageGallery,
  ProgressIndicator,
  CountdownTimer,
  ModalGallery,
  FilterableList,
  NewsletterSignup,
  MapComponent,
  Notification,
  AnimatedButton,
  ProgressBar,
  SocialMediaIcons,
  TeamMember,
  NewsletterArchive,
  StepIndicator,
  NotificationList,
  CommentBox,
  FeatureHighlight,
  Timeline,
  PriceRangeFilter,
  WeatherWidget,
  AnimatedAccordion,
  LanguageSelector,
  Ratings,
  ChatBox,
  CodeSnippet,
  ImageSlider,
  VideoBackground,
  QuizComponent,
  //PaymentForm,
  StarRating,
  ScrollToTopButton,
  Countdown,
  AudioPlayer,
  ColorPicker,
  Carousel,
  CountdownBadge,
  CarouselSlider,
  VideoPlaylist,
  TabbedContent,
  NotificationBadge,
  FilterableTable,
  ProgressBarWithLabel,
  ToggleSwitch,
  TagList,
  TimelineChart,
  ReviewCard,
  PricingTable,
  // ... Add other components here
};
