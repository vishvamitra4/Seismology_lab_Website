import React from "react";
import ContactForm from "./Components/ContactForm"
import ImageSlider from "./Components/ImageSlider"
import WelcomePage from "./Components/WelcomePage"
import NewsletterSlider from "./Components/NewsletterSlider"
import Footer from "./Components/Footer"

function IndexPage()
{
    return(
        <div>
            <ImageSlider />
            <WelcomePage />
            <NewsletterSlider />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default IndexPage;