//Selectors

const groceryListContainer = document.querySelector(".grocery-list-container");
const groceryItemInput = document.querySelector(".grocery-item-input");
const addItemButton = document.querySelector(".add-item-button");
const clearListButton = document.querySelector(".clear-list-button");
const errorText = document.querySelector(".error-text");

//Functions

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

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons-container");
        newGroceryItem.appendChild(buttonsContainer);

        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.innerHTML = '<i class = "far fa-edit"></i>';
        buttonsContainer.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
        buttonsContainer.appendChild(deleteButton);

        groceryListContainer.appendChild(newGroceryItem);
        groceryItemInput.value = "";
    }
})


groceryListContainer.addEventListener("click", (event) => {
    const clickedItem = event.target;

    switch(clickedItem.className){
        case "delete-button":
            const theGroceryItem = clickedItem.parentElement;
            theGroceryItem.remove();
            break;
    }

})

clearListButton.addEventListener("click",() =>{
    const groceryItems = groceryListContainer.childNodes;

    Array.from(groceryItems).forEach(groceryItem => {
        groceryItem.remove();
    })

})
