import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../../../store_TK/slices/UserSlice';

const DisplayUserData = () => {
	// Here the param store represents the complete store data.
	// We can select the reducer we want to access the state of from here.
	const { data, isLoading } = useSelector((store) => {
		console.log(store.users.data);
		return store.users;
	});

	const dispatch = useDispatch();

	const deleteUser = (id) => {
		dispatch(removeUser(id));
	};
	if (!isLoading) {
		return (
			<Wrapper>
				{data &&
					data.map((user, id) => {
						return (
							<li key={id}>
								{user}
								<button className="btn-delete" onClick={() => deleteUser(id)}>
									<MdDeleteForever className="delete-icon" />
								</button>
							</li>
						);
					})}
			</Wrapper>
		);
	}
};

const Wrapper = styled.section`
	li {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: 1px solid #eee;

		&:first-child {
			border-top: 1px solid #eee;
		}
	}

	.btn-delete {
		background-color: transparent;
		border: 0;
		color: #fff;
	}
`;

export default DisplayUserData;
