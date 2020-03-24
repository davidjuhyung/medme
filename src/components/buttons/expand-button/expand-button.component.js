import React from 'react';
import { ExpandButtonStyles } from './expand-button.styles';

const ExpandButton = ({ title, handleOnClick }) => {
	return (
		<ExpandButtonStyles>
			<i className="medium material-icons expand-btn" onClick={handleOnClick}>
				{title}
			</i>
		</ExpandButtonStyles>
	);
};

export default ExpandButton;
