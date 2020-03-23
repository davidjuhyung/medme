import React from 'react';

// return a component
const WithCollapsible = WrappedComponent => ({
	collapsible,
	...otherProps
}) => {
	return collapsible ? <WrappedComponent {...otherProps} /> : null;
};

export default WithCollapsible;
