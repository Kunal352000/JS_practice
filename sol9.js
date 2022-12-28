// star pattern print
let star = ""
for (let i = 1; i <= 5; i++){
  for (let j = 0; j < i; j++){
    star += "*";
  }
  star = star + "\n";
}
console.log(star)