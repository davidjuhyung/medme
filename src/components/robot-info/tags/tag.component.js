import React from 'react';
import { TagsContainer, NoTagContainer } from './tag.styles';

const Tag = ({ tagNames, findTagByNameAndRemoveTag }) => {
	return (
		<TagsContainer>
			{tagNames.length !== 0 ? (
				tagNames.map(tag => (
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
			) : (
				<NoTagContainer />
			)}
		</TagsContainer>
	);
};

export default Tag;
