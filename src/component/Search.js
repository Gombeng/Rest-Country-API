import React from 'react';
import styled from 'styled-components';
import { Container } from '../pages/Global.component';

const Input = styled.input`
	all: unset;
	padding: 1.3rem;
	font-size: 0.7rem;
	border-radius: 0.3rem;
	color: hsl(0, 0%, 52%);
	background-color: hsl(0, 0%, 100%);
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Search = () => {
	return (
		<Container>
			<Input type="text" placeholder="Search for a country..." />
			<button>filter</button>
		</Container>
	);
};

export default Search;
