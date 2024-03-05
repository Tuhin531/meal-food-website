const mealDataLoad = (searchText) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealData(data.meals))
        .catch(error => {
            console.log(error);
        })
}
const displayMealData = meals =>{

    //  console.log(meals);

    // step 1.  container element
    const mealsContainer =document.getElementById('meals-container');
    mealsContainer.innerHTML ='';
    meals.forEach(meal => {
        console.log(meal);
        // step 2. create child fro each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                    <button onclick="loadMealDetails(${meal.idMeal}) " type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                    Details
                    </button>

        </div>
        
        `
         mealsContainer.appendChild(mealDiv);

    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    mealDataLoad(searchText);

}
const loadMealDetails = idMeal => {
    console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url);
    fetch(url)
    .then (res => res.json())
    .then (data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal =>{
    document.getElementById('mealModalLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    
    `


}
mealDataLoad('');