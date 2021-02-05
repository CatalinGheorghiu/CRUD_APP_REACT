import {useEffect, useState} from "react";

const useFetch = (url) => {
	
	const [data, setData] = useState();
	const [isPending, setIsPending] = useState(true);
	
	useEffect(() => {
		const abortController = new AbortController();
		try {
			(async () => {
				// setTimeout( () => {
				const res = await fetch(url, {signal: abortController.signal});
				const data = await res.json();
				setData(data);
				setIsPending(false);
				// }, 100);
			})();
			
		} catch (err) {
			if (err.name === "AbortError") {
				setData(null);
			}
			console.error(err);
		}
		return () => abortController.abort();
	},[url]);
	return {data, isPending};
};

export default useFetch;
