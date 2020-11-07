import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<section id="contact" className="grid">
			<div className="top-area">
				<h1>Contact me</h1>
				<hr />
			</div>
			<div className="content">
				<form
					action="https://formkeep.com/f/dc68e717f3b2"
					method="POST"
					target="_blank"
				>
					<div class="background">
						<div class="container">
							<div class="screen">
								<div class="screen-header">
									<div class="screen-header-left">
										<div class="screen-header-button close"></div>
										<div class="screen-header-button maximize"></div>
										<div class="screen-header-button minimize"></div>
									</div>
									<div class="screen-header-right">
										<div class="screen-header-ellipsis"></div>
										<div class="screen-header-ellipsis"></div>
										<div class="screen-header-ellipsis"></div>
									</div>
								</div>
								<div class="screen-body">
									<div class="screen-body-item left">
										<div class="app-title">
											<span>LET'S</span>
											<span>TALK</span>
										</div>
										<div class="app-contact">
											Phone: +1(604)849-2755
										</div>
										<div class="app-contact">
											Email:{' '}
											<a href="mailto:jaskaran1523@gmail.com">
												jaskaran1523@gmail.com
											</a>
										</div>
									</div>
									<div class="screen-body-item">
										<div class="app-form">
											<div class="app-form-group">
												<input
													class="app-form-control"
													placeholder="Name*"
													name="name"
													required
												/>
											</div>
											<div class="app-form-group">
												<input
													class="app-form-control"
													placeholder="Email*"
													type="email"
													name="email"
													required
												/>
											</div>
											<div class="app-form-group message">
												<input
													class="app-form-control"
													placeholder="Message*"
													name="message"
													required
												/>
											</div>
											<div class="app-form-group buttons">
												<button
													class="app-form-button"
													type="submit"
												>
													SEND
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
