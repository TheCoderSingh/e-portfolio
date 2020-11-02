import React from 'react';
import './Skills.scss';

const Skills = () => {
	return (
		<section id="skills" className="grid">
			<div className="top-area">
				<h1>Skills</h1>
				<hr />
				{/* <p>Awesome! Right?</p> */}
			</div>
			<div className="content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Mauris aliquet, dolor eu faucibus tempus, tortor erat
					vehicula orci, id rutrum urna magna in lectus. Pellentesque
					id ipsum vitae sem lobortis iaculis.
				</p>
				<div>
					<div className="content-head">
						<h3>Frontend</h3>
						<hr />
					</div>
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
					<div className="content-head">
						<h3>Backend</h3>
						<hr />
					</div>
					<ul>
						<li>PHP</li>
						<li>Python</li>
						<li>Node</li>
						<li>WordPress</li>
						<li>Native Android</li>
						<li>Native iOS</li>
						<li>MySQL</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
