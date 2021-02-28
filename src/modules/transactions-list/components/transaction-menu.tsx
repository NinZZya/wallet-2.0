import React from "react";
import {
	DropdownButton as Menu,
	DropdownButtonItem as MenuItem,
} from "@/components/buttons/dropdown-button";
import { DataStatus } from "@/redux/transactions";

interface Item {
	id: string;
}

interface Prop {
	item: Item;
	status: DataStatus;
	delTransaction(id: string): void;
}

export const TransactionMenu: React.FC<Prop> = (props) => {
	const { item, status, delTransaction } = props;
	return (
		<Menu name={<span>&#8942;</span>}>
			{status !== DataStatus.SENDING ? (
				<MenuItem
					key={`${item.id}-item`}
					onClick={() => delTransaction(item.id)}
				>
					&#10060;Удалить
				</MenuItem>
			) : (
				<MenuItem key={`${item.id}-item`}>&#10060;Удаление...</MenuItem>
			)}
		</Menu>
	);
};
