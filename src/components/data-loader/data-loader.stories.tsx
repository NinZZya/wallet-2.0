import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, boolean, object, text } from "@storybook/addon-knobs";

import { DataLoader } from "./data-loader";
import { defaultTheme } from "./const";

export default {
	title: "Components/DataLoader",
	component: DataLoader,
	decorators: [withKnobs],
} as Meta;

const getData = (): void => {
	console.log("Start loading");
};

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

export const DataLoaderWithLoading: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				width: "100%",
				height: "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<DataLoader
				getData={getData}
				isLoading={boolean("Is loading", true)}
				isError={false}
			>
				<p>If you see it then data loaded</p>
			</DataLoader>
		</div>
	);
};

export const DataLoaderWithError: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				width: "100%",
				height: "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontFamily: theme.font.family,
				fontSize: theme.font.size,
				lineHeight: theme.font.lineHeight,
				background: theme.color.background,
				color: theme.color.text,
			}}
		>
			<DataLoader
				getData={getData}
				isLoading={false}
				isError={boolean("Is error", true)}
				error={text("Error", "")}
			>
				<p>If you see it then data loaded</p>
			</DataLoader>
		</div>
	);
};
