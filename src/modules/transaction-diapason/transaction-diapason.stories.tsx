import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { TransactionDiapasonComponent } from "./transaction-diapason";
import { darkTheme } from "@/themes";

export default {
	title: "Modules/TransactionDiapason",
	component: TransactionDiapasonComponent,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof darkTheme => {
	return object("Theme", darkTheme, "Theme");
};

export const ExampleTransactionDiapason: React.FC = () => {
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
			<TransactionDiapasonComponent
				start={new Date()}
				setStartDate={action("clicked")}
				end={new Date()}
				setEndDate={action("clicked")}
			/>
		</div>
	);
};
