import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
	TransactionDiapasonComponent,
	inputName,
	mapStateToProps,
	mapDispatchToProps,
} from "./transaction-diapason";
import { initialState } from "@/redux/transactions/slice";
import { actions } from "@/redux/transactions";

configure({ adapter: new Adapter() });
const START = "2021-02-13";
const END = "2021-02-14";

describe("TransactionsDataLoaderComponent", () => {
	it("TransactionDiapasonComponent/setStartDate/setEndDate", () => {
		const setStartDate = jest.fn();
		const setEndDate = jest.fn();

		const wrapper = mount(
			<TransactionDiapasonComponent
				start={new Date()}
				setStartDate={setStartDate}
				end={new Date()}
				setEndDate={setEndDate}
			/>
		);

		const form = wrapper.find("form");
		const start = wrapper.find("input").at(0);
		const end = wrapper.find("input").at(1);

		start.simulate("change", {
			target: {
				name: inputName.start,
				value: START,
			},
		});

		end.simulate("change", {
			target: {
				name: inputName.end,
				value: END,
			},
		});

		form.simulate("submit", {
			preventDefault() {
				jest.fn();
			},
		});

		expect(setStartDate).toHaveBeenCalledTimes(1);
		expect(setStartDate).toHaveBeenCalledWith(new Date(`${START} 00:00:00`));

		expect(setEndDate).toHaveBeenCalledTimes(1);
		expect(setEndDate).toHaveBeenCalledWith(new Date(`${END} 23:59:59`));
	});

	it("TransactionDiapason/mapStateToProps", () => {
		const mockStore = {
			transactions: {
				...initialState,
			},
		};
		expect(mapStateToProps(mockStore)).toEqual({
			start: initialState.start,
			end: initialState.end,
		});
	});

	it("TransactionDiapason/mapDispatchToProps", () => {
		const dispatch = jest.fn();
		const DATE = new Date();

		mapDispatchToProps(dispatch).setStartDate(DATE);
		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith({
			type: actions.setStartDate.type,
			payload: DATE,
		});

		mapDispatchToProps(dispatch).setEndDate(DATE);
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenCalledWith({
			type: actions.setEndDate.type,
			payload: DATE,
		});
	});
});
