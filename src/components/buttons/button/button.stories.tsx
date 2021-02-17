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
import { action } from "@storybook/addon-actions";

import { Button, ButtonKind } from "./button";
import { defaultTheme } from "./const";

export default {
	title: "Components/buttons/Button",
	component: Button,
	decorators: [withKnobs],
} as Meta;

const kind = {
	primary: "primary",
	secondary: "secondary",
	success: "success",
	information: "information",
	error: "error",
};

const getKind = (): string => {
	return optionsKnob("Kind of button", kind, kind.primary, {
		display: "select",
	});
};

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

export const ExampleButton: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				width: "200px",
				height: "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
			}}
		>
			<Button
				disabled={boolean("Disabled", false)}
				kind={getKind() as ButtonKind}
				theme={theme}
				onClick={action("clicked")}
			>
				{text("Text", "Button")}
			</Button>
		</div>
	);
};
