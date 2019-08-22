

let theTerms = document.getElementById("searchTerm");
let contain = document.getElementById("contain");
let loading = false;

document.getElementById('ing-search').onsubmit = function(event){
event.preventDefault();
contain.innerHTML = " ";

loading = true;

if(loading===true){

  contain.innerHTML +=`
<div class="character-info">
      <img src="/images/loading.gif" class="food-img" />
</div>`

  setTimeout(() => {

    contain.innerHTML = " ";
    
    loading = false

    searchFood();

  }, 3000);
}

function searchFood(){

  axios.get('http://localhost:3000/ing/'+theTerms.value,{


  }).then((callBack)=>{


    callBack.data.hits.forEach((listings)=>{

      contain.innerHTML += `
      <br>
      <div class="character-info">
      <div class="name">${listings.recipe.label}</div>
      <img src=${listings.recipe.image} class="food-img">
      <div class="calories"> Calories: ${listings.recipe.calories}</div>
      <div class="totalTime">Time: ${listings.recipe.totalTime}</div>
    </div>`
    
    
      })

    theTerms.value ='';

  console.log(callBack.data.hits[0].recipe)
  
  }).catch((error)=>{
  
  console.log(error)
  
  })
}
}






