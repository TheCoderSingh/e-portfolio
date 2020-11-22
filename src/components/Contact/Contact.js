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
					<div className="background">
						<div className="container">
							<div className="screen">
								<div className="screen-header">
									<div className="screen-header-left">
										<div className="screen-header-button close"></div>
										<div className="screen-header-button maximize"></div>
										<div className="screen-header-button minimize"></div>
									</div>
									<div className="screen-header-right">
										<div className="screen-header-ellipsis"></div>
										<div className="screen-header-ellipsis"></div>
										<div className="screen-header-ellipsis"></div>
									</div>
								</div>
								<div className="screen-body">
									<div className="screen-body-item left">
										<div className="app-title">
											<span>LET'S</span>
											<span>TALK</span>
										</div>
										<div className="app-contact">
											Phone:&nbsp;
											<a href="tel:6048492755">
												+1(604)849-2755
											</a>
										</div>
										<div className="app-contact">
											Email:{' '}
											<a href="mailto:jaskaran1523@gmail.com">
												jaskaran1523@gmail.com
											</a>
										</div>
									</div>
									<div className="screen-body-item">
										<div className="app-form">
											<div className="app-form-group">
												<input
													className="app-form-control"
													placeholder="Name*"
													name="name"
													required
												/>
											</div>
											<div className="app-form-group">
												<input
													className="app-form-control"
													placeholder="Email*"
													type="email"
													name="email"
													required
												/>
											</div>
											<div className="app-form-group message">
												<input
													className="app-form-control"
													placeholder="Message*"
													name="message"
													required
												/>
											</div>
											<div className="app-form-group buttons">
												<button
													className="app-form-button"
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
