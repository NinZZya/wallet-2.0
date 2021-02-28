import firebase from "firebase";

export type WhereData = null | {
	field: string;
	sign: string;
	value: string | number | boolean | null;
};

export interface Collection {
	ids: string[];
	data: Record<string, string | number | boolean>[];
}

export interface Database {
	[key: string]: Collection;
}

export interface Doc {
	id: string;
	data(): Record<string, string | number | boolean>;
}

export interface Snapshot {
	docs: Doc[];
}

const response = new Promise((res) => setTimeout(res, 100));

export class FirestoreMock {
	private whereData: WhereData;
	private collectionName: string;
	private database: Database;
	private docId: string;

	constructor(database?: Database) {
		this.whereData = null;
		this.collectionName = "";
		this.docId = "";
		this.database = database || {};
	}

	where = (
		field: string,
		sign: string,
		value: string | number | boolean
	): this => {
		this.whereData = { field, sign, value };
		return this;
	};

	setDatabase = (database: Database): void => {
		this.database = database;
	};

	setCollection = (collectionName: string, collection: Collection): void => {
		this.database[collectionName] = collection;
	};

	collection = (name: string): this => {
		this.collectionName = name;
		return this;
	};

	doc = (docId: string): this => {
		this.docId = docId;
		return this;
	};

	delete = (): firebase.firestore.DocumentData => {
		const collection = this.database[this.collectionName];
		const indexId = collection.ids.indexOf(this.docId);
		collection.ids = collection.ids.filter((item) => item !== this.docId);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		collection.data = collection.data.filter((_, index) => index !== indexId);
		return response;
	};

	get = (): firebase.firestore.DocumentData => {
		const { ids, data } = this.database[this.collectionName];
		const { field = "", sign = "", value = null } = this.whereData || {};

		const snapshot: Snapshot = { docs: [] };

		snapshot.docs = ids.reduce((acc: Doc[], id, index) => {
			let valid = false;
			switch (sign) {
				case "===":
					if (data[index][field] === value) {
						valid = true;
					}
					break;

				case "!==":
					if (data[index][field] !== value) {
						valid = true;
					}
					break;

				case ">=":
					if (value !== null && data[index][field] >= value) {
						valid = true;
					}
					break;

				case "<=":
					if (value !== null && data[index][field] <= value) {
						valid = true;
					}
					break;

				case ">":
					if (value !== null && data[index][field] > value) {
						valid = true;
					}
					break;

				case "<":
					if (value !== null && data[index][field] < value) {
						valid = true;
					}
					break;

				default:
					valid = true;
			}

			if (valid) {
				const item = {
					id,
					data: () => data[index],
				};

				acc.push(item);
			}

			return acc;
		}, []);

		this.whereData = null;
		this.collectionName = "";

		return response.then(() => snapshot);
	};
}
