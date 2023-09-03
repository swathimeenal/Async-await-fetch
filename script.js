//!fetch
//syntax: fetch("API");
//fetch("https:google.co.in") (or) fetch(`https://google.co.in ${user}`)
// headers, body
// CRUD => Create(POST), Read(GET), Update(PUT), Delete(DELETE)

//Example:-
//!const res = fetch("https://restcountries.com/v2/all")
//console.log(res);
//res.then((data) => console.log(data))
//res.then((data) => data.json()).then((data1)=>console.log(data1))
//res.then((data) => data.json()).then((data1)=>{console.log(data1[1].name);})
//! to print name
//res.then((data) => data.json()).then((data1)=>{
    //for(var i=0; i<data1.length ; i++)
   // {
   // console.log(data1[i].name);
//}
//})
//! to print capital
//res.then((data) => data.json()).then((data1)=>{
    //for(var i=0; i<data1.length ; i++)
   // {
        
   // console.log(data1[i].capital);
    
//}
//})
//! session task ---to print name of the countries in webpage


//res.then((data) => data.json()).then((data1)=>{
    //for(var i=0; i<data1.length ; i++)
   // {
    //const div = document.createElement("div");
    //div.innerHTML = `${data1[i].name}`;
   //document.body.append(div);
//}
//})

/*const res = fetch("https://restcountries.com/v2/all")
res.then((data) => data.json()).then((data1)=>{
    for(var i=0; i<data1.length ; i++)
    {
         console.log(data1[i]);
         const div = document.createElement("div")
         div.innerHTML=`<div class="row row-cols-1 row-cols-md-2 g-4">
         <div class="col">
           <div class="card">
             <img src="${data1[i].flag}" class="card-img-top" alt="country-flag">
             <div class="card-body">
               <h5 class="card-title">${data1[i].name}</h5>
               <p class="card-text">Capital: ${data1[i].capital}</p>
               <p class="card-text">Region: ${data1[i].region}</p>
               <p class="card-text">Sub-Region: ${data1[i].subregion}</p>
               <p class="card-text">Population: ${data1[i].population}</p>
             </div>
           </div>
         </div>`
         document.body.append(div);
    
}
})
*/
//!async-await(to overcome promise(.then,.catch))
/*async function foo(){
    const res =  await fetch("https://restcountries.com/v2/all")
    const result = await res.json();
    console.log(result);
}
foo()
*/
//!Error Handling
/*syntax: try {
    
} catch (error) {
    
}
*/
async function foo(){
try {
    const res =  await fetch("https://restcountries.com/v2/all")
    const result = await res.json();
    console.log(result);
    
} catch (error) {
    console.log(error)
    
}
}
foo();