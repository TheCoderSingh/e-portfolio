import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	window.onscroll = () => {
		fixNavbar();
	};

	let fixNavbar = () => {
		if (
			document.body.scrollTop > 150 ||
			document.documentElement.scrollTop > 150
		) {
			document.getElementById('header').classList.add('navbar-active');
		} else {
			document.getElementById('header').classList.remove('navbar-active');
		}
	};

	return (
		<header id="header" className="grid">
			<a href="https://thecodersingh.com/">JS</a>
			<nav>
				<FontAwesomeIcon icon={faBars} />
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About Me</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#publications">Publications</a>
					</li>
					<li>
						<a href="#contacts">Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
