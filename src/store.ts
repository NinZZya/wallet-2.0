import { combineReducers } from "redux";
import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";

import { transactionsSlice } from "./redux/transactions/slice";
import { getTransactionsModule } from "./redux/transactions/module";

const reducer = combineReducers({
	transactions: transactionsSlice.reducer,
});

export type State = ReturnType<typeof reducer>;

export const store = createStore<State>(
	{ extensions: [getSagaExtension({})] },
	getTransactionsModule()
);
