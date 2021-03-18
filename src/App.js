import logo from './logo.svg';
import './App.css';
import React from 'react'
import Menu from './components/Menu.js';
import Showcase from './components/showcase.js'
import Services from './components/Services.jsx'
import Designers from './components/Designers.jsx'
import Packages from './components/Packages.jsx'
import Contact_Us from './components/Contact_Us.jsx'
import End from './components/End.jsx'

function App() {
  return (

<>
	<Menu/>
	<div id="main">
		<h1>Interior design</h1>
    	<Showcase/>
		<Services/>
		<Designers/>
		<Packages/>
		<Contact_Us/>
		<End/>
	</div>
</>
    );
}
	



export default App;

