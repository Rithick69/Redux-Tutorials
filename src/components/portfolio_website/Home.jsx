import React, { useEffect } from 'react';
import HeroSection from './reusables/HeroSection';
import { useDispatch } from 'react-redux';
import { homeHero } from '../../actions';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			homeHero({
				name: 'Rithick Chowdhury',
				image: '',
			})
		);
	}, [dispatch]);

	return (
		<>
			<HeroSection />
			<Services />
			<Contact />
		</>
	);
};

export default Home;
