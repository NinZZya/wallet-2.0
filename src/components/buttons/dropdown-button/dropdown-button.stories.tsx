import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import { DropdownButton } from "./dropdown-button";
import { DropdownButtonItem as Item } from "./components/dropdown-button-item";
import { defaultTheme } from "./const";

export default {
	title: "Components/buttons/DropdownButton",
	component: DropdownButton,
	argTypes: { onClick: { action: "clicked" } },
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof defaultTheme => {
	return object("Theme", defaultTheme, "Theme");
};

export const ExampleDropdownButton: React.FC = () => {
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
			<DropdownButton name={text("Text", "Dropdown Button")}>
				<Item key={1}>Item1</Item>
				<Item key={1}>Item2</Item>
				<Item key={1}>Item3</Item>
			</DropdownButton>
		</div>
	);
};
