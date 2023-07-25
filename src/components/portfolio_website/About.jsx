import React from 'react';
import HeroSection from './reusables/HeroSection';

const About = () => {
	const data = {
		name: 'About page',
		image: '',
	};
	return (
		<>
			<HeroSection {...data} />
		</>
	);
};

export default About;
