import React, { useEffect } from 'react';
import HeroSection from './reusables/HeroSection';
import { aboutHero } from '../../actions';
import { useDispatch } from 'react-redux';

const About = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			aboutHero({
				name: 'About Page',
				image: '',
			})
		);
	}, [dispatch]);
	return (
		<>
			<HeroSection />
		</>
	);
};

export default About;
