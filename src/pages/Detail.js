import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
	const apiUrlV2 = 'https://restcountries.com/v2/';
	const { name } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [country, setCountry] = useState([]);
	const [lan, setLan] = useState([]);

	console.log(country);

	useEffect(() => {
		const getCountryByName = async () => {
			await axios
				.get(`${apiUrlV2}/name/${name}`)
				.then((data) => {
					// console.log(data.data);
					setCountry(data.data[0]);
					setLan(data.data[0].languages.map(({ name }) => name));

					setLoading(false);
				})
				.catch((err) => console.log(err));
		};

		getCountryByName();
	}, [name]);

	return (
		<Container>
			<button onClick={() => navigate(-1)}>Back</button>

			{loading ? (
				<h3 className="loading">Loading...</h3>
			) : (
				<div className="flex">
					<div className="img-container">
						<img src={country?.flags?.png} alt={`${name} flag`} />
					</div>

					<div className="detail-container">
						<h3>{name}</h3>
						<div className="flex">
							<div>
								<p>
									Native Name: <span>{country?.nativeName}</span>
								</p>
								<p>
									Population: <span>{country?.population}</span>
								</p>
								<p>
									Region: <span>{country?.region}</span>
								</p>
								<p>
									Sub Region: <span>{country?.subregion}</span>
								</p>
								<p className="extra-mb">
									Capital: <span>{country?.capital}</span>
								</p>
							</div>

							<div>
								{/* <p>
							Top Level Domain: <span>{country?.topLevelDomain[0]}</span>
						</p>
						<p>
							Currencies: <span>{country?.currencies[0]?.name}</span>
						</p> */}
								<p className="extra-mb">
									Languages: <span>{lan?.map((e) => `${e} `)}</span>
								</p>
							</div>
						</div>

						<h4>Border Countries:</h4>
						<div className="badge-container">
							<div className="badge">/name 1</div>
							<div className="badge">/name 2</div>
							<div className="badge">/name 3</div>
						</div>
					</div>
				</div>
			)}
		</Container>
	);
};

export default Detail;

const Container = styled.div`
	margin: 1rem;

	/* .flex {
		@media screen and(min-width: 700px) {
			display: flex;
			justify-content: space-between;
		}
	} */

	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 20vh;
	}

	button {
		all: unset;
		cursor: pointer;
		padding: 0.5rem 1.7rem;
		margin-bottom: 3rem;
		border-radius: 0.3rem;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
		background-color: hsl(209, 23%, 22%);
	}

	.img-container {
		margin-bottom: 2.5rem;
		img {
			width: 100%;
			max-width: 350px;
		}
	}

	h3 {
		margin-bottom: 1.5rem;
	}

	.detail-container {
		/* .flex {
			@media screen and (min-width: 700px) {
				display: flex;
				justify-content: space-between;
				max-width: 400px;
			}
		} */

		p {
			margin-bottom: 0.5rem;

			&.extra-mb {
				margin-bottom: 2.5rem;
			}

			span {
				color: rgba(255, 255, 255, 0.75);
			}
		}
	}

	h4 {
		margin-bottom: 1rem;
	}

	.badge-container {
		.badge {
			width: fit-content;
			margin-right: 1rem;
			margin-bottom: 1rem;
			padding: 0.5rem 1.5rem;
			border-radius: 0.3rem;
			background-color: hsl(209, 23%, 22%);
		}
	}
`;
