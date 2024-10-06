This is the documentation inside here you will find all component calls
to the components in the library. Order of variables doesn't matter so long
as you have the important ones everything should render fine.

Alongside the components you will also find types for the props clearly stated
inside each element call which is how each element is called.
As well as any other relevant information i can provide regarding the components
and their functionality

As always flavor with your favorite css.. it should work anyway

SimpleBanner,

    <SimpleBanner title={strings} description={strings1} />


        Types:
            title is string is <h2>
            description is string is <p>



        Description:
            This is a simple banner for general use, it provides a title to an
            <h2> element and a description to a <p> element.

ImageBanner,

    <ImageBanner imageUrl={strings} altText={strings1} />


        Types:
            imageUrl is string is src
            altText is string is alt



        Description:
            This is a simple image banner, which is basically saying its an
            <img> element inside a div. It provides imageUrl as a src value
            and altText and an alt value.

PromoBanner,

    <PromoBanner title={strings} message={strings1} promocode={strings2} />


        Types:
            title is string is <h2>
            message is string is <p>
            promoCode is string is <p>


        Description:
            This is a simple promo banner for discounts. It provides title as an
            <h2> element, message as a <p> element and promoCode as a <p> element.
            the promoCode variable will be concatenated to the string
            "Promo code: "

VideoBanner,

    <VideoBanner videoUrl={strings} />


        Types:
            videoUrl

CustomBanner,

    <CustomBanner children={contentMock} />

CountdownBanner,

    <CountdownBanner endDate={'4-22-2030'} />

ActionBanner,

    <ActionBanner onClick={handleClick} title={strings} buttonText={strings1} />

AlertBanner,

    <AlertBanner type={'division of zero'} message={'you divided by zero'} />

FeaturedBanner,

    <FeaturedBanner title={strings} imageUrl={strings1} imgTitle={strings2} />

SlideshowBanner,

    <SlideshowBanner images={optionsMock1} />

CarouselBanner,

    <CarouselBanner images={optionsMock1} />

SaleBanner,

    <SaleBanner endDate={'4-22-2030'} discount={10} />

FeatureComparisonBanner,

    <FeatureComparisonBanner features={optionsMock1} />

CallToActionBanner,

    <CallToActionBanner onClick={handleClick} title={strings} description={strings1} actionText={strings2} />

EventBanner,

    <EventBanner date={"4-22-2030"} eventName={'beans 8th birthday'} location={strings1} />

GradientBanner,

    <GradientBanner title={strings} subtitle={strings1} gradientColors={''} gradientStyle={''} />

ProductFeatureBanner,

    <ProductFeatureBanner icon={strings} feature={strings1} />

VideoBackgroundBanner,

    <VideoBackgroundBanner videoUrl={strings} />

NotificationBanner,

    <NotificationBanner onClose={handleClose} message={strings} />

AnimatedBanner,

    <AnimatedBanner animationType={strings} content={strings1} />

TestimonialBanner,

    <TestimonialBanner quote={strings} author={strings1} position={strings2} />

InfoBanner,

    <InfoBanner title={strings1} content={contentMock} />

HolidayBanner,

    <HolidayBanner occasion={strings} message={strings1} />

CallToActionImageBanner,

    <CallToActionImageBanner onClick={handleClick} imageUrl={strings} altText={strings1} actionText={strings2} />

AnnouncementBanner,

    <AnnouncementBanner announcement={strings} />

NotificationBar,

    <NotificationBar onClose={handleClose} type={strings} message={strings1} />

SeasonalBanner,

    <SeasonalBanner season={strings} message={strings1} />

CallToActionVideoBanner,

    <CallToActionVideoBanner onClick={handleClick} videoUrl={strings} actionText={strings1} />

QuoteBanner,

    <QuoteBanner quote={strings} author={strings1} />

FeatureHighlightBanner,

    <FeatureHighlightBanner icon={strings} title={strings1} description={strings2} />
