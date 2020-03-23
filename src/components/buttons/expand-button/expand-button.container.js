import ExpandButton from './expand-button.component';
import React from 'react';

const ExpandButtonContainer = ({ clicked, handleOnClick }) => {
	const title = clicked ? 'remove' : 'add';
	return (
		<ExpandButton title={title} handleOnClick={handleOnClick}></ExpandButton>
	);
};

export default ExpandButtonContainer;
