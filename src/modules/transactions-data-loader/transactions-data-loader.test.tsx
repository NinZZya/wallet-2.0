import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Loader } from "@/components/loader";
import { Error } from "@/components/data-loader";
import {
	TransactionsDataLoaderComponent,
	mapStateToProps,
	mapDispatchToProps,
	UID,
} from "./transactions-data-loader";
import { actions } from "@/redux/transactions";
import { DataStatus, initialState } from "@/redux/transactions/slice";

configure({ adapter: new Adapter() });

const ERROR = "ERROR";
const Test = () => <div>Test</div>;

describe("TransactionsDataLoaderComponent", () => {
	it("TransactionsDataLoaderComponent is loading", () => {
		const getTransactions = jest.fn();

		const wrapper = mount(
			<TransactionsDataLoaderComponent
				status={DataStatus.LOADING}
				error={""}
				getTransactions={getTransactions}
			>
				<Test />
			</TransactionsDataLoaderComponent>
		);

		expect(getTransactions).toHaveBeenCalledTimes(1);
		expect(wrapper.contains(<Loader />)).toBe(true);
	});

	it("TransactionsDataLoaderComponent is sucssed", () => {
		const getTransactions = jest.fn();

		const wrapper = mount(
			<TransactionsDataLoaderComponent
				status={DataStatus.SUCCESSED}
				error={""}
				getTransactions={getTransactions}
			>
				<Test />
			</TransactionsDataLoaderComponent>
		);

		expect(getTransactions).toHaveBeenCalledTimes(1);
		expect(wrapper.contains(<Test />)).toBe(true);
	});

	it("TransactionsDataLoaderComponent is failed", () => {
		const getTransactions = jest.fn();

		const wrapper = mount(
			<TransactionsDataLoaderComponent
				status={DataStatus.FAILED}
				error={ERROR}
				getTransactions={getTransactions}
			>
				<Test />
			</TransactionsDataLoaderComponent>
		);

		expect(getTransactions).toHaveBeenCalledTimes(1);
		expect(wrapper.contains(<Error text={ERROR} />)).toBe(true);
	});

	it("TransactionDiapason/mapStateToProps", () => {
		const mockStore = {
			transactions: {
				...initialState,
			},
		};
		expect(mapStateToProps(mockStore)).toEqual({
			status: initialState.status,
			error: initialState.error,
		});
	});

	it("TransactionDiapason/mapDispatchToProps", () => {
		const dispatch = jest.fn();

		mapDispatchToProps(dispatch).getTransactions();
		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith({
			type: actions.getTransactions.type,
			payload: UID,
		});
	});
});
