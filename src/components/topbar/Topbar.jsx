import { Mail, Person } from '@mui/icons-material';
import './topbar.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'topbar ' + (menuOpen && 'active')}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						ВебВоин.
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+7 905 280 23 55</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>Poluhin1979@outlook.com </span>
					</div>
				</div>

				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1" />
						<span className="line2" />
						<span className="line2" />
					</div>
				</div>
			</div>
		</div>
	);
}
