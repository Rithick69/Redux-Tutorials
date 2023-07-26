import React, { useEffect } from 'react';
import HeroSection from './reusables/HeroSection';
import { useDispatch } from 'react-redux';
import { homeHero } from '../../actions';

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

	return <HeroSection />;
};

export default Home;
