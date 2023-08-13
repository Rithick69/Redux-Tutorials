import React from 'react';
// import { clearAll } from '../../../store_TK/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { clearAll } from '../../../store_TK/actions';

const DeleteAllUser = () => {
	const dispatch = useDispatch();

	const deleteAll = () => {
		dispatch(clearAll());
	};
	return (
		<Wrapper>
			<button className="btn clear-btn" onClick={deleteAll}>
				clear todos
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.clear-btn {
		text-transform: capitalize;
		background-color: #db338a;
		margin-top: 2rem;
	}
`;

export default DeleteAllUser;
