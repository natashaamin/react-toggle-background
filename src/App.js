import React, { useContext, useEffect } from 'react';
import './App.css';
import ToggleDark from './component/toggleDark';
import { ThemeContext } from './context/themeContext';

export default function App() {
	const theme = useContext(ThemeContext);
  	const darkMode = theme.state.darkMode;

	useEffect(()  => {
		document.body.classList.toggle('bg-black', darkMode);
	
		return () => {
			document.body.classList.remove('bg-black');
		};
	}, [darkMode]);
	

	const wave = () => {};

	return (
		<div className="wrapper">
			<div className="mainContainer">
				<div className="dataContainer">
					<div className="header">👋 Hey there!</div>

					<div className="bio">Hi. I'm Natasha</div>

					<button className="waveButton" onClick={wave}>
						Wave at Me
					</button>
				</div>
			</div>
			<div className="toggleContainer">
				<h1 className="text-warning">Dark/Light mode</h1>
				<ToggleDark/>
			</div>
		</div>
	);
}
