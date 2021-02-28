import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object, optionsKnob } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { TransactionMenu } from "./transaction-menu";
import { darkTheme } from "@/themes";
import { transactions } from "@/mocks/transactions";
import { DataStatus } from "@/redux/transactions";

export default {
	title: "Modules/TransactionList/components/TransactionMenu",
	component: TransactionMenu,
	decorators: [withKnobs],
} as Meta;

const getStatus = (): DataStatus => {
	return optionsKnob("Status", DataStatus, DataStatus.SUCCESSED, {
		display: "select",
	});
};

const getItem = (): typeof transactions[0] => {
	return object("Item", transactions[0], "Item");
};

const getTheme = (): typeof darkTheme => {
	return object("Theme", darkTheme, "Theme");
};

export const ExampleTransactionMenu: React.FC = () => {
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
			<TransactionMenu
				item={getItem()}
				status={getStatus()}
				delTransaction={action("clicked")}
			/>
		</div>
	);
};
