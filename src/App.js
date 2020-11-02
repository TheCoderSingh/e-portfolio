import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Publications />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
