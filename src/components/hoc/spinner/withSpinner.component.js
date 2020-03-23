import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles';

// return a component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;
