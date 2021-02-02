
const groceryListContainer = document.querySelector(".grocery-list-container");
const groceryItemInput = document.querySelector(".grocery-item-input");
const addItemButton = document.querySelector(".add-item-button");
const clearListButton = document.querySelector(".clear-list-button");
const errorText = document.querySelector(".error-text");

addItemButton.addEventListener("click",() => {
    if(groceryItemInput.value == ""){
        errorText.classList.add("showing");

        groceryItemInput.addEventListener("click", ()=> {
            errorText.classList.remove("showing");
        })
    }

    else{
        const newGroceryItem = document.createElement("div");
        newGroceryItem.classList.add("new-grocery-item");

        const groceryItemName = document.createElement("h3");
        groceryItemName.classList.add(".grocery-item-name");
        groceryItemName.innerText = groceryItemInput.value;
        newGroceryItem.appendChild(groceryItemName);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
        newGroceryItem.appendChild(deleteButton);

        groceryListContainer.appendChild(newGroceryItem);
        groceryItemInput.value = "";
    }
})
