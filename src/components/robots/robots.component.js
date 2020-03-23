import React, { useState } from 'react';
import RobotContainer from '../robot-info/main-info/robot.container';
import SearchField from '../search-field/search-field.component';

const Robots = ({ robots }) => {
	const [input, setInput] = useState({
		inputRobots: '',
		inputTags: ''
	});

	const { inputRobots, inputTags } = input;

	const findRobotByIdAndUpdateTags = (id, tags) => {
		robots.find(robot => robot.id === id).tags = tags;
	};

	const isTagIncluded = (tags, input) => {
		if (input) {
			if (!tags) return false;
			const newTags = tags.filter(elem =>
				elem.toUpperCase().includes(input.toUpperCase())
			);
			return newTags.length ? true : false;
		} else {
			return true;
		}
	};

	const handleOnChange = inputValue => {
		const inputState =
			inputValue.id.slice(0, 4) === 'name' ? 'inputRobots' : 'inputTags';

		setInput({ ...input, [inputState]: inputValue.value });
	};

	const filteredRobots = robots.filter(
		robot =>
			(robot.firstName.toUpperCase().includes(inputRobots.toUpperCase()) ||
				robot.lastName.toUpperCase().includes(inputRobots.toUpperCase())) &&
			isTagIncluded(robot.tags, inputTags)
	);

	return (
		<div className="container z-depth-3">
			<SearchField
				id="name-input"
				type="text"
				placeholder="Search by name"
				input={inputRobots}
				onInputChange={handleOnChange}
			/>
			<SearchField
				id="tag-input"
				type="text"
				placeholder="Search by tags"
				input={inputTags}
				onInputChange={handleOnChange}
			/>
			{filteredRobots.map(({ id, ...otherProps }) => (
				<RobotContainer
					key={id}
					id={id}
					{...otherProps}
					findRobotByIdAndUpdateTags={findRobotByIdAndUpdateTags}
				></RobotContainer>
			))}
		</div>
	);
};

export default Robots;
