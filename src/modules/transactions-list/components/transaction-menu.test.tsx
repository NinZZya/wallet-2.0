import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TransactionMenu } from "./transaction-menu";
import { transactions } from "@/mocks/transactions";
import { DataStatus } from "@/redux/transactions";

configure({ adapter: new Adapter() });

describe("TransactionMenu", () => {
	it("TransactionMenu/status is SENDING", () => {
		const delTransaction = jest.fn();
		const transaction = transactions[0];

		const wrapper = mount(
			<TransactionMenu
				item={transaction}
				status={DataStatus.SENDING}
				delTransaction={delTransaction}
			/>
		);
		expect(wrapper.find("li").text()).toBe("❌Удаление...");
	});

	it("TransactionMenu/status is not SENDING", () => {
		const delTransaction = jest.fn();
		const transaction = transactions[0];

		const wrapper = mount(
			<TransactionMenu
				item={transaction}
				status={DataStatus.SUCCESSED}
				delTransaction={delTransaction}
			/>
		);
		expect(wrapper.find("li").text()).toBe("❌Удалить");
	});

	it("TransactionMenu/delTransaction", () => {
		const delTransaction = jest.fn();
		const transaction = transactions[0];

		const wrapper = mount(
			<TransactionMenu
				item={transaction}
				status={DataStatus.SUCCESSED}
				delTransaction={delTransaction}
			/>
		);

		const menuItem = wrapper.find("li");
		menuItem.simulate("click");
		expect(delTransaction).toHaveBeenCalledTimes(1);
		expect(delTransaction).toHaveBeenCalledWith(transaction.id);
	});
});
