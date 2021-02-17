import React from "react";
/** @jsx jsx */
import { jsx, Global, css, useTheme } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";
import { defaultTheme } from "./const";
import { Theme } from "./types";
export interface GlobalProp {
	[key: string]: never;
}

const getGlobalStyle = (theme: Theme): SerializedStyles => css`
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: ${theme.color.background};
		color: ${theme.color.text};
		box-sizing: border-box;
		font-family: ${theme.font.family};
		font-size: ${theme.font.size};
		line-height: ${theme.font.lineHeight};
	}

	a {
		color: ${theme.color.primary};
	}
`;

export const GlobalStyle: React.FC<GlobalProp> = () => {
	const theme = {
		...defaultTheme,
		...useTheme(),
	};

	return <Global styles={getGlobalStyle(theme)} />;
};
