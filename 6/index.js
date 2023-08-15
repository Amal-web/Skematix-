const arr1 = [1, 2, 3,4];
const arr2 = [5, 6, 3, 2, 8];

const matchingElement = arr1.filter((item) => arr2.includes(item));
const uniqueElementOfArr1 = arr1.filter((item)=>!arr2.includes(item))
const uniqueElementOfArr2 = arr2.filter((item)=>!arr1.includes(item))

 const uniqueElement= uniqueElementOfArr1.concat(uniqueElementOfArr2)

 const lenOfMatching=matchingElement.length
 const lenOfUniqueElement=uniqueElement.length

 const matchingScore=(lenOfMatching/lenOfUniqueElement)*100

 console.log(lenOfMatching,lenOfUniqueElement)


console.log(matchingElement);
console.log(uniqueElement)
console.log(matchingScore)

