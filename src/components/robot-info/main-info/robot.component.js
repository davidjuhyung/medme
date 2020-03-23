import React from 'react';
const Robot = ({ firstName, lastName, email, company, skill, average }) => {
	return (
		<div>
			<h3>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h3>
			<p>Email: {email}</p>
			<p>Company: {company}</p>
			<p>Skill: {skill}</p>
			<p>Average: {`${average}%`}</p>
		</div>
	);
};

export default Robot;
