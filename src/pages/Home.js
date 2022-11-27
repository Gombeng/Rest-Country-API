import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
	const apiUrlV2 = 'https://restcountries.com/v2/';
	const [country, setCountry] = useState([]);

	console.log(country);
	useEffect(() => {
		const getAllCountry = async () => {
			await axios
				.get(`${apiUrlV2}/all`)
				.then((data) => {
					console.log(data.data.slice(0, 10));
					setCountry(data.data);
				})
				.catch((err) => console.log(err));
		};

		getAllCountry();
	}, []);

	return (
		<Container>
			<div className="navbar">
				<h2>Where in the world?</h2>
				<div className="theme-switch">Mode</div>
			</div>
			<div className="home">
				<div className="toolbar">
					<div className="search">
						<input type="text" placeholder="Search for a country..." />
					</div>
					<div className="filter">
						<select>
							<option value="1">Filter by Religion</option>
							<option value="1">Asia</option>
							<option value="1">America</option>
						</select>
					</div>
				</div>

				<div className="card-container">
					{country
						?.slice(0, 8)
						.map(({ name, area, flags, population, region = '-', capital }) => (
							<Link key={area} to={`${name}`}>
								<div className="card">
									<img src={flags.png} alt={name} />
									<div className="card-body">
										<h3>{name}</h3>
										<p>
											Population: <span>{population}</span>
										</p>
										<p>
											Region: <span>{region}</span>
										</p>
										<p>
											Capital: <span>{capital}</span>
										</p>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	/* styling here */
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 10vh;
		box-shadow: 1px 1px 10px black;
		margin-bottom: 1rem;
	}

	.home {
		.toolbar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 10vh;
			box-shadow: 1px 1px 10px black;
			margin-bottom: 1rem;

			.search {
				input {
					all: unset;
					background-color: rgba(0, 0, 0, 0.151);
					padding: 0.8rem 1rem;
					border-radius: 0.3rem;
				}
			}

			.filter {
				select {
					outline: none;
					border: none;
					cursor: pointer;
					background-color: rgba(0, 0, 0, 0.151);
					padding: 0.8rem 1rem;
					border-radius: 0.3rem;

					option {
						/* still doesn't know how to style option */
					}
				}
			}
		}
		.card-container {
			margin: 1rem;

			a {
				/* display: none; */
				text-decoration: none;
				color: black;
			}

			.card {
				/* width: 100%; */
				max-width: 300px;
				border: 1px solid black;
				margin: 1rem auto;

				img {
					width: 100%;
				}

				.card-body {
					padding: 1rem;

					h3 {
						margin-bottom: 1rem;
					}

					p {
						margin-bottom: 0.5rem;
					}
				}
			}
		}
	}
`;
