import React, { Component } from 'react';
import WithCollapsible from '../../hoc/collapsible/withCollapsible.component';
import RobotExpanded from '../more-info/robot-expanded.component';
import ExpandButtonContainer from '../../buttons/expand-button/expand-button.container';
import Robot from './robot.component';

const RobotExpandedWithCollapsible = WithCollapsible(RobotExpanded);

class RobotContainer extends Component {
	state = {
		clicked: false,
		input: '',
		tagNames: this.props.tags || [] // since we only modify tagNames in handleOnKeyPress,
		// when tags are modified, we need to make sure tagNames are in sync with tags as well
	};

	handleOnClick = () => {
		this.setState({
			clicked: !this.state.clicked
		});
	};

	handleOnChange = input => {
		this.setState({
			input: input
		});
	};

	handleOnKeyPress = key => {
		let { tagNames, input } = this.state;
		let { findRobotByIdAndUpdateTags, id } = this.props;
		if (key === 'Enter') {
			if (tagNames && tagNames.includes(input)) {
				alert('Already exists!');
			} else {
				console.log(input);

				this.setState(
					{
						tagNames: [...tagNames, input],
						input: ''
					},
					() => {
						// tell the parent component there is a new tag for this robot
						findRobotByIdAndUpdateTags(id, this.state.tagNames);
					}
				);
			}
		}
	};
	render() {
		const { pic, grades, id } = this.props;
		let { clicked, tagNames, input } = this.state;
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
							<Robot average={average} {...this.props} />
							<RobotExpandedWithCollapsible
								collapsible={clicked}
								grades={grades}
								handleOnChange={this.handleOnChange}
								handleOnKeyPress={this.handleOnKeyPress}
								id={id}
								tagNames={tagNames}
								input={input}
							/>
						</div>
						<div className="col s1">
							<ExpandButtonContainer
								clicked={clicked}
								handleOnClick={this.handleOnClick}
							/>
						</div>
					</div>
				</div>
				<div className="divider"></div>
			</div>
		);
	}
}

export default RobotContainer;
