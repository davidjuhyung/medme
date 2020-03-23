import React, { Component } from 'react';
import RobotContainer from '../robot-info/main-info/robot.container';
import SearchField from '../search-field/search-field.component';

class Robots extends Component {
	state = {
		inputRobots: '',
		inputTags: ''
	};

	findRobotByIdAndUpdateTags = (id, tags) => {
		const { robots } = this.props;
		robots.find(robot => robot.id === id).tags = tags;
	};

	isTagIncluded = (tags, input) => {
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

	handleOnChange = input => {
		const inputState =
			input.id.slice(0, 4) === 'name' ? 'inputRobots' : 'inputTags';

		this.setState({
			[inputState]: input.value
		});
	};

	render() {
		const { inputRobots, inputTags } = this.state;
		const { robots } = this.props;
		const filteredRobots = robots.filter(
			robot =>
				(robot.firstName.toUpperCase().includes(inputRobots.toUpperCase()) ||
					robot.lastName.toUpperCase().includes(inputRobots.toUpperCase())) &&
				this.isTagIncluded(robot.tags, inputTags)
		);

		return (
			<div className="container z-depth-3">
				<SearchField
					id="name-input"
					type="text"
					placeholder="Search by name"
					input={inputRobots}
					onInputChange={this.handleOnChange}
				/>
				<SearchField
					id="tag-input"
					type="text"
					placeholder="Search by tags"
					input={inputTags}
					onInputChange={this.handleOnChange}
				/>
				{filteredRobots.map(({ id, ...otherProps }) => (
					<RobotContainer
						key={id}
						id={id}
						{...otherProps}
						findRobotByIdAndUpdateTags={this.findRobotByIdAndUpdateTags}
					></RobotContainer>
				))}
			</div>
		);
	}
}

export default Robots;
