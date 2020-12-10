import React, { useState } from "react";
import styled from 'styled-components';
import Header from "./components/Header";
import Entry from "./components/Entry";
import Result from "./components/Result";

import { cacheInterval } from "./constants";

const InvilinkWrapper = styled.div`
	background: #1b1b1b;
	border: 0;
	color: rgba(255, 255, 255, 0.87);
	font-family: sans-serif;
	font-size: 100%;
	height: 100vh;
	outline: 0;
	overflow-y: hidden;
	margin: 0;
	padding: 0;
	width: 100%;
`;

async function getGoodInstances(remoteUrl) {
	const endpoint = remoteUrl || "https://instances.invidio.us/instances.json";
	const response = await fetch(endpoint);
	const instancesData = await response.json();
	return (
		instancesData &&
		instancesData
			.filter(
				(instanceData) =>
					instanceData[1].stats &&
					instanceData[1].stats.version &&
					instanceData[1].monitor &&
					instanceData[1].monitor.statusClass === "success"
			)
			.map((successInstance) => successInstance[1].uri)
	);
}

function shouldCache(lastFetch) {
	const interval = cacheInterval || 10000;
	const now = new Date().getTime();
	return now - lastFetch <= interval;
}

const timestamp = () => new Date().getTime();

function Invidilink() {
	const [url, setUrl] = useState("");
	const [goodInstances, setGoodInstances] = useState([]);
	const [dataTime, setDataTime] = useState(timestamp() - 1000 * 1000);
	const handleClear = () => {
		setUrl("");
		setGoodInstances([]);
	};

	const handleLinkSubmit = async () => {
		/* https://www.youtube.com/watch?v=mxK8b99iJTg */
		if (!goodInstances || !shouldCache(dataTime)) {
			console.log("retrieving remote data.");
			const goodInstancesResult = await getGoodInstances();
			console.log(goodInstancesResult);
			setGoodInstances(goodInstancesResult || []);
			setDataTime(timestamp());
		} else {
			console.log("using cache");
			console.log(goodInstances, dataTime);
		}
	};

	return (
		<InvilinkWrapper>
			<Header />
			<Entry handleSubmit={handleLinkSubmit} setUrl={setUrl} url={url} />
			<Result
				goodUrls={goodInstances}
				url={url}
				handleClear={handleClear}
			/>
		</InvilinkWrapper>
	);
}

export default Invidilink;
