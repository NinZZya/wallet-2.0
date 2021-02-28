import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { DataLoader } from "@/components/data-loader";
import { State } from "@/store";
import { actions, selectors, DataStatus } from "@/redux/transactions";

export const UID = "eiOd7O7utANQTyEWiAJABj0x0012";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapStateToProps = (state: State) => {
	return {
		status: selectors.selectStatus(state),
		error: selectors.selectError(state),
	};
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		getTransactions: () => {
			dispatch(actions.getTransactions(UID));
		},
	};
};

type Prop = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> & { children: JSX.Element };

export const TransactionsDataLoaderComponent: React.FC<Prop> = (props) => {
	const { children, getTransactions, status, error } = props;

	return (
		<DataLoader
			getData={getTransactions}
			isLoading={status == DataStatus.LOADING}
			isError={status == DataStatus.FAILED}
			error={error}
		>
			{children}
		</DataLoader>
	);
};

export const TransactionsDataLoader = connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionsDataLoaderComponent);
