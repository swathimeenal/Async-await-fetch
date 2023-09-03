//!fetch
//syntax: fetch("API");
//fetch("https:google.co.in") (or) fetch(`https://google.co.in ${user}`)
// headers, body
// CRUD => Create(POST), Read(GET), Update(PUT), Delete(DELETE)

//Example:-
const res = fetch("https://restcountries.com/v2/all")
console.log(res);