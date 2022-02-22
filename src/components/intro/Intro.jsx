import React from 'react';
import './intro.scss';

export default function Intro() {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="./assets/man.png" alt="foto" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Привет, я</h2>
					<h1>Алексей Полухин</h1>
					<h3>
						веб-разработчик<span />
					</h3>
				</div>
				<a href="#portfolio">
					<img src="./assets/down.png" alt="arrowDown" />
				</a>
			</div>
		</div>
	);
}
