import React, { Component } from 'react';
import WithSpinner from '../hoc/spinner/withSpinner.component';
import Robots from './robots.component';

const RobotsWithSpinner = WithSpinner(Robots);

class RobotsContainer extends Component {
	state = {
		robots: [],
		isLoading: true
	};

	async componentDidMount() {
		const url = 'https://www.hatchways.io/api/assessment/students';
		const res = await fetch(url);
		const data = await res.json();
		const robots = data.students;
		this.setState({
			robots: robots,
			isLoading: false
		});
	}

	render() {
		return <RobotsWithSpinner {...this.state}></RobotsWithSpinner>;
	}
}

export default RobotsContainer;
