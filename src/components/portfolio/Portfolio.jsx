import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { featuredPortfolio, webPortfolio, mobilePortfolio, desingPortfolio, contentPortfolio } from '../../data';

export default function Portfolio() {
	const [ selected, setSelected ] = useState('featured');
	const [ data, setdata ] = useState([]);

	const list = [
		{
			id: 'featured',
			title: 'Популярное'
		},
		{
			id: 'web',
			title: 'Веб-приложение'
		},
		{
			id: 'mobile',
			title: 'Мобильное приложение'
		},
		{
			id: 'desing',
			title: 'Дизайн'
		},
		{
			id: 'content',
			title: 'Разное'
		}
	];

	useEffect(
		() => {
			switch (selected) {
				case 'featured':
					setdata(featuredPortfolio);
					break;
				case 'web':
					setdata(webPortfolio);
					break;
				case 'mobile':
					setdata(mobilePortfolio);
					break;
				case 'desing':
					setdata(desingPortfolio);
					break;
				case 'content':
					setdata(contentPortfolio);
					break;
				default:
					setdata(featuredPortfolio);
			}
		},
		[ selected ]
	);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Портфолио</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
					<div className="item">
						<img src={d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}
