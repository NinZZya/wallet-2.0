import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object, optionsKnob } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { TableComponent } from "./table";
import { darkTheme } from "@/themes";
import { transactions } from "@/mocks/transactions";
import { DataStatus } from "@/redux/transactions";

export default {
	title: "Modules/TransactionList/components/Table",
	component: TableComponent,
	decorators: [withKnobs],
} as Meta;

const getStatus = (): DataStatus => {
	return optionsKnob("Status", DataStatus, DataStatus.SUCCESSED, {
		display: "select",
	});
};

const getItems = (): typeof transactions => {
	return object("Items", transactions, "Items");
};

const getTheme = (): typeof darkTheme => {
	return object("Theme", darkTheme, "Theme");
};

export const ExampleTable: React.FC = () => {
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
			<TableComponent
				transactions={getItems()}
				status={getStatus()}
				delTransaction={action("clicked")}
			/>
		</div>
	);
};
