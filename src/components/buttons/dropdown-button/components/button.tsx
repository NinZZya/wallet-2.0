import styled from "@emotion/styled";
import { defaultTheme } from "../const";
import { Theme } from "../types";

export const Wrapper = styled.div`
	position: relative;
	box-sizing: border-box;
`;

export interface ButtonProp {
	theme?: Theme;
}

export const Button = styled.button<ButtonProp>`
	${(props) => {
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		return `
      display: inline-block;
      padding: 1rem;
      font-weight: 700;
      border-radius: 0.3em;
      white-space: nowrap;
      cursor: pointer;
      line-height: 1;
      text-decoration: none;
      border: 1px solid ${theme.color.border};
      color: ${theme.color.text};
      background-color: ${theme.color.border};
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
