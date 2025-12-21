import React from 'react';
import Banner from './Banner';
import TopScholarships from './TopScholarships';
import SuccessStories from './SuccessStories';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarships></TopScholarships>
            <SuccessStories></SuccessStories>
            <Faq></Faq>
        </div>
    );
};

export default Home;