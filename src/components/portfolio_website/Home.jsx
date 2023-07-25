import React from 'react';
import HeroSection from './reusables/HeroSection';

const Home = () => {
	const data = {
		name: 'Rithick Chowdhury',
		image: '',
	};
	return <HeroSection {...data} />;
};

export default Home;
