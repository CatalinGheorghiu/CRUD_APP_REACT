import {useEffect, useState} from "react";

const useFetch = (url) => {
	const [data, setData] = useState();
	const [isPending, setIsPending] = useState(true);
	
	useEffect(() => {
		try {
			setTimeout(async () => {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				setIsPending(false);
			}, 1000);
		} catch (err) {
			console.error(err);
		}
		
	}, [url]);
	return {data, isPending};
};

export default useFetch;
