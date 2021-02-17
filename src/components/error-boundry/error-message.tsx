import React from "react";
import styled from "@emotion/styled";
import { defaultTheme } from "./const";

interface Theme {
	color?: {
		[key: string]: string | string[];
		primary: string;
		secondary: string;
		background: string;
		selected: string;
		text: string;
		border: string;
		success: string;
		information: string;
		error: string;
		bars: string[];
	};
	font: {
		family: string;
		size: string;
		lineHeight: string;
	};
}

export interface Prop {
	theme?: Theme;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
}

const Wrapper = styled.p<Prop>`
	${(props) => {
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		return `
      font-weight: bold;
      color: ${theme.color.error};
      font-size: ${theme.font.size};
      line-height: ${theme.font.lineHeight};
    `;
	}}
`;

export const ErrorMessage = (): JSX.Element => (
	<Wrapper>Ooooops.... Error 😢 Sorry 🥺</Wrapper>
);
