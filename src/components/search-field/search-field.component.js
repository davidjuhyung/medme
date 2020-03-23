import React from 'react';

const SearchField = ({ id, type, placeholder, input, onInputChange }) => {
	return (
		<div className="row input-field">
			<div className="input-field col s12">
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					value={input}
					onChange={e => onInputChange(e.target)}
				/>
			</div>
		</div>
	);
};

export default SearchField;
