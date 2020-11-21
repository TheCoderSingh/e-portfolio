import React, { useEffect, useRef } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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

	const nav = useRef(null);

	useEffect(() => {
		let ham = document.getElementById('ham');
		let cross = document.getElementById('cross');

		let toggleMenu = () => {
			if (nav.current.classList.contains('open')) {
				nav.current.classList.remove('open');
				nav.current.classList.add('close');
			} else {
				nav.current.classList.remove('close');
				nav.current.classList.add('open');
			}
		};

		ham.addEventListener('click', toggleMenu);
		cross.addEventListener('click', toggleMenu);
	}, []);

	return (
		<header id="header" className="grid">
			<a href="https://thecodersingh.com/">JS</a>
			<nav className="close" id="nav" ref={nav}>
				<FontAwesomeIcon icon={faBars} id="ham" className="menu-icon" />
				<FontAwesomeIcon
					icon={faTimes}
					id="cross"
					className="menu-icon"
				/>
				<ul>
					<li>
						<a href="#home">Home</a>
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
						<a href="#contact">Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
