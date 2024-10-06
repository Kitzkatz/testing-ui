//ProductCard,

<ProductCard image={''} imgName={''} name={''} price={''} />

ProductList,

<ProductList products={optionsMock1} />

CartSidebar,

<CartSidebar onCheckout={handleClose} onRemoveFromCart={handleClose} cartItems={optionsMock1} />

CheckoutForm,

<CheckoutForm />

//SearchBar,

<SearchBar />

FilterSidebar,

<FilterSidebar onCategoryChange={handleClose} categories={optionsMock1} />

SortDropdown,

<SortDropdown sortOptions={optionsMock1} selectedOption={handleClick} />

RatingAndReviews,

<RatingAndReviews productRatings={''} productReviews={optionsMock1} calculateAverageRating={handleClick} />

Wishlist,

<Wishlist onRemoveFromWishlist={handleClose} wishlistItems={optionsMock1} />

FeaturedProducts,

<FeaturedProducts featuredProducts={optionsMock1} />

RelatedProducts,

<RelatedProducts relatedProducts={optionsMock1} />

UserAccount,

<UserAccount onLogout={handleClose} name={''} email={''} />

OrderHistory,

<OrderHistory orders={optionsMock1} />

//Footer,

<footer />

ShippingTracker,

<ShippingTracker trackingNumber={''} fetchShippingStatus={handleClick} />

PromotionsBanner,

<PromotionsBanner message={strings} />

RecentlyViewed,

<RecentlyViewed viewedProducts={optionsMock1} />

//ScrollToTopButton,

<ScrollToTopButton />

//NotificationBadge,

<NotificationBadge count={strings} />

OrderSummary,

<OrderSummary cartItems={optionsMock1} shippingCost={strings} totalAmount={strings1} calculateSubtotal={handleClick} />

//ImageGallery,

<ImageGallery images={optionsMock1} />

TestimonialSlider,

<TestimonialSlider testimonials={optionsMock1} />

ShippingOptions,

<ShippingOptions onOptionChange={handleClick} options={optionsMock1} />

DiscountBanner,

<DiscountBanner discountPercentage={strings} />

CartIcon,

<CartIcon itemCount={strings} />

ProductCarousel,

<ProductCarousel products={optionsMock1} />

QuickViewModal,

<QuickViewModal onClose={handleClose} image={strings} imgName={strings1} name={strings2} price={strings2} description={strings2} />

RecentlyPurchased,

<RecentlyPurchased purchasedItems={optionsMock1} />

ProductRating,

<ProductRating rating={strings} />

EmptyCartMessage,

<EmptyCartMessage />

AddressForm,

<AddressForm />

//ErrorBoundary,

<ErrorBoundary />

ColorVariants,

<ColorVariants onColorChange={handleClick} colors={optionsMock1} />

SizeVariants,

<SizeVariants onSizeChange={handleClick} selectedSize={strings} sizes={optionsMock1} />

CurrencySelector,

<CurrencySelector onCurrencyChange={handleClick} selectedCurrency={handleClick} currencies={optionsMock1} />

BulkOrderForm,

<BulkOrderForm />

GiftCardBalance,

<GiftCardBalance balance={strings} />

RecommendedProducts,

<RecommendedProducts products={optionsMock1} />

BundleOffer,

<BundleOffer products={optionsMock1} />

InteractiveColorPicker

<InteractiveColorPicker onColorChange={handleClick} />
