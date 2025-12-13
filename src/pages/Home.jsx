import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBanner from '../components/TrustBanner';
import HowItWorks from '../components/HowItWorks';
import DataSources from '../components/DataSources';
import SymptomsOverview from '../components/SymptomsOverview';
import CancerTypes from '../components/CancerTypes';
import RiskScore from '../components/RiskScore';
import DoctorAdvice from '../components/DoctorAdvice';
import Limitations from '../components/Limitations';
import EthicalAI from '../components/EthicalAI';
import Privacy from '../components/Privacy';
import Disclaimer from '../components/Disclaimer';

const Home = () => {
    return (
        <>
            <HeroSection />
            <TrustBanner />
            <HowItWorks />
            <DataSources />
            <SymptomsOverview />
            <CancerTypes />
            <RiskScore />
            <DoctorAdvice />
            <Limitations />
            <EthicalAI />
            <Privacy />
            <Disclaimer />
        </>
    );
};

export default Home;