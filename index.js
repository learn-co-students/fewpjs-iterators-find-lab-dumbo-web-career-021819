const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let result = array.find((array_item) => {
    return array_item.result == "W"
  });
  if (result != null) {
  return result.year
};
};
