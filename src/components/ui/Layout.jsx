import React from 'react';

import Footer from './Footer.jsx';

import { ThemeProvider } from '../../context/themeContext.jsx';

const Layout = ({ children }) => {

	return (
		<ThemeProvider>

			<div className="skip-links">

				<a href="#skip-header-target">
					Jump to main content
				</a>

			</div>

			{children}

			<Footer />

		</ThemeProvider>
	);
};

export default Layout;