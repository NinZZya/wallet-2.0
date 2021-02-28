import styled from "@emotion/styled";
import { defaultTheme, levelToRatio } from "./const";
import { Theme } from "./types";

export type Level = "h1" | "h2" | "h3" | "h4" | "h5";
export type Kind = "text" | "success" | "information" | "error";
export interface Prop {
	theme?: Theme;
	level: Level;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	kind?: Kind;
}

const getValue = (value: string): number =>
	Number(value.replace(/[^-0-9]/gim, ""));

export const Title = styled.p<Prop>`
	${(props) => {
		const {
			level,
			italic = false,
			underline = false,
			strikethrough = false,
			kind,
		} = props;
		const theme = {
			...defaultTheme,
			...props.theme,
		};

		let decoration = "normal";

		if (underline) {
			decoration = "underline";
		} else if (strikethrough) {
			decoration = "line-through";
		}

		return `
      font-weight: bold;
      font-style: ${italic ? "italic" : "normal"};
      text-decoration: ${decoration};
      color: ${kind ? theme.color[kind] : theme.color.text};
      font-size: ${getValue(theme.font.size) * levelToRatio[level]}px;
      `;
	}}
`;
