import React from 'react';

const AddButton = ({
	id,
	type,
	placeholder,
	input,
	handleOnChange,
	handleOnKeyPress
}) => {
	return (
		<div className="tag-input">
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={input}
				onChange={e => handleOnChange(e.target.value)}
				onKeyPress={e => handleOnKeyPress(e.key)}
			/>
		</div>
	);
};

export default AddButton;
