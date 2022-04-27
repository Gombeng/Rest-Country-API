import React from 'react';
import Card from '../component/Card';
import { Container } from './Global.component';
import Search from './../component/Search';

const Home = () => {
	return (
		<div>
			<Search />

			<Container>
				<Card
					flagImg="https://duckduckgo.com/i/65032114.png"
					alt="America"
					name="United States of America"
					population="123.123.123"
					region="Americas"
					capital="Washington, D.C."
				/>
				<Card
					flagImg="https://duckduckgo.com/i/65032114.png"
					alt="America"
					name="United States of America"
					population="123.123.123"
					region="Americas"
					capital="Washington, D.C."
				/>
				<Card
					flagImg="https://duckduckgo.com/i/65032114.png"
					alt="America"
					name="United States of America"
					population="123.123.123"
					region="Americas"
					capital="Washington, D.C."
				/>
			</Container>
		</div>
	);
};

export default Home;
