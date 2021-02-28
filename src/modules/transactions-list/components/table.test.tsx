import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mapStateToProps, mapDispatchToProps } from "./table";
import { actions } from "@/redux/transactions";
import { initialState } from "@/redux/transactions/slice";

configure({ adapter: new Adapter() });

describe("Table", () => {
	it("Table/mapStateToProps", () => {
		const mockStore = {
			transactions: {
				...initialState,
			},
		};
		expect(mapStateToProps(mockStore)).toEqual({
			status: initialState.status,
			transactions: initialState.transactions,
		});
	});

	it("Table/mapDispatchToProps", () => {
		const dispatch = jest.fn();
		const ID = "t1";
		mapDispatchToProps(dispatch).delTransaction(ID);
		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith({
			type: actions.delTransaction.type,
			payload: ID,
		});
	});
});
