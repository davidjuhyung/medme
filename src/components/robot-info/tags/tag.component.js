import React from 'react';
const Tag = ({ tagNames, findTagByNameAndRemoveTag }) => {
	return (
		<div className="tag">
			{tagNames
				? tagNames.map(tag => (
						<div key={Math.random()} className="chip">
							{tag}
							<i
								className="close material-icons"
								onClick={() => findTagByNameAndRemoveTag(tag)}
							>
								close
							</i>
						</div>
				  ))
				: null}
		</div>
	);
};

export default Tag;
