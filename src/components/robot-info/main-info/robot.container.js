import React, { useState, useEffect } from 'react';
import WithCollapsible from '../../hoc/collapsible/withCollapsible.component';
import RobotExpanded from '../more-info/robot-expanded.component';
import ExpandButtonContainer from '../../buttons/expand-button/expand-button.container';
import Robot from './robot.component';

const RobotExpandedWithCollapsible = WithCollapsible(RobotExpanded);

const RobotContainer = ({
	tags,
	findRobotByIdAndUpdateTags,
	id,
	pic,
	grades,
	...otherProps
}) => {
	const [isClicked, setIsClicked] = useState(false);
	const [input, setInput] = useState('');
	const [tagNames, setTagNames] = useState(tags || []);

	useEffect(() => {
		findRobotByIdAndUpdateTags(id, tagNames);
	}, [findRobotByIdAndUpdateTags, id, tagNames]);

	const findTagByNameAndRemoveTag = tag => {
		const newTagNames = tagNames.filter(tagName => tagName !== tag);
		console.log(newTagNames);
		setTagNames(newTagNames);
	};

	const handleOnClick = () => {
		setIsClicked(!isClicked);
	};

	const handleOnChange = inputValue => {
		setInput(inputValue);
	};

	const handleOnKeyPress = key => {
		if (key === 'Enter') {
			if (tagNames && tagNames.includes(input)) {
				alert('Already exists!');
			} else if (input === '') {
				alert('Please enter a valid tag');
			} else {
				console.log(input);
				setTagNames([...tagNames, input]);
				setInput('');
			}
		}
	};

	const average =
		grades.reduce((acc, grade) => acc + Number(grade), 0) / grades.length;

	return (
		<div className="robot">
			<div className="row">
				<div className="col s12 col-height">
					<div className="col s2">
						<img className="circle" src={pic} alt="robots"></img>
					</div>
					<div className="col s7 offset-s1">
						<Robot average={average} {...otherProps} />
						<RobotExpandedWithCollapsible
							collapsible={isClicked}
							grades={grades}
							handleOnChange={handleOnChange}
							handleOnKeyPress={handleOnKeyPress}
							id={id}
							tagNames={tagNames}
							input={input}
							findTagByNameAndRemoveTag={findTagByNameAndRemoveTag}
						/>
					</div>
					<div className="col s1">
						<ExpandButtonContainer
							clicked={isClicked}
							handleOnClick={handleOnClick}
						/>
					</div>
				</div>
			</div>
			<div className="divider"></div>
		</div>
	);
};

export default React.memo(RobotContainer);
