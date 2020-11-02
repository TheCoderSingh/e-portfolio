import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fac } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
	return (
		<section id="home" className="grid">
			<div className="centered">
				<div className="top-area">
					<p>I am</p>
					<h1>Jaskaran Singh</h1>
					<p>
						I am a software engineer, based in Vancouver, BC. I
						develop websites and mobile applications and aspire to
						revolutionize the world through code.
					</p>
				</div>
				<div className="social-icons">
					<a href="https://facebook.com/CoderSingh" target="_blank">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="https://instagram.com/codersingh" target="_blank">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="https://twitter.com/TheCoderSingh" target="_blank">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href="https://linkedin.com/in/TheCoderSingh"
						target="_blank"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href="https://github.com/TheCoderSingh" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
				<div className="content">
					<a href="#">My Resume</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
