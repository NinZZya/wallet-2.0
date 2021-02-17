import styled from "@emotion/styled";
import { defaultTheme } from "./const";
import { Theme } from "./types";

export interface Prop {
	theme?: Theme;
}

export const Form = styled.form<Prop>`
	${(props) => {
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		return `
      width: 100%;
      height: 100%;
      background: ${theme.color.background};
      border: 1px solid  ${theme.color.border};
      padding: 2em;
      color: ${theme.color.text};
      font-size: ${theme.font.size};
      font-family: ${theme.font.family};
      line-height: ${theme.font.lineHeight};
      box-sizing: border-box;
    `;
	}}
`;
