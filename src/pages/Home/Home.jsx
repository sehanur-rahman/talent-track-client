import React from 'react';
import Banner from './Banner';
import TopScholarships from './TopScholarships';
import SuccessStories from './SuccessStories';
import Faq from './Faq';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Categories from './Categories';
import Eligibility from './Eligibility';
import Statistics from './Statistics';
import CallToAction from './CallToAction';
import PartnerCountries from './PartnerCountries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <TopScholarships></TopScholarships>
            <HowItWorks></HowItWorks>
            <Categories></Categories>
            <Eligibility></Eligibility>
            <SuccessStories></SuccessStories>
            <Statistics></Statistics>
            <PartnerCountries></PartnerCountries>
            <Faq></Faq>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;