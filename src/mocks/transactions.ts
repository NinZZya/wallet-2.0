export const ids = ["t1", "t2", "t3", "t4", "t5", "t6", "t7"];
export const data = [
	{
		uid: "u1",
		type: "Дом",
		date: "Fri Feb 13 2021 12:00:00 GMT+0300 (Moscow Standard Time)",
		comment: "Коммунальные услуги",
		value: 5000,
	},
	{
		uid: "u1",
		type: "Прочее",
		date: "Fri Feb 13 2021 13:00:00 GMT+0300 (Moscow Standard Time)",
		comment: ":)",
		value: 7000,
	},
	{
		uid: "u1",
		type: "Прочее",
		date: "Sun Feb 14 2021 14:00:00 GMT+0300 (Moscow Standard Time)",
		comment: ":)",
		value: 8000,
	},
	{
		uid: "u1",
		type: "Продукты",
		date: "Sun Feb 14 2021 15:00:00 GMT+0300 (Moscow Standard Time)",
		comment: "Продукты на вечер",
		value: 3000,
	},
	{
		uid: "u1",
		type: "Одежда",
		date: "Mon Feb 15 2021 15:00:00 GMT+0300 (Moscow Standard Time)",
		comment: "Купил штаны",
		value: 1700,
	},
	{
		uid: "u1",
		type: "Продукты",
		date: "Mon Feb 15 2021 15:00:00 GMT+0300 (Moscow Standard Time)",
		comment: "Купил продукты",
		value: 1900,
	},
	{
		uid: "u1",
		type: "Кафе/ресторан",
		date: "Mon Feb 15 2021 15:00:00 GMT+0300 (Moscow Standard Time)",
		comment: "Перекусил после шопинга",
		value: 500,
	},
];

export const transactionsColletion = {
	ids,
	data,
};

export const transactions = [
	{
		id: "t1",
		uid: "u1",
		type: "Дом",
		date: new Date("Fri Feb 13 2021 12:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: "Коммунальные услуги",
		value: 5000,
	},
	{
		id: "t2",
		uid: "u1",
		type: "Прочее",
		date: new Date("Fri Feb 13 2021 13:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: ":)",
		value: 7000,
	},
	{
		id: "t3",
		uid: "u1",
		type: "Прочее",
		date: new Date("Sun Feb 14 2021 14:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: ":)",
		value: 8000,
	},
	{
		id: "t4",
		uid: "u1",
		type: "Продукты",
		date: new Date("Sun Feb 14 2021 15:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: "Продукты на вечер",
		value: 3000,
	},
	{
		id: "t5",
		uid: "u1",
		type: "Одежда",
		date: new Date("Mon Feb 15 2021 15:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: "Купил штаны",
		value: 1700,
	},
	{
		id: "t6",
		uid: "u1",
		type: "Продукты",
		date: new Date("Mon Feb 15 2021 15:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: "Купил продукты",
		value: 1900,
	},
	{
		id: "t7",
		uid: "u1",
		type: "Кафе/ресторан",
		date: new Date("Mon Feb 15 2021 15:00:00 GMT+0300 (Moscow Standard Time)"),
		comment: "Перекусил после шопинга",
		value: 500,
	},
];

export const pie = {
	labels: ["Дом", "Прочее", "Продукты", "Одежда", "Кафе/ресторан"],
	values: [5000, 15000, 4900, 1700, 500],
};
