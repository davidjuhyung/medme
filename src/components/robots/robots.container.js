import React from 'react';
import WithSpinner from '../hoc/spinner/withSpinner.component';
import Robots from './robots.component';
import useFetch from '../../effects/use-fetch.effect';

const RobotsWithSpinner = WithSpinner(Robots);

const RobotsContainer = () => {
	const url = 'https://www.hatchways.io/api/assessment/students';
	const [data, isLoading, isError] = useFetch(url);

	return (
		<RobotsWithSpinner
			robots={data}
			isLoading={isLoading}
			isError={isError}
		></RobotsWithSpinner>
	);
};

export default RobotsContainer;
