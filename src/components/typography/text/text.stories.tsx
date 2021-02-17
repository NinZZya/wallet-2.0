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

import { Text, TextKind } from "./text";
import { defaultTheme } from "./const";

export default {
	title: "Components/typography/Text",
	component: Text,
	decorators: [withKnobs],
} as Meta;

const kind: { [key: string]: TextKind } = {
	success: "success",
	information: "information",
	error: "error",
};

const getKind = (): TextKind => {
	return optionsKnob("Kind of button", kind, kind.error, {
		display: "select",
	});
};

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

export const ExampleText: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
			}}
		>
			<Text
				theme={getTheme()}
				hidden={boolean("Hidden", false)}
				bold={boolean("Bold", false)}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
			>
				{text("Text", "Example text")}
			</Text>
		</div>
	);
};

export const ExampleTextWithKind: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
			}}
		>
			<Text
				theme={getTheme()}
				hidden={boolean("Hidden", false)}
				bold={boolean("Bold", false)}
				italic={boolean("Italic", false)}
				underline={boolean("Underline", false)}
				strikethrough={boolean("Strikethrough", false)}
				kind={getKind()}
			>
				{text("Text", "Example text")}
			</Text>
		</div>
	);
};
