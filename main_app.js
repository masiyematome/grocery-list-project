//Selectors

const displayListContainer = document.querySelector(".display-list-container");
const groceryListContainer = document.querySelector(".grocery-list-container");
const groceryItemInput = document.querySelector(".grocery-item-input");
const addItemButton = document.querySelector(".add-item-button");
const clearListButton = document.querySelector(".clear-list-button");
const errorText = document.querySelector(".error-text");
const editItemContainer = document.querySelector(".edit-item-container");
const newItemName = document.querySelector(".new-item-name");
const updateItem = document.querySelector(".update-item");

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

        saveItemToLocalStorage(groceryItemInput.value);

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


displayListContainer.addEventListener("click", (event) => {
    const clickedItem = event.target;

    if(clickedItem.classList.contains("delete-button")){
        const theGroceryItem = clickedItem.parentElement.parentElement;
        theGroceryItem.remove();
        permanentlyRemoveFromStorage(theGroceryItem);
    }

    else if(clickedItem.classList.contains("edit-button")){

            editItemContainer.classList.add("visible");

            newItemName.value = clickedItem.parentElement.parentElement.children[0].innerHTML;

            updateItem.addEventListener("click",() => {

                //The edited code starts here

                const theGroceryItem = clickedItem.parentElement.parentElement;
                theGroceryItem.remove();
                permanentlyRemoveFromStorage(theGroceryItem);

                const newGroceryItem = document.createElement("div");
                newGroceryItem.classList.add("new-grocery-item");

                const groceryItemName = document.createElement("h3");
                groceryItemName.classList.add(".grocery-item-name");
                groceryItemName.innerText = newItemName.value;
                newGroceryItem.appendChild(groceryItemName);

                saveItemToLocalStorage(newItemName.value);

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
            

                //The edited code ends here



                

                // clickedItem.parentElement.parentElement.children[0].innerHTML = newItemName.value;
                
                // saveItemToLocalStorage(newItemName.value);
            })

    }

    else if(clickedItem.classList.contains("edit-item-container")){
        editItemContainer.classList.remove("visible");
    }

})

clearListButton.addEventListener("click",() =>{
    const groceryItems = groceryListContainer.childNodes;

    Array.from(groceryItems).forEach(groceryItem => {
        groceryItem.remove();
        permanentlyRemoveFromStorage(groceryItem);
    })

})

//Function to save grocery items to local storage

function saveItemToLocalStorage(item){
    let items;

    if(localStorage.getItem("items") === null){
        items = [];
    }

    else{
        items = JSON.parse(localStorage.getItem("items"));
    }

    items.push(item);
    localStorage.setItem("items",JSON.stringify(items));

}

//Function to retrieve items from local storage

~function(){
    let items;

    if(localStorage.getItem("items") === null){
        items = [];
    }

    else{
        items = JSON.parse(localStorage.getItem("items"));
    }

    items.forEach(item => {
        const newGroceryItem = document.createElement("div");
        newGroceryItem.classList.add("new-grocery-item");

        const groceryItemName = document.createElement("h3");
        groceryItemName.classList.add(".grocery-item-name");
        groceryItemName.innerText = item;
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
    })

}();

//Function to permanently delete items from the local storage

function permanentlyRemoveFromStorage(item){
    let items = [];

    if(localStorage.getItem("items") === null){
        items = [];
    }

    else{
        items = JSON.parse(localStorage.getItem("items"));
    }

    const itemText = item.children[0].innerText;
    items.splice(items.indexOf(itemText),1);
    localStorage.setItem("items",JSON.stringify(items));

}
