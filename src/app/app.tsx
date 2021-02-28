import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import { GlobalStyle } from "@/components/global-style";
import { Transactions } from "@/screens/transactions";
import { store } from "@/store";
import { darkTheme } from "@/themes";

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<Transactions />
			</ThemeProvider>
		</Provider>
	);
};
