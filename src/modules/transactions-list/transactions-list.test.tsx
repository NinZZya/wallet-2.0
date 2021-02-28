import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

import {
	TransactionsListComponent,
	mapStateToProps,
} from "./transactions-list";
import { EmptyDataMessage } from "@/components/empty-data-message";
import { initialState } from "@/redux/transactions/slice";
import { transactions } from "@/mocks/transactions";
import { store } from "@/store";

configure({ adapter: new Adapter() });

describe("TransactionsListComponent", () => {
	it("TransactionsListComponent with data", () => {
		const wrapper = mount(
			<Provider store={store}>
				<TransactionsListComponent transactions={transactions} />
			</Provider>
		);

		expect(wrapper.contains(<EmptyDataMessage />)).toBe(false);
	});

	it("TransactionsListComponent without data", () => {
		const wrapper = mount(<TransactionsListComponent transactions={[]} />);

		expect(wrapper.contains(<EmptyDataMessage />)).toBe(true);
	});

	it("TransactionsListComponent/mapStateToProps", () => {
		const mockStore = {
			transactions: {
				...initialState,
			},
		};
		expect(mapStateToProps(mockStore)).toEqual({
			transactions: initialState.transactions,
		});
	});
});
