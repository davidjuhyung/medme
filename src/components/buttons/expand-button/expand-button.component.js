import React from 'react';

const ExpandButton = ({ title, handleOnClick }) => {
	return (
		<i className="medium material-icons expand-btn" onClick={handleOnClick}>
			{title}
		</i>
	);
};

export default ExpandButton;
