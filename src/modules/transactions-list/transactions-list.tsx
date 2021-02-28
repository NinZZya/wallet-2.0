import React from "react";
import { connect } from "react-redux";

import { ErrorBoundary } from "@/components/error-boundry";
import { Table } from "./components/table";
import { EmptyDataMessage } from "@/components/empty-data-message";
import { selectors } from "@/redux/transactions";
import { State } from "@/store";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapStateToProps = (state: State) => {
	return {
		transactions: selectors.selectTransactions(state),
	};
};

type Prop = ReturnType<typeof mapStateToProps>;

export const TransactionsListComponent: React.FC<Prop> = (props) => {
	const { transactions } = props;

	return (
		<ErrorBoundary>
			{transactions.length ? <Table /> : <EmptyDataMessage />}
		</ErrorBoundary>
	);
};

export const TransactionsList = connect(mapStateToProps)(
	TransactionsListComponent
);
