import { getRandomUrl } from "./http";

const randomListItem = (list) => Math.floor(Math.random() * list.length);
const getRandomListItem = (list) => list[randomListItem(list)];
const feelingLucky = (availableInstances, url) => () =>
  (document.location.href = getRandomUrl(availableInstances, url));

export { feelingLucky, getRandomListItem };
