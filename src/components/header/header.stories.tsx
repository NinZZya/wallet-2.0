import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

import { Header } from "./header";

export default {
	title: "Components/Header",
	component: Header,
	decorators: [withKnobs],
} as Meta;

export const ExaplePage: React.FC = () => (
	<Header>
		<div>Logo</div> <div>User menu</div>
	</Header>
);
