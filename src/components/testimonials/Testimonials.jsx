import React from 'react';
import './testimonials.scss';

export default function Testimonials() {
	const data = [
		{
			id: 1,
			name: 'Мила Кунис',
			title: 'Senior Developer',
			img: 'https://i11.fotocdn.net/s118/996f882843c28ad9/public_pin_l/2688122229.jpg',
			icon: './assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.'
		},
		{
			id: 2,
			name: 'Мила Йовович',
			title: 'Co-Founder of TELKA',
			img: 'https://i11.fotocdn.net/s118/996f882843c28ad9/public_pin_l/2688122229.jpg',
			icon: './assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
			featured: true
		},
		{
			id: 3,
			name: 'Памела Андерсон',
			title: 'CEO of ALIBI',
			img: 'https://i11.fotocdn.net/s118/996f882843c28ad9/public_pin_l/2688122229.jpg',
			icon: './assets/youtube.png',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.'
		}
	];

	return (
		<div className="testimonials" id="testimonials">
			<h1>Отзывы</h1>
			<div className="container">
				{data.map((d) => (
					<div className={d.featured ? 'card featured' : 'card'}>
						<div className="top">
							<img className="left" src="./assets/right-arrow.png" alt="" />
							<img className="user" src={d.img} alt="" />
							<img className="right" src={d.icon} alt="" />
						</div>
						<div className="center">{d.desc}</div>
						<div className="bottom">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
						</div>
					</div>
				))};
			</div>
		</div>
	);
}
