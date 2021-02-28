import styled from "@emotion/styled";
import { defaultTheme } from "./const";
import { Theme } from "./types";

export type Kind =
	| "primary"
	| "secondary"
	| "success"
	| "information"
	| "error";

export interface Prop {
	theme?: Theme;
	kind?: Kind;
	width?: string;
	height?: string;
}

export const Button = styled.button<Prop>`
	${(props) => {
		const { kind = "primary", width = "auto", height = "auto" } = props;
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		return `
      display: inline-block;
      width: ${width};
      height: ${height};
      padding: 1rem;
      font-weight: 700;
      border-radius: 0.3em;
      cursor: pointer;
      line-height: 1;
      text-decoration: none;
      border: 1px solid ${theme.color.border};
      color: ${theme.color.text};
      background-color: ${theme.color[kind]};
      font-size: ${theme.font.size};

      &:hover {
        outline: none;
        opacity: 0.6;
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    `;
	}}
`;
