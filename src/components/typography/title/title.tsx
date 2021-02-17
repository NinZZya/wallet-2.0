import styled from "@emotion/styled";
import { defaultTheme, levelToRatio } from "./const";
import { Theme } from "./types";

export interface Prop {
	theme?: Theme;
	level: "h1" | "h2" | "h3" | "h4" | "h5";
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
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
      color: ${theme.color.text};
      font-size: ${getValue(theme.font.size) * levelToRatio[level]}px;
      `;
	}}
`;
