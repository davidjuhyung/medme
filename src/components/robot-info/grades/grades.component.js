import React from 'react';
import { GradesContainer, GradeContainer } from './grades.styles';

const Grades = ({ grades }) => {
	let counter = 0;
	return (
		<GradesContainer>
			{grades
				? grades.map(grade => (
						<GradeContainer key={counter}>
							<span>
								{`Test ${++counter}:`} &nbsp; &nbsp; {`${grade}%`}
							</span>{' '}
							<br />
							<h1> Hello</h1>
						</GradeContainer>
				  ))
				: null}
		</GradesContainer>
	);
};

export default React.memo(Grades);
