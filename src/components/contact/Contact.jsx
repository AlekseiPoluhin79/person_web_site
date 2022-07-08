import React from 'react';
import './contact.scss';

export default function Contact() {
	const handleSubmit = (e) => {
		e.preventDefoult();
	};

	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="./assets/shake.svg" alt="Контакты" />
			</div>
			<div className="right">
				<h1>Контакты.</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email" />
					<textarea placeholder="Message" />
					<button type="submit">Отправить</button>
				</form>
			</div>
		</div>
	);
}
