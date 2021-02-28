import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import {
	withKnobs,
	boolean,
	text,
	object,
	optionsKnob,
} from "@storybook/addon-knobs";

import { Title, Kind, Level } from "./title";
import { defaultTheme } from "./const";

export default {
	title: "Components/typography/Title",
	component: Title,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

const level: { [key: string]: Level } = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
};

const kind: { [key: string]: Kind } = {
	text: "text",
	success: "success",
	information: "information",
	error: "error",
};

const getKind = (): Kind => {
	return optionsKnob("Kind of text", kind, kind.text, {
		display: "select",
	});
};

export const ExaplesTitle: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<Title
				theme={getTheme()}
				level={level.h1}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
				kind={getKind()}
			>
				{`Type h1. ${text("Text", "Example title text")}`}
			</Title>
			<Title
				theme={getTheme()}
				level={level.h2}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
				kind={getKind()}
			>
				{`Type h2. ${text("Text", "Example title text")}`}
			</Title>
			<Title
				theme={getTheme()}
				level={level.h3}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
				kind={getKind()}
			>
				{`Type h3. ${text("Text", "Example title text")}`}
			</Title>
			<Title
				theme={getTheme()}
				level={level.h4}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
				kind={getKind()}
			>
				{`Type h4. ${text("Text", "Example title text")}`}
			</Title>
			<Title
				theme={getTheme()}
				level={level.h5}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
				kind={getKind()}
			>
				{`Type h5. ${text("Text", "Example title text")}`}
			</Title>
			<p>Normal text</p>
		</div>
	);
};
