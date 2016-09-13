export function valueInArray(value, arr) {
  for (let item of arr) {
    if (value === item.name) {
      return true;
    }
  }
  return false;
}