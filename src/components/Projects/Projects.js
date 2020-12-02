import React, { useEffect } from 'react';
import './Projects.scss';
import alunos from '../../assets/images/projects/alunos.png';
import aquashot from '../../assets/images/projects/aquashot.png';
import aura from '../../assets/images/projects/aura.png';
import elixir from '../../assets/images/projects/elixir.png';
import zoom from '../../assets/images/projects/zoom.png';

const Projects = () => {
	useEffect(() => {
		viewProject();
	}, []);

	let viewProject = () => {
		const buttons = document.querySelectorAll('.project');

		function open(e) {
			let id = e.target.id;

			switch (id) {
				case 'p1':
					window.open('https://alunos.thecodersingh.com');
					break;
				case 'p2':
					window.open('https://aquashot.thecodersingh.com');
					break;
				case 'p3':
					window.open('https://aura.wmdd.ca');
					break;
				case 'p4':
					window.open('https://elixir.thecodersingh.com');
					break;
				case 'p5':
					window.open('https://zoom.thecodersingh.com');
					break;

				default:
					break;
			}
		}

		buttons.forEach((button) => button.addEventListener('click', open));
	};

	return (
		<section id="projects" className="grid">
			<div className="top-area">
				<h1>Projects</h1>
				<hr />
			</div>
			<div className="content">
				<div id="projects-list">
					<div className="project">
						<img
							className="project__image"
							src={alunos}
							alt="Project"
						/>
						<div className="grid__overlay">
							<p>
								Alunos improves homestay experiences by helping
								companies in Canada to manage homestay-related
								activities and faciliting communication.
							</p>
							<div className="technologies">
								<div className="tech">HTML</div>
								<div className="tech">SCSS</div>
								<div className="tech">Vue.js</div>
								<div className="tech">Laravel</div>
								<div className="tech">Quasar</div>
								<div className="tech">GraphQL</div>
							</div>
							<button className="viewbutton" id="p1">
								Check it out!
							</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src={aquashot}
							alt="Project"
						/>
						<div className="grid__overlay">
							<p>
								AquaShot is a game created in Vanilla JavaScript
								with the concepts of object oriented
								programming.
							</p>
							<div className="technologies">
								<div className="tech">HTML</div>
								<div className="tech">CSS</div>
								<div className="tech">JavaScript</div>
							</div>
							<button className="viewbutton" id="p2">
								Check it out!
							</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src={aura}
							alt="Project"
						/>
						<div className="grid__overlay">
							<p>
								Aura displays the air quality of the location
								you are planning to travel to and tells you
								whether it is safe to travel or not and provides
								you with a list of precautions to be taken.
							</p>
							<div className="technologies">
								<div className="tech">HTML</div>
								<div className="tech">SCSS</div>
								<div className="tech">ReactJS</div>
								<div className="tech">MySQL</div>
							</div>
							<button className="viewbutton" id="p3">
								Check it out!
							</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src={elixir}
							alt="Project"
						/>
						<div className="grid__overlay">
							<p>
								Elixir is a marketing website created for a
								school event.
							</p>
							<div className="technologies">
								<div className="tech">HTML</div>
								<div className="tech">CSS</div>
								<div className="tech">JavaScript</div>
							</div>
							<button className="viewbutton" id="p4">
								Check it out!
							</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src={zoom}
							alt="Project"
						/>
						<div className="grid__overlay">
							<p>
								Zoom provides dry-cleaning services and is
								created for a client.
							</p>
							<div className="technologies">
								<div className="tech">HTML</div>
								<div className="tech">CSS</div>
								<div className="tech">JavaScript</div>
							</div>
							<button className="viewbutton" id="p5">
								Check it out!
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
