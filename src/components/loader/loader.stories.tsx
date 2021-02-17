import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Loader } from "./loader";
import { defaultTheme } from "./const";

export default {
	title: "Components/Loader",
	component: Loader,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

export const ExampleLoader: React.FC = () => {
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
			<Loader theme={theme} />
		</div>
	);
};
