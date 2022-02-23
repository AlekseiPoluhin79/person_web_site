import React from 'react';
import './testimonials.scss';

export default function Testimonials() {
	return (
		<div className="testimonials" id="testimonials">
			<h1>Отзывы</h1>
			<div className="container">
				<div className="card">
					<div className="top">
						<img className="left" src="./assets/right-arrow.png" alt="" />
						<img
							className="user"
							src="https://i11.fotocdn.net/s118/996f882843c28ad9/public_pin_l/2688122229.jpg"
							alt=""
						/>
						<img className="right" src="./assets/youtube.png" alt="" />
					</div>
					<div className="center">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dicta iure consequuntur quidem,
						nobis rerum.
					</div>
					<div className="bottom">
						<h3>Alex</h3>
						<h4>CEO of Don</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
