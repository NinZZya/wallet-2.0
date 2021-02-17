import styled from "@emotion/styled";
import { defaultTheme } from "../const";
import { Theme } from "../types";

export interface Prop {
	theme?: Theme;
	hidden: boolean;
}

export const Menu = styled.ul<Prop>`
	${(props) => {
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		return `
      display: ${props.hidden ? "none" : "block"};
      z-index: 1000;
      position: absolute;
      top: 100%;
      z-index: 1000;
      min-width: 100px;
      padding: 0.5rem 0;
      margin: 0;
      text-align: left;
      list-style: none;
      font-weight: 700;
      border-radius: 0.3em;
      cursor: pointer;
      text-decoration: none;
      border: 1px solid ${theme.color.border};
      color: ${theme.color.text};
      background-color: ${theme.color.background};
      font-size: ${theme.font.size};

      li {
        padding: 0.5em 0.7rem;
      }
      li:hover {
        background-color: ${theme.color.selected};
      }
    `;
	}}
`;
