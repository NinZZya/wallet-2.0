import React, { Component } from "react";
import { ErrorMessage } from "./error-message";

export interface Prop {
	children: JSX.Element;
}

export class ErrorBoundary extends Component<Prop> {
	state = {
		hasError: false,
	};

	componentDidCatch(): void {
		this.setState({
			hasError: true,
		});
	}

	render(): JSX.Element {
		if (this.state.hasError) {
			return <ErrorMessage />;
		}

		return this.props.children;
	}
}
