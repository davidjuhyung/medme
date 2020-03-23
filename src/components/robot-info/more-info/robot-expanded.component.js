import Grades from '../grades/grades.component';
import Tag from '../tags/tag.component';
import AddButton from '../../buttons/add-button/add-button.component';
import React from 'react';
const RobotExpanded = ({
	grades,
	handleOnChange,
	handleOnKeyPress,
	tagNames,
	input,
	findTagByNameAndRemoveTag
}) => {
	return (
		<div>
			<Grades grades={grades}></Grades>
			<Tag
				tagNames={tagNames}
				findTagByNameAndRemoveTag={findTagByNameAndRemoveTag}
			></Tag>
			<AddButton
				id="tags"
				type="text"
				placeholder="Add a tag"
				input={input}
				handleOnChange={handleOnChange}
				handleOnKeyPress={handleOnKeyPress}
			></AddButton>
		</div>
	);
};

export default RobotExpanded;
