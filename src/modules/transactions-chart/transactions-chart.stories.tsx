import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object } from "@storybook/addon-knobs";

import { TransactionsChartComponent } from "./transactions-chart";
import { darkTheme } from "@/themes";
import { pie } from "@/mocks/transactions";

export default {
	title: "Modules/TransactionsChart",
	component: TransactionsChartComponent,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof darkTheme => {
	return object("Theme", darkTheme, "Theme");
};

const getData = (): typeof pie => {
	return object("Data", pie, "Data");
};

export const ExampleTransactionsChart: React.FC = () => {
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
			<TransactionsChartComponent pieChartData={getData()} />
		</div>
	);
};
