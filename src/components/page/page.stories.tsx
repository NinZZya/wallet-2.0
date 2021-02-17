import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Page } from "./page";

export default {
	title: "Components/Page",
	component: Page,
	decorators: [withKnobs],
} as Meta;

const stylePage = {
	padding: "0",
	fontFamily: "Arial",
	fontSize: "14px",
	border: "2px solid red",
};

export const ExaplePage: React.FC = () => (
	<div>
		<Page style={stylePage}>
			{text("Text", "Width is 1280px padding: 0 10px")}
		</Page>
	</div>
);
