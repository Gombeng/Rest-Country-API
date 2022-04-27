import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 280px;
	font-size: 14px;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const CardDesc = styled.div`
	padding: 1.5rem 1.5rem 3rem;
`;

const Card = (props) => {
	return (
		<CardContainer>
			<img src={props.flagImg} alt={props.alt} />
			<CardDesc>
				<h3 style={{ marginBottom: '1rem' }}>{props.name}</h3>
				<p style={{ marginBottom: '.5rem' }}>
					<span className="sub-title">Population:</span> {props.population}
				</p>
				<p style={{ marginBottom: '.5rem' }}>
					<span className="sub-title">Region:</span> {props.region}
				</p>
				<p>
					<span className="sub-title">Capital:</span> {props.capital}
				</p>
			</CardDesc>
		</CardContainer>
	);
};

export default Card;
