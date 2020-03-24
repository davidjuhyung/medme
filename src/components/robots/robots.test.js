import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';
import RobotsContainer from './robots.container';

test('robots appear and the first robots last name is Orton', async () => {
	const { getAllByTestId, getByTestId } = render(<RobotsContainer />);
	expect.assertions(2);
	// wait for appearance
	await wait(() => {
		expect(getByTestId('robots-container')).toBeInTheDocument();
	});
	const robots = await waitForElement(() => getAllByTestId('robot-main-info'));
	expect(robots[0].textContent).toMatch(/ORTON/);
});
