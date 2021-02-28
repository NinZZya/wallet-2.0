import React, { useEffect } from "react";
import { Loader } from "../loader";
import { Error } from "./components/error";

interface Prop {
	getData<T>(args?: T): void;
	isLoading: boolean;
	isError: boolean;
	error?: string;
	children: JSX.Element;
}

export const DataLoader: React.FC<Prop> = (props) => {
	const { getData, isLoading, isError, error = "", children } = props;

	useEffect(() => {
		getData();
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <Error text={error} />;
	}

	return <>{children}</>;
};
