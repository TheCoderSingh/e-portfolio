import React from 'react';
import './Publications.scss';

const Publications = () => {
	return (
		<section id="publications" className="grid">
			<div className="top-area">
				<h1>Publications</h1>
				<hr />
			</div>
			<div className="content">
				<div className="cards-container">
					<div className="card">
						<h3>Design Patterns in JavaScript</h3>
						<p>
							A design pattern is a reusable chunk of code that
							can be used in designing software. It helps to solve
							design issues and write easily...
						</p>
						<a
							href="https://jaskaran.wmdd.ca/index.php/2020/03/21/design-patterns-in-javascript/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>Creating an API in Express.js</h3>
						<p>
							This is a simple tutorial on how to create an API in
							Express.js. First, NodeJs needs to be installed.
							Download it from here. node -v...
						</p>
						<a
							href="https://jaskaran.wmdd.ca/index.php/2020/03/07/creating-an-api-in-express-js/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>Intro to Kotlin</h3>
						<p>
							Kotlin is a programming language developed by
							JetBrains, the developer of the JetBrains IDE suite.
							It is an open-source language...
						</p>
						<a href="https://jaskaran.wmdd.ca/index.php/2020/02/22/intro-to-kotlin/">
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>React Router</h3>
						<p>
							React is used to create single-page applications
							(SPAs), but what if we want different pages on our
							website, that are written...
						</p>
						<a
							href="https://jaskaran.wmdd.ca/index.php/2020/02/15/react-router/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>TensorFlow.js</h3>
						<p>
							TensorFlow.js is a JavaScript library that trains
							machine learning models using a browser and Node.js.
							TensorFlow.js is amazingly fast...
						</p>
						<a
							href="https://jaskaran.wmdd.ca/index.php/2020/02/08/tensorflow-js/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>Props vs States in React.js</h3>
						<p>
							React.js is one of the most popular libraries for
							JavaScript. Props and States are the key features of
							React but can be quite confusing...
						</p>
						<a
							href="https://jaskaran.wmdd.ca/index.php/2020/01/25/props-vs-states-in-react-js/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>3 Women Who Made The Tech Community Proud</h3>
						<p>
							Technology has seeped into every facet of our life.
							We live in a womb of technology from day to night.
							The very evident...
						</p>
						<a
							href="https://medium.com/netscrew-technologies/3-women-who-made-the-tech-community-proud-f9963ce92e77/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>Elucidating Arrow Functions in JavaScript</h3>
						<p>
							Arrow Functions were introduced in ECMAScript 6
							(ES2015). They are often referred to as “Fat Arrow
							Functions” or “Lambda Functions”...
						</p>
						<a
							href="https://medium.com/netscrew-technologies/elucidating-arrow-functions-in-javascript-236d91bcbf5d/"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
					<hr />
					<div className="card">
						<h3>
							var, let &amp; const — An Overview and Comparison
						</h3>
						<p>
							ECMAScript 6 (also known as ES6 or ECMAScript 2015)
							was finalized in June 2015 and it came out with a
							whole bunch of new features like...
						</p>
						<a
							href="https://medium.com/netscrew-technologies/var-let-const-an-overview-and-comparison-3f1220b21774"
							target="_blank"
							rel="noreferrer"
						>
							Read Full Article
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Publications;
