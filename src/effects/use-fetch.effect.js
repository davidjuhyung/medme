import { useState, useEffect } from 'react';

const useFetch = url => {
	const [data, setData] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const res = await fetch(url);
				const resJson = await res.json();
				setData(resJson.students);
			} catch (err) {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, [url]);

	return [data, isLoading, isError];
};

export default useFetch;
