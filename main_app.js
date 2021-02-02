
const groceryListContainer = document.querySelector(".grocery-list-container");
const groceryItemInput = document.querySelector(".grocery-item-input");
const addItemButton = document.querySelector(".add-item-button");
const clearListButton = document.querySelector(".clear-list-button");

addItemButton.addEventListener("click",() => {
    if(groceryItemInput.value == ""){
        setTimeout(alert("I will add a grocery item to the grocery list"),3000);
    }
})
