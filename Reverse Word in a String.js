// Reverse Words in a String

function reverseWord(s){
  
  s = s.split(' ').reverse();
  s = s.join(' ').trim();
  s = s.replace(/\s+/g, " ")
  return s;
}

function main(){
  var string = "a good   example";
  console.log(reverseWord(string));
}
main();