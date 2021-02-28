import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object } from "@storybook/addon-knobs";

import { EmptyDataMessage } from "./empty-data-message";
import { darkTheme } from "@/themes";

export default {
	title: "Components/EmptyDataMessage",
	component: EmptyDataMessage,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof darkTheme => {
	return object("Theme", darkTheme, "Theme");
};

export const TransactionsDataLoaderLoading: React.FC = () => {
	const theme = getTheme();
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
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
			<EmptyDataMessage />
		</div>
	);
};
