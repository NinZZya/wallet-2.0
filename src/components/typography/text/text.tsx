import styled from "@emotion/styled";
import { defaultTheme, hiddenStyle } from "./const";
import { Theme } from "./types";

export type TextKind = "success" | "information" | "error";

export interface Prop {
	theme?: Theme;
	hidden?: boolean;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	kind?: TextKind;
}

export const Text = styled.span<Prop>`
	${(props) => {
		const {
			hidden = false,
			bold = false,
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
      font-weight: ${bold ? "bold" : "normal"};
      font-style: ${italic ? "italic" : "normal"};
      text-decoration: ${decoration};
      color: ${kind ? theme.color[kind] : theme.color.text};
      font-size: ${theme.font.size};
      line-height: ${theme.font.lineHeight};
      ${hidden ? hiddenStyle : ""}
    `;
	}}
`;
