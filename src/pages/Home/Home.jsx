import React from 'react';
import Banner from './Banner';
import SuccessStories from './SuccessStories';
import Faq from './Faq';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Categories from './Categories';
import Eligibility from './Eligibility';
import Statistics from './Statistics';
import CallToAction from './CallToAction';
import PartnerAcademy from './PartnerAcademy';
import FeaturedTalentHunts from './FeaturedTalentHunts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <FeaturedTalentHunts></FeaturedTalentHunts>
            <HowItWorks></HowItWorks>
            <Categories></Categories>
            <Eligibility></Eligibility>
            <SuccessStories></SuccessStories>
            <Statistics></Statistics>
            <PartnerAcademy></PartnerAcademy>
            <Faq></Faq>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;