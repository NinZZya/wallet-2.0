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
}

export const Header = styled.header<Prop>`
	${(props) => {
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		return `
    width: 1024px;
      height: 100%;
      margin: 0 auto;
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${theme.color.selected};
      color: ${theme.color.text};
      font-size: ${theme.font.size};
      line-height: ${theme.font.lineHeight};
      box-sizing: border-box;
      text-decoration: none;
    `;
	}}
`;
