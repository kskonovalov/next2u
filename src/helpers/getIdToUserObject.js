/**
 * returns object with list of users, where key is user's id
 *
 * @param users
 */
const getIdToUserObject = users => {
  const usersObject = {};
  if (typeof users === 'object' && users !== null) {
    users.forEach(item => {
      if (typeof item.id !== 'undefined') {
        usersObject[item.id] = item;
      }
    });
  }
  return usersObject;
};
export default getIdToUserObject;
