import React from 'react';

const Grades = ({ grades }) => {
	let counter = 0;
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
};

export default React.memo(Grades);
