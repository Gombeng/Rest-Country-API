import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
	const apiUrlV2 = 'https://restcountries.com/v2/';
	const { name } = useParams();
	const navigate = useNavigate();
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
				})
				.catch((err) => console.log(err));
		};

		getCountryByName();
	}, [name]);

	return (
		<div>
			<button onClick={() => navigate(-1)}>Back</button>

			<div className="img-container">
				<img src={country?.flags?.png} alt={`${name} flag`} />
			</div>

			<div className="detail-contaiener">
				<h3>{name}</h3>
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
				<p>
					Capital: <span>{country?.capital}</span>
				</p>
				{/* <p>
					Top Level Domain: <span>{country?.topLevelDomain[0]}</span>
				</p> */}
				<p>{/* Currencies: <span>{country?.currencies}</span> */}</p>
				<p>
					Languages: <span>{lan?.map((e) => `${e} `)}</span>
				</p>
				<h4>Border Countries:</h4>
				<div className="badge-container">
					<div className="badge">Country Name</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
