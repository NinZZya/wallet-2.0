import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { DropdownButton } from "./dropdown-button";
import { DropdownButtonItem } from "./components/dropdown-button-item";

configure({ adapter: new Adapter() });

describe("DropdownButton", () => {
	it("DropdownButton/work correctly", () => {
		const onClick = jest.fn();

		const wrapper = mount(
			<DropdownButton name="Test button">
				<DropdownButtonItem onClick={onClick}>Test item</DropdownButtonItem>
			</DropdownButton>
		);

		const button = wrapper.find("button");
		button.simulate("click");

		const menu = wrapper.find("ul");
		const item = menu.find("li");
		item.simulate("click");

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
