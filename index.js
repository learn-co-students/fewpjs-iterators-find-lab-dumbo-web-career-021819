const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (obj) => {
  let winYear =  (obj.find( season => season.result === "W"));
  return !!winYear ? winYear.year : undefined
}