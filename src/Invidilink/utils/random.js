const randomListItem = (list) => Math.floor(Math.random() * list.length);
const getRandomListItem = (list) => list[randomListItem(list)];

export { getRandomListItem };
