import { FirestoreMock } from "./fierstore-mock";
import { transactionsColletion } from "./transactions";

const database = {
	transactions: transactionsColletion,
};

export const dbMock = new FirestoreMock(database);
