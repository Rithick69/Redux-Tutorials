import React from 'react';
import { styled } from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
	const Wrapper = styled.section`
		padding: 9rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.btn {
			margin-top: 3rem;
			font-size: 1.8rem;
		}

		img {
			max-width: 20%;
		}
	`;
	return (
		<Wrapper>
			<img
				src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=740&t=st=1690740800~exp=1690741400~hmac=19305a767ccdee5ffa91f0e6f962cd526b02f24dc84b51adde49d0c0357c0bcd"
				alt="error"
			/>
			<NavLink to="/">
				<Button className="btn">Go Back</Button>
			</NavLink>
		</Wrapper>
	);
};

export default Error;
