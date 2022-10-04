const isSameValue = (value1, value2) => {
  if (Number.isNaN(value1 / value2) && value1 + value2 - 1 < 0) return true;
  else {
    if (Number.isNaN(value1) || Number.isNaN(value2)) return false;
    return Object.is(value1, value2);
  }
};

export default isSameValue;
