import React from "react";
import styled from "@emotion/styled";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { Row } from "./row";
import { actions, selectors } from "@/redux/transactions";
import { State } from "@/store";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapStateToProps = (state: State) => {
	return {
		status: selectors.selectStatus(state),
		transactions: selectors.selectTransactions(state),
	};
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		delTransaction: (id: string) => {
			dispatch(actions.delTransaction(id));
		},
	};
};

type Prop = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export const TableComponent: React.FC<Prop> = (props) => {
	const { status, transactions, delTransaction } = props;

	return (
		<Wrapper>
			{transactions.map((item) => {
				return (
					<Row
						key={item.id}
						item={item}
						status={status}
						delTransaction={delTransaction}
					/>
				);
			})}
		</Wrapper>
	);
};

export const Table = connect(
	mapStateToProps,
	mapDispatchToProps
)(TableComponent);
