import React, { useEffect } from 'react';
import './Projects.scss';
import alunos from '../../assets/images/projects/alunos.png';
import aquashot from '../../assets/images/projects/aquashot.png';
import aura from '../../assets/images/projects/aura.png';
import elixir from '../../assets/images/projects/elixir.png';
import zoom from '../../assets/images/projects/zoom.png';

const Projects = () => {
	useEffect(() => {
		setClass();
	}, []);

	let setClass = () => {
		const buttons = document.querySelectorAll('.project');
		const overlay = document.querySelector('.overlay');
		const overlayImage = document.querySelector('.overlay__inner img');

		function open(e) {
			overlay.classList.add('open');
			const src = e.currentTarget.querySelector('img').src;
			overlayImage.src = src;
		}

		function close() {
			overlay.classList.remove('open');
		}

		buttons.forEach((button) => button.addEventListener('click', open));
		overlay.addEventListener('click', close);
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
						<img className="project__image" src={alunos} />
						<p>Alunos</p>
						<h3 className="grid__title">front-end</h3>
						<div className="grid__overlay">
							<button className="viewbutton">
								Check it out!
							</button>
						</div>
					</div>

					<div className="project">
						<img className="project__image" src={aquashot} />
						<p>pure css</p>
						<h3 className="grid__title"> front-end</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="project">
						<img className="project__image" src={aura} />
						<p>web apps</p>
						<h3 className="grid__title"> full-stack</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="project">
						<img className="project__image" src={elixir} />
						<p>daily ui</p>
						<h3 className="grid__title"> ui/ux design</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="project">
						<img className="project__image" src={zoom} />
						<p>websites</p>
						<h3 className="grid__title"> front-end</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-0.3.5&s=a4b3dc4bee43da458f6aa5c05be6bfc4&auto=format&fit=crop&w=700&q=80"
						/>
						<p>pure css</p>
						<h3 className="grid__title"> front-end</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src="https://images.unsplash.com/photo-1481762554390-ff5562748bdf?ixlib=rb-0.3.5&s=1b7f850b7f8f702e237b0f81c0ec0bf5&auto=format&fit=crop&w=700&q=80"
						/>
						<p>web apps</p>
						<h3 className="grid__title"> full-stack</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="project">
						<img
							className="project__image"
							src="https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?ixlib=rb-0.3.5&s=e5bf2f64858b8abe2a386b0c6df594e4&auto=format&fit=crop&w=700&q=80"
						/>
						<p>daily ui</p>
						<h3 className="grid__title"> ui/ux design</h3>
						<div className="grid__overlay">
							<button className="viewbutton">view more</button>
						</div>
					</div>

					<div className="overlay">
						<div className="overlay__inner">
							<button className="close">close X</button>
							<img />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
