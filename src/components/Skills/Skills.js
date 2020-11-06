import React from 'react';
import './Skills.scss';

const Skills = () => {
	return (
		<section id="skills" className="grid">
			<div className="top-area">
				<h1>Skills</h1>
				<hr />
			</div>
			<div className="content">
				<p>
					With a deep love for JavaScript, I have been developing web
					and mobile applications using following technologies and
					tools. I can quickly adapt to new technologies because once
					you master these, what it really takes is the ability to
					perform a Google Search and read documentation.
				</p>
				<div className="skill-list">
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>SASS/SCSS</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>Angular</li>
						<li>React</li>
						<li>React Native</li>
						<li>Vue</li>
					</ul>
					<ul>
						<li>PHP</li>
						<li>Python</li>
						<li>Node</li>
						<li>WordPress</li>
						<li>Native Android</li>
						<li>Native iOS</li>
						<li>MySQL</li>
						<li>Git</li>
						<li>AWS</li>
					</ul>
				</div>
				<div className="contact-btn">
					<h3>Say hi!</h3>
				</div>
			</div>
		</section>
	);
};

export default Skills;
