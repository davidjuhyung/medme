import React from 'react';
const Tag = ({ tagNames }) => {
	return (
		<div className="tag">
			{tagNames
				? tagNames.map(tag => (
						<div key={Math.random()} className="chip">
							{tag}
						</div>
				  ))
				: null}
		</div>
	);
};

export default Tag;
