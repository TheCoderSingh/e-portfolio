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

	let toggleMenu = () => {
		if (nav.current.classList.contains('open')) {
			nav.current.classList.remove('open');
			nav.current.classList.add('close');
		} else {
			nav.current.classList.remove('close');
			nav.current.classList.add('open');
		}
	};

	useEffect(() => {
		let ham = document.getElementById('ham');
		let cross = document.getElementById('cross');

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
						<a href="#home" onClick={toggleMenu}>
							Home
						</a>
					</li>
					<li>
						<a href="#skills" onClick={toggleMenu}>
							Skills
						</a>
					</li>
					<li>
						<a href="#experience" onClick={toggleMenu}>
							Experience
						</a>
					</li>
					<li>
						<a href="#projects" onClick={toggleMenu}>
							Projects
						</a>
					</li>
					<li>
						<a href="#publications" onClick={toggleMenu}>
							Publications
						</a>
					</li>
					<li>
						<a href="#contact" onClick={toggleMenu}>
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
