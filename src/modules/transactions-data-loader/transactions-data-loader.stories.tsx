import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { withKnobs, object } from "@storybook/addon-knobs";

import { TransactionsDataLoaderComponent } from "./transactions-data-loader";
import { darkTheme } from "@/themes";
import { DataStatus } from "@/redux/transactions";

export default {
	title: "Modules/TransactionsDataLoader",
	component: TransactionsDataLoaderComponent,
	decorators: [withKnobs],
} as Meta;

const getTheme = (): typeof darkTheme => {
	return object("Theme", darkTheme, "Theme");
};

const Test = () => <div>If you see this then data loaded</div>;
const testing = (a?: never) => a;

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
			<TransactionsDataLoaderComponent
				status={DataStatus.LOADING}
				error=""
				getTransactions={testing}
			>
				<Test />
			</TransactionsDataLoaderComponent>
		</div>
	);
};

export const TransactionsDataLoaderSucssed: React.FC = () => {
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
			<TransactionsDataLoaderComponent
				status={DataStatus.SUCCESSED}
				error=""
				getTransactions={testing}
			>
				<Test />
			</TransactionsDataLoaderComponent>
		</div>
	);
};

export const TransactionsDataLoaderFailed: React.FC = () => {
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
			<TransactionsDataLoaderComponent
				status={DataStatus.FAILED}
				error=""
				getTransactions={testing}
			>
				<Test />
			</TransactionsDataLoaderComponent>
		</div>
	);
};
