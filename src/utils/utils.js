export default function separateAndClean(str) {
  let parts = str.split("  ");
  
  if (parts.length > 0 && parts[1].substr(parts[1].indexOf(":") + 1) && parts[2].substr(parts[2].indexOf(":") + 1)) {
    let firstPart = parts[1].substr(parts[1].indexOf(":") + 1)
    let secondPart = parts[2].substr(parts[2].indexOf(":") + 1)
    let firstArray = firstPart.match(/'[^']+'/g)
    if (firstArray) {
      firstArray = [...new Set(firstArray.map(x => x.substr(1, x.length - 2)))]
      firstArray = firstArray.map(str => str.split(" ").slice(0, 5).join(" "))
      firstArray = firstArray.slice(0, 10);
    } else {
      firstArray = []
    }
    return [firstArray, secondPart.trim()]    
  } else {
    return [[], "Something went wrong. Try again!"]
  }
}