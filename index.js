const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = (arr) => {
//   const tutorials = arr.filter(tutorials => tutorials.toLowerCase.split('').map());
//   return tutorials
// }
 


// function titleCased(tutorials){
//   return tutorials.toLowerCase().split(" ").map(function(word) {
//     return word.charAt(word[0], +word[0].toTitleCase());
//   }).join();
// }
// titleCased(tutorials)


// get array of all titles
// const newArr = tutorials.map((tutorials) => tutorials.split(' ')[0])
// console.log(newArr);
 let tCasedTitles = [];




//  function titleCased(tutorials){
//    let splitStr=tutorials.map(function(string){
//      return string.split(" ");
//    })
//    splitStr.map(function(array){
//      let toAdd = array.map(function(word){
//        return word.charAt(0).toUpperCase() + word.slice(1)
//      })
//      return tCasedTitles.push(toAdd)
//      })
//      let titleCased = tCasedTitles.map(function(array){
//        return array.join(" ")
//    })
//    return titleCased
//  }

//  console.log(titleCased(tutorials))


const titleCased = () => {
  const array = tutorials.map(element => 
    element.split(' ').map(word => word.charAt(0).toUpperCase()+word.substring(1)).join(' ')
    )
    return array;
}