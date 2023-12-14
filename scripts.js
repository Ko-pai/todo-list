const input = document.querySelector(".todoTextInput");
const form = document.querySelector("form");

const ulList = document.querySelector("ul");

const li = document.querySelector("li");
const edit = document.querySelector(".edit");
const delet = document.querySelector(".delete");

function insertList(e) {
  e.preventDefault();
  const createList = document.createElement("li");
  const createButtonEdit = document.createElement("button");
  const createButtonSave = document.createElement("button");
  const createButtonDelete = document.createElement("button");

  const createText = document.createElement("p");

  // edit button
  createButtonEdit.textContent = "Edit";
  createButtonEdit.classList = "edit";

  // save button
  createButtonSave.textContent = "Save";
  createButtonSave.classList = "save";

  // delete button
  createButtonDelete.textContent = "Delete";
  createButtonDelete.classList = "delete";

  // put input value in list
  createText.innerText = `${input.value}`;
  createList.append(
    createText,
    createButtonEdit,
    createButtonSave,
    createButtonDelete
  );

  // show to do list
  ulList.append(createList);
  input.value = "";

  // edit button click function
  createButtonEdit.addEventListener("click", () => {
    createText.style.outline = "2px solid white";
    createText.setAttribute("contenteditable", "true");

    createButtonEdit.style.display = "none";
    createButtonSave.style.display = "block";
    createText.style.cursor = "text";
  });

  // save button click function
  createButtonSave.addEventListener("click", () => {
    createText.setAttribute("contenteditable", "false");
    createText.style.outline = "none";
    createText.style.cursor = "default";

    createButtonEdit.style.display = "block";
    createButtonSave.style.display = "none";
  });

  // delete button click function
  createButtonDelete.addEventListener("click", () => {
    createList.style.display = "none";
  });
}

form.addEventListener("submit", (e) => insertList(e));
