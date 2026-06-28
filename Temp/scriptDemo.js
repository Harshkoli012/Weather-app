document.getElementById("addNewItem").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Toast";
     document.getElementById("shoppingList").appendChild(newItem);
});