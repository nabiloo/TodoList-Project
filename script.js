const doSomethingWithData = async () => {
  const data = await getData();

  const todoResults = document.getElementById("todo-results");
  data.forEach((item) => {
    const input = `<div class="item-container">
        <div class="input-checkbox">
        <input type="checkbox">
        </div>
    
        <div class="text-box">
        <h1>${item.description}</h1>
        </div>
    
        <div class="bin-icon" id="${item.id}">
        <img height="15px" src="trash-delete-icon.jpg" alt="">
        </div>
    </div>`;
    todoResults.innerHTML += input;
  });
};
doSomethingWithData();

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  const inputFromSearachBox = document.getElementById("search-box").value;
  const newTask = { description: inputFromSearachBox, done: false };
  postData(newTask);
  setTimeout("window.location.reload();", 500);
});

document.body.addEventListener("click", function (event) {
  const todoID = event.path[1].id;
  deleteData(todoID);
  setTimeout("window.location.reload();", 500);
});
