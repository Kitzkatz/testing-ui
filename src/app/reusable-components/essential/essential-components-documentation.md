Button

    <Button onClick={handleClick} style={style1} text={strings} />

Input

    <Input onChange={handleClick} placeholderText={strings} value={strings1} />

Textarea

    <Textarea onChange={handleClick} placeholderText={strings} value={strings1} />

Checkbox

    <Checkbox onChange={handleClick} checked={false} label={strings} />

RadioButton

    <RadioButton onChange={handleClick} checked={false} label={strings} />

Select

Modal

    <Modal onClose={handleClick} isOpen={true} />

Navbar

    <Navbar feature1={strings} feature2={strings1} feature3={strings2} />

Header

    <Header title={strings} description={strings1} description2={strings2} />

Footer

    <Footer />

Alert

    <Alert type={strings} message={strings1} />

LoadingSpinner

    <LoadingSpinner />

ErrorMessage

    <ErrorMessage message={strings} />

Pagination

    <Pagination />

Card

    <Card image={strings} imgTitle={strings1} title={strings2} description={strings2} />

Sidebar

     <Sidebar />

MainContent

    <MainContent children={contentMock} />
