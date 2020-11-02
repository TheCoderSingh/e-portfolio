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
			<span>JS</span>
			<nav>
				<FontAwesomeIcon icon={faBars} />
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About Me</a>
					</li>
					<li>
						<a href="#">Skills</a>
					</li>
					<li>
						<a href="#">Experience</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Publications</a>
					</li>
					<li>
						<a href="#">Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
