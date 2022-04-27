import styled from 'styled-components';
import Home from './pages/Home';

const Navbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5vw;
	min-height: 10vh;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

function App() {
	return (
		<div>
			<Navbar>
				<p className="title">Where in the world?</p>
				<p className="sub-title">Dark Mode</p>
			</Navbar>

			{/* content here */}
			<Home />
		</div>
	);
}

export default App;
