import React, { useState } from 'react';
import Header from './components/Header';
import Entry from './components/Entry';
import Result from './components/Result';

import { cacheInterval } from './constants';

async function getGoodInstances(remoteUrl) {
  const endpoint = remoteUrl || 'https://instances.invidio.us/instances.json';
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
          instanceData[1].monitor.statusClass === 'success'
      )
      .map((successInstance) => successInstance[1].uri)
  );
}

function useCache(lastFetch) {
  const interval = cacheInterval || 10000;
  const now = new Date().getTime();
  return now - lastFetch <= interval;
}

const timestamp = () => new Date().getTime();

function Invidilink() {
  const [url, setUrl] = useState('');
  const [goodInstances, setGoodInstances] = useState([]);
  const [dataTime, setDataTime] = useState(timestamp() - 1000 * 1000);

  const [newUrl, setNewUrl] = useState('');
  const handleClear = () => {
    setUrl('');
    setGoodInstances([]);
  };


  const handleLinkSubmit = async () => {
    /* https://www.youtube.com/watch?v=mxK8b99iJTg */
    if (!goodInstances || !useCache(dataTime)) {
      console.log('retrieving remote data.');
      const goodInstancesResult = await getGoodInstances();
      console.log(goodInstancesResult);
      setGoodInstances(goodInstancesResult || []);
      setDataTime(timestamp());
    } else {
      console.log('using cache');
      console.log(goodInstances, dataTime);
    }
  };

  return (
    <>
      <Header />
      <Entry handleSubmit={handleLinkSubmit} setUrl={setUrl} url={url} />
      <Result goodUrls={goodInstances} url={url} handleClear={handleClear} />
    </>
  );
}

export default Invidilink;
