import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles';

// return a component
const WithSpinner = WrappedComponent => ({
	isLoading,
	isError,
	...otherProps
}) => {
	if (isError) {
		return <div>Something Went Wrong!</div>;
	}

	if (isLoading) {
		return (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		);
	} else {
		return <WrappedComponent {...otherProps} />;
	}
};

export default WithSpinner;
