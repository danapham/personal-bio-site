import axios from 'axios';

const baseUrl = 'https://danapham-d07e3.firebaseio.com/';

const objToArray = (objOfObjs) => {
  const array = [];
  Object.keys(objOfObjs).forEach((key) => {
    array.push(objOfObjs[key]);
  });
  return array;
};

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((res) => resolve(objToArray(res)))
    .catch((error) => reject(error));
});

export default { getProjects };
