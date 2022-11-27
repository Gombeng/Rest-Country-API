import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
	const apiUrlV2 = 'https://restcountries.com/v2/';
	const [country, setCountry] = useState([]);

	useEffect(() => {
		const getAllCountry = async () => {
			await axios
				.get(`${apiUrlV2}/all`)
				.then((data) => {
					// console.log(data.data);
					setCountry(data.data);
				})
				.catch((err) => console.log(err));
		};

		getAllCountry();
	}, []);

	return (
		<Container>
			<p className="alert">Sorry, the app is still in dev :(</p>
			<div className="navbar">
				<h2>Where in the world?</h2>
				{/* <div className="theme-switch">Mode</div> */}
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
						?.slice(100, 150)
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

			<div className="totop">T</div>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	/* styling here */
	font-size: 14px;
	position: relative;
	z-index: 10;

	.totop {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		/* bottom: 1rem;
		right: 1rem; */
		z-index: 100;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: blue;
		display: none;
	}

	.alert {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 20vh;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 10vh;
		padding: 0 1rem;
		margin-bottom: 1rem;
		background-color: hsl(209, 23%, 22%);
		position: sticky;
		top: 0;
	}

	.home {
		color: white;

		.toolbar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 10vh;
			padding: 0 1rem;
			margin-bottom: 1rem;

			.search {
				input {
					all: unset;
					background-color: hsl(209, 23%, 22%);
					padding: 0.8rem 1rem;
					border-radius: 0.3rem;
					width: 300px;
				}
			}

			.filter {
				select {
					font-family: inherit;
					outline: none;
					border: none;
					cursor: pointer;
					background-color: hsl(209, 23%, 22%);
					padding: 1rem 1.3rem;
					color: white;
					border-radius: 0.3rem;

					option {
						/* still doesn't know how to style option */
					}
				}
			}
		}
		.card-container {
			display: grid;
			gap: 0 1.8rem;
			margin: 0 1rem;

			@media screen and (min-width: 600px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media screen and (min-width: 800px) {
				grid-template-columns: repeat(3, 1fr);
			}

			@media screen and (min-width: 1000px) {
				grid-template-columns: repeat(4, 1fr);
			}

			a {
				text-decoration: none;
				color: white;
			}

			.card {
				max-width: 350px;
				border-radius: 0.3rem;
				overflow: hidden;
				margin: 1rem auto;

				img {
					width: 100%;
					margin: 0;
				}

				.card-body {
					padding: 1rem;
					background-color: hsl(209, 23%, 22%);

					h3 {
						margin-bottom: 1rem;
					}

					p {
						margin-bottom: 0.5rem;

						span {
							color: rgba(255, 255, 255, 0.75);
						}
					}
				}
			}
		}
	}
`;
