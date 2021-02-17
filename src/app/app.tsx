import React from "react";
import { ThemeProvider } from "@emotion/react";

import { GlobalStyle } from "@/components/global-style";
import { darkTheme } from "@/themes";

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<h1>Wallet 2.0</h1>
		</ThemeProvider>
	);
};
