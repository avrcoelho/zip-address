import * as React from 'react';

import { useAppContext } from '../../Providers/App.Context';

const logo = require('./luizalabs-logo.png');
import './Header.scss';

export default function Header() {
	const { loading } = useAppContext();

	return (
		<header className={`${loading ? 'header--loading ' : ''}header bg-secondary color-primary text-center`}>
			<h1 className="my-0">
				<a
					className="header__logo"
					href="http://www.luizalabs.com/"
					target="_blank"
				>
					LuizaLabs
					<img
						alt="Luiza Labs"
						className="header__logo-image full-width"
						src={logo}
						title="Luiza Labs"
					/>
				</a>
			</h1>
		</header>
	)
}