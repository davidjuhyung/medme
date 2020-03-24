import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles';

// return a component
const WithSpinner = WrappedComponent => ({
	isLoading,
	isError,
	...otherProps
}) => {
	if (isError) {
		return <div data-testid="error">Something Went Wrong!</div>;
	}

	if (isLoading) {
		return (
			<SpinnerOverlay data-testid="loading">
				<SpinnerContainer />
			</SpinnerOverlay>
		);
	} else {
		return <WrappedComponent {...otherProps} />;
	}
};

export default WithSpinner;
