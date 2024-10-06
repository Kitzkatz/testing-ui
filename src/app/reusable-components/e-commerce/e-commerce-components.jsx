/* 41 e-commerce components
 */

'use client';

import React from 'react';
//import "./e-commerce-components.css"

// 1

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.imgName} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>
      <button onClick={() => props.onAddToCart(props.product)}>
        Add to Cart
      </button>
    </div>
  );
};

// 2

// import ProductCard from './ProductCard';

const ProductList = (props) => {
  return (
    <div className="product-list">
      {props.products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={props.onAddToCart}
        />
      ))}
    </div>
  );
};

// 3

const CartSidebar = (props) => {
  return (
    <div className="cart-sidebar">
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item.id}>
            <div className="item-details">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
            <button onClick={() => props.onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="checkout-button" onClick={props.onCheckout}>
        Checkout
      </button>
    </div>
  );
};

// 4

const CheckoutForm = (props) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
      >
        <option value="">Select Payment Method</option>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      <button type="submit">Place Order</button>
    </form>
  );
};

// 5

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// 6

const FilterSidebar = (props) => {
  return (
    <div className="filter-sidebar">
      <h3>Categories</h3>
      <ul>
        {props.categories.map((category) => (
          <li
            key={category.id}
            className={category.id === props.selectedCategory ? 'active' : ''}
            onClick={() => props.onCategoryChange(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 7

const SortDropdown = (props) => {
  return (
    <div className="sort-dropdown">
      <select
        value={props.selectedOption}
        onChange={(e) => props.onOptionChange(e.target.value)}
      >
        {props.sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// 8

const RatingAndReviews = (props) => {
  return (
    <div className="rating-and-reviews">
      <div className="ratings">
        <h3>Product Ratings</h3>
        <p>
          Average Rating: {props.calculateAverageRating(props.productRatings)}
        </p>
        {/* Display stars or other visual indicators for each rating */}
      </div>
      <div className="reviews">
        <h3>Product Reviews</h3>
        <ul>
          {props.productReviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 9

const Wishlist = (props) => {
  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <ul>
        {props.wishlistItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => props.onRemoveFromWishlist(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 10

const FeaturedProducts = (props) => {
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {props.featuredProducts.map((product) => (
          <div className="featured-product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 11

const RelatedProducts = (props) => {
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="product-list">
        {props.relatedProducts.map((product) => (
          <div className="related-product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 12

const UserAccount = (props) => {
  return (
    <div className="user-account">
      <h2>Welcome, {props.name}!</h2>
      <p>Email: {props.email}</p>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
};

// 13

const OrderHistory = (props) => {
  return (
    <div className="order-history">
      <h2>Order History</h2>
      <ul>
        {props.orders.map((order) => (
          <li key={order.id}>
            <div className="order-details">
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total}</p>
            </div>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 14

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

// 15

const ShippingTracker = (props) => {
  // Use external API to fetch shipping status based on tracking number
  const shippingStatus = props.fetchShippingStatus(props.trackingNumber);

  return (
    <div className="shipping-tracker">
      <h2>Shipping Tracker</h2>
      <p>Tracking Number: {props.trackingNumber}</p>
      <p>Status: {shippingStatus}</p>
    </div>
  );
};

// 16

const PromotionsBanner = (props) => {
  return (
    <div className="promotions-banner">
      <p>{props.message}</p>
    </div>
  );
};

// 17

const RecentlyViewed = (props) => {
  return (
    <div className="recently-viewed">
      <h2>Recently Viewed</h2>
      <div className="product-list">
        {props.viewedProducts.map((product) => (
          <div className="viewed-product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 18

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

// 19

const NotificationBadge = (props) => {
  return (
    <div className="notification-badge">
      {props.count > 0 && <div className="count">{props.count}</div>}
      <i className="fas fa-bell"></i>
    </div>
  );
};

// 20

const OrderSummary = (props) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item.id}>
            <div className="item-details">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
      <div className="summary-details">
        <p>Subtotal: ${props.calculateSubtotal(props.cartItems)}</p>
        <p>Shipping: ${props.shippingCost}</p>
        <p>Total: ${props.totalAmount}</p>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

// 21

const ImageGallery = (props) => {
  return (
    <div className="image-gallery">
      {props.images.map((image, index) => (
        <img key={index} src={image.url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

// 22

const TestimonialSlider = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % props.testimonials.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + props.testimonials.length) % props.testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <p>{props.testimonials[currentSlide].content}</p>
        <p className="author">{props.testimonials[currentSlide].author}</p>
      </div>
      <div className="slider-controls">
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

// 23

const ShippingOptions = (props) => {
  return (
    <div className="shipping-options">
      <h2>Shipping Options</h2>
      <ul>
        {props.options.map((option) => (
          <li key={option.id}>
            <label>
              <input
                type="radio"
                value={option.id}
                checked={props.selectedOption === option.id}
                onChange={() => props.onOptionChange(option.id)}
              />
              {option.label} - ${option.price}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 24

const DiscountBanner = (props) => {
  return (
    <div className="discount-banner">
      <p>Get {props.discountPercentage}% off on selected items!</p>
      <button>Shop Now</button>
    </div>
  );
};

// 25

const CartIcon = (props) => {
  return (
    <div className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      {props.itemCount > 0 && (
        <span className="item-count">{props.itemCount}</span>
      )}
    </div>
  );
};

// 26

const ProductCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % props.products.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + props.products.length) % props.products.length
    );
  };

  return (
    <div className="product-carousel">
      <div className="carousel-content">
        <img
          src={props.products[currentIndex].image}
          alt={props.products[currentIndex].name}
        />
        <h3>{props.products[currentIndex].name}</h3>
        <p>${props.products[currentIndex].price}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

// 27

const QuickViewModal = (props) => {
  return (
    <div className="quick-view-modal">
      <div className="modal-content">
        <img src={props.image} alt={props.imgName} />
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <p>{props.description}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

// 28

const RecentlyPurchased = (props) => {
  return (
    <div className="recently-purchased">
      <h2>Recently Purchased</h2>
      <div className="product-list">
        {props.purchasedItems.map((item) => (
          <div className="purchased-product" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 29

const ProductRating = (props) => {
  return (
    <div className="product-rating">
      <i className={`fas fa-star ${props.rating >= 1 ? 'active' : ''}`}></i>
      <i className={`fas fa-star ${props.rating >= 2 ? 'active' : ''}`}></i>
      <i className={`fas fa-star ${props.rating >= 3 ? 'active' : ''}`}></i>
      <i className={`fas fa-star ${props.rating >= 4 ? 'active' : ''}`}></i>
      <i className={`fas fa-star ${props.rating >= 5 ? 'active' : ''}`}></i>
    </div>
  );
};

// 30

const EmptyCartMessage = () => {
  return (
    <div className="empty-cart-message">
      <p>Your cart is currently empty.</p>
      <button>Start Shopping</button>
    </div>
  );
};

// 31

const AddressForm = (props) => {
  const [address, setAddress] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(address);
  };

  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Save Address</button>
    </form>
  );
};

// 32

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props.children);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <p>Oops! Something went wrong.</p>;
    }

    return this.props.children;
  }
}

//  33

const ColorVariants = (props) => {
  return (
    <div className="color-variants">
      <h2>Color Variants</h2>
      <ul>
        {props.colors.map((color) => (
          <li
            key={color.id}
            className={color.id === props.selectedColor ? 'active' : ''}
            onClick={() => props.onColorChange(color.id)}
          >
            <div
              className="color-circle"
              style={{ backgroundColor: color.hexCode }}
            ></div>
            <p>{color.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 34

const SizeVariants = (props) => {
  return (
    <div className="size-variants">
      <h2>Size Variants</h2>
      <ul>
        {props.sizes.map((size) => (
          <li
            key={size.id}
            className={size.id === props.selectedSize ? 'active' : ''}
            onClick={() => props.onSizeChange(size.id)}
          >
            <p>{size.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 35

const CurrencySelector = (props) => {
  return (
    <div className="currency-selector">
      <select
        value={props.selectedCurrency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

// 36

const BulkOrderForm = (props) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(quantity);
  };

  return (
    <form className="bulk-order-form" onSubmit={handleSubmit}>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

// 37

const GiftCardBalance = (props) => {
  return (
    <div className="gift-card-balance">
      <h2>Gift Card Balance</h2>
      <p>Your current balance: ${props.balance}</p>
      <button>Redeem Gift Card</button>
    </div>
  );
};

// 38

const RecommendedProducts = (props) => {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <div className="product-list">
        {props.products.map((product) => (
          <div className="recommended-product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 39

const BundleOffer = (props) => {
  return (
    <div className="bundle-offer">
      <h2>Bundle Offer</h2>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      <p>Total Price: ${props.totalPrice}</p>
      <button>Add to Cart</button>
    </div>
  );
};

// 40

const InteractiveColorPicker = (props) => {
  const handleColorChange = (selectedColor) => {
    props.onColorChange(selectedColor);
  };

  return (
    <div className="interactive-color-picker">
      <h2>Color Picker</h2>
      <div className="color-options">
        <div
          className="color-option"
          style={{ backgroundColor: 'red' }}
          onClick={() => handleColorChange('red')}
        ></div>
        <div
          className="color-option"
          style={{ backgroundColor: 'blue' }}
          onClick={() => handleColorChange('blue')}
        ></div>
        <div
          className="color-option"
          style={{ backgroundColor: 'green' }}
          onClick={() => handleColorChange('green')}
        ></div>
        {/* Add more color options */}
      </div>
    </div>
  );
};
export {
  ProductCard,
  ProductList,
  CartSidebar,
  CheckoutForm,
  SearchBar,
  FilterSidebar,
  SortDropdown,
  RatingAndReviews,
  Wishlist,
  FeaturedProducts,
  RelatedProducts,
  UserAccount,
  OrderHistory,
  Footer,
  ShippingTracker,
  PromotionsBanner,
  RecentlyViewed,
  ScrollToTopButton,
  NotificationBadge,
  OrderSummary,
  ImageGallery,
  TestimonialSlider,
  ShippingOptions,
  DiscountBanner,
  CartIcon,
  ProductCarousel,
  QuickViewModal,
  RecentlyPurchased,
  ProductRating,
  EmptyCartMessage,
  AddressForm,
  ErrorBoundary,
  ColorVariants,
  SizeVariants,
  CurrencySelector,
  BulkOrderForm,
  GiftCardBalance,
  RecommendedProducts,
  BundleOffer,
  InteractiveColorPicker,
};
