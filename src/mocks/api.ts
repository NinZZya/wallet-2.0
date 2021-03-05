// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FirebaseMock } from "firebase-mock-js";
import { transactions } from "./transactions";

const database = {
	transactions,
};

export const firebaseMock = new FirebaseMock(database);
