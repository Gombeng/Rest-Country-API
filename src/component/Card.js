import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Card = () => {
	return (
		<Container>
			<img src="https://duckduckgo.com/i/65032114.png" alt="" />
			<h3>United States of America</h3>
			<p>Population: 412.234.001</p>
			<p>Region: Americas</p>
			<p>Capital: Washington, D.C.</p>
		</Container>
	);
};

export default Card;
