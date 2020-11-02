import React from 'react';
import './Header.scss';
import menuIcon from '../../assets/images/menu.svg';

const Header = () => {
	return (
		<header id="header" className="grid">
			<img src="#" alt="Logo" />
			<nav>
				<img src={menuIcon} alt="Menu Icon" />
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
