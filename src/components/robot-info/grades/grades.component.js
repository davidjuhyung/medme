import React, { Component } from 'react';

class Grades extends Component {
	state = {
		counter: 0
	};

	render() {
		let { counter } = this.state;
		const { grades } = this.props;
		return (
			<div>
				{grades
					? grades.map(grade => (
							<div key={counter} className="grades">
								<span>
									{`Test ${++counter}:`} &nbsp; &nbsp; {`${grade}%`}
								</span>{' '}
								<br />
							</div>
					  ))
					: null}
			</div>
		);
	}
}

export default Grades;
