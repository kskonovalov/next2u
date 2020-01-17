/**
 * Function merges two arrays of tasks, comparing by ID
 * if arr2 contains element with same id,
 * result array will contain element from arr2, or from arr1 if not
 *
 * all 'new' (not updated) elements from arr2 willbe added to result
 *
 * @param arr1
 * @param arr2
 * @returns {Buffer | any[] | string}
 */
const mergeArraysOfObjsById = (arr1, arr2) => {
  const usedIndexes = [];
  const updatedArray = arr1.map(item1 => {
    const currentMatch = arr2.findIndex(item2 => item1.id === item2.id);
    if (typeof currentMatch !== 'undefined') {
      usedIndexes.push(currentMatch);
    }
    return {
      ...(arr2[currentMatch] || item1)
    };
  });
  return updatedArray.concat(
    arr2.filter((item, index) => {
      return !usedIndexes.includes(index);
    })
  );
};

export default mergeArraysOfObjsById;
