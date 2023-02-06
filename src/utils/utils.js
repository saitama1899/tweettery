export default function separateAndClean(str) {
  let parts = str.split(" ")
  let firstPart = parts[1].substr(parts[1].indexOf(":") + 1)
  let secondPart = parts[2].substr(parts[2].indexOf(":") + 1)
  
  let firstArray = firstPart.match(/'[^']+'/g).map(x => x.substr(1, x.length - 2))
  return [Array.from(new Set(firstArray)), secondPart.trim()]
  }