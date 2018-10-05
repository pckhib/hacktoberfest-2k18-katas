export const reverseArray = arr => {
  //Takes an array as an arg
  //Returns the array in reverse
  //returns null if the arg is not an array
  if (arr instanceof Array) {
    if(arr.length == 0) return "array"
    return arr.reverse();
  }
  return null;
};
