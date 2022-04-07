import React, { useContext, useEffect } from 'react';
import LocalicationContext from './context/localizationContext';
import { ThemeContext } from './context/themeContext';
import ToggleDark from './component/toggleDark';
import './App.css';

export default function App() {
	const theme = useContext(ThemeContext);
	const { t, i18n } = useContext(LocalicationContext);
  	const darkMode = theme.state.darkMode;
	
	useEffect(()  => {
		document.body.classList.toggle('bg-black', darkMode);
		return () => {
			document.body.classList.remove('bg-black');
		};
	}, [darkMode]);
	
	return (
		<div className="wrapper">
			<div className="mainContainer">
				<div className="dataContainer">
					<div className="header">👋 {t('introduction')}</div>
				</div>
			</div>
			<div className="toggleContainer">
				<h1 className="text-warning">Dark/Light mode</h1>
				<ToggleDark/>
			</div>
		</div>
	);
}
