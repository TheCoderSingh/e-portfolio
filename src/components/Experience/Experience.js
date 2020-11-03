import React from 'react';
import './Experience.scss';

const Experience = () => {
	return (
		<section id="experience" className="grid">
			<div className="top-area">
				<h1>Experience</h1>
				<hr />
				{/* <p>"Wisdom is the reward of experience and should be shared"</p> */}
			</div>
			<div className="content">
				<section id="cd-timeline" className="cd-container">
					<div className="cd-timeline-block">
						<div className="cd-timeline-img cd-picture"></div>

						<div className="cd-timeline-content">
							<h2>Freelancer</h2>
							<div className="timeline-content-info">
								<span className="timeline-content-info-title">
									<i
										className="fa fa-certificate"
										aria-hidden="true"
									></i>
									Netscrew Technologies
								</span>
								<span className="timeline-content-info-date">
									<i
										className="fa fa-calendar-o"
										aria-hidden="true"
									></i>
									November 2018 - March 2019
								</span>
							</div>
							<p>
								Working alongside the designer team implementing
								the designs, also developing custom solutions to
								address team necessities.
							</p>
							<ul className="content-skills">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Wordpress</li>
							</ul>
						</div>
					</div>

					<div className="cd-timeline-block">
						<div className="cd-timeline-img cd-picture"></div>

						<div className="cd-timeline-content">
							<h2>Software Engineer</h2>
							<div className="timeline-content-info">
								<span className="timeline-content-info-title">
									<i
										className="fa fa-certificate"
										aria-hidden="true"
									></i>
									Geekers Technologies
								</span>
								<span className="timeline-content-info-date">
									<i
										className="fa fa-calendar-o"
										aria-hidden="true"
									></i>
									July 2018 - October 2018
								</span>
							</div>
							<p>
								Working alongside the designer team implementing
								the designs, also developing custom solutions to
								address team necessities.
							</p>
							<ul className="content-skills">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Wordpress</li>
							</ul>
						</div>
					</div>

					<div className="cd-timeline-block">
						<div className="cd-timeline-img cd-picture"></div>

						<div className="cd-timeline-content">
							<h2>Bootcamp Intern</h2>
							<div className="timeline-content-info">
								<span className="timeline-content-info-title">
									<i
										className="fa fa-certificate"
										aria-hidden="true"
									></i>
									Statusbrew
								</span>
								<span className="timeline-content-info-date">
									<i
										className="fa fa-calendar-o"
										aria-hidden="true"
									></i>
									June 2018
								</span>
							</div>
							<p>
								Working alongside the designer team implementing
								the designs, also developing custom solutions to
								address team necessities.
							</p>
							<ul className="content-skills">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Wordpress</li>
							</ul>
						</div>
					</div>

					<div className="cd-timeline-block">
						<div className="cd-timeline-img cd-picture"></div>

						<div className="cd-timeline-content">
							<h2>Bootcamp Intern</h2>
							<div className="timeline-content-info">
								<span className="timeline-content-info-title">
									<i
										className="fa fa-certificate"
										aria-hidden="true"
									></i>
									Statusbrew
								</span>
								<span className="timeline-content-info-date">
									<i
										className="fa fa-calendar-o"
										aria-hidden="true"
									></i>
									June 2017
								</span>
							</div>
							<p>
								Working alongside the designer team implementing
								the designs, also developing custom solutions to
								address team necessities.
							</p>
							<ul className="content-skills">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Wordpress</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Experience;
