const input = document.querySelector('.todoTextInput')
const form = document.querySelector('form')

const ulList = document.querySelector('ul')

const li = document.querySelector('li')
const edit = document.querySelector('.edit')
const delet = document.querySelector('.delete')
const listContainer = document.querySelector('.list-container')

let listArray = []




function get() {

  for (let i = 0; i < listArray.length; i++) {

    const createList = document.createElement('li')
    const createButtonEdit = document.createElement('button')
    const createButtonSave = document.createElement('button')
    const createButtonDelete = document.createElement('button')
    const buttonContainer = document.createElement('div')

    // input value insert in this (p) tag
    const createText = document.createElement('p')
    const errorText = document.querySelector('.errorText')

    // edit button
    createButtonEdit.textContent = 'Edit'
    createButtonEdit.classList = 'edit'

    // save button
    createButtonSave.textContent = 'Save'
    createButtonSave.classList = 'save'

    // delete button
    createButtonDelete.textContent = 'Delete'
    createButtonDelete.classList = 'delete'
    createButtonDelete.id = i

    buttonContainer.classList = 'buttonContainer'
    buttonContainer.append(
      createButtonEdit,
      createButtonSave,
      createButtonDelete,
    )
    createText.textContent = listArray[i]
    
    createList.append(createText, buttonContainer)


    // edit button click function
    createButtonEdit.addEventListener("click", () => {
    createText.style.outline = "2px solid white";
    createText.setAttribute("contenteditable", "true");

    createButtonEdit.style.display = "none";
    createButtonSave.style.display = "block";
    createText.style.cursor = "text";
  });


  createText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      editCancel();
      
    }
  });

  // save button click function
  createButtonSave.addEventListener("click", () => {
    
    editCancel();
  });

  // delete button click function
  createButtonDelete.addEventListener("click", (e) => {
    listArray.splice(listArray[i] , 1)
    localStorage.setItem("accepted", JSON.stringify(listArray))
    createList.remove()
  });

  function editCancel() {
    listArray[i] = createText.innerText
    console.log(createText.innerText);
    localStorage.setItem("accepted" , JSON.stringify(listArray))
    createText.setAttribute("contenteditable", "false");
    createText.style.outline = "none";
    createText.style.cursor = "default";
    createButtonEdit.style.display = "block";
    createButtonSave.style.display = "none";
   
  }
  ulList.append(createList)
  }

}

function insertList(e) {
  e.preventDefault()

  const createList = document.createElement('li')
  const createButtonEdit = document.createElement('button')
  const createButtonSave = document.createElement('button')
  const createButtonDelete = document.createElement('button')
  const buttonContainer = document.createElement('div')

  // input value insert in this (p) tag
  const createText = document.createElement('p')
  const errorText = document.querySelector('.errorText')

  // edit button
  createButtonEdit.textContent = 'Edit'
  createButtonEdit.classList = 'edit'

  // save button
  createButtonSave.textContent = 'Save'
  createButtonSave.classList = 'save'

  // delete button
  createButtonDelete.textContent = 'Delete'
  createButtonDelete.classList = 'delete'

  buttonContainer.classList = 'buttonContainer'
  buttonContainer.append(createButtonEdit, createButtonSave, createButtonDelete)

  // put input value in list
  createText.innerText = `${input.value}`

  createList.append(createText, buttonContainer)

  // empty input function

  if (input.value === '') {
    errorText.innerText = `Please enter what you want to do!`
  } else {
    errorText.innerText = ``

    listArray.push(createText.innerText)
    let jsonData = JSON.stringify(listArray)
    localStorage.setItem('accepted', jsonData)

    //show list
    ulList.append(createList)
    input.value = ''
  }
/*
  createText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      editCancel()
    }
  })*/

  // edit button click function
  createButtonEdit.addEventListener('click', () => {
    createText.style.outline = '2px solid white'
    createText.setAttribute('contenteditable', 'true')

    createButtonEdit.style.display = 'none'
    createButtonSave.style.display = 'block'
    createText.style.cursor = 'text'
  })

  // save button click function
  createButtonSave.addEventListener('click', () => {
    editCancel()
  })

  // delete button click function
  createButtonDelete.addEventListener('click', () => {
    createList.remove()
    localStorage.setItem("accepted", JSON.stringify(listArray))
  })

  function editCancel() {
    createText.setAttribute('contenteditable', 'false')
    createText.style.outline = 'none'
    createText.style.cursor = 'default'
    createButtonEdit.style.display = 'block'
    createButtonSave.style.display = 'none'
    
    console.log(listArray);
    let jsonData = JSON.stringify(listArray)
    localStorage.setItem('accepted', jsonData)
    
  }
}

window.addEventListener('load', (b) => {
  let localGet = localStorage.getItem('accepted')
  listArray = JSON.parse(localGet)
  
  if (localGet) {
    get()
  } else {
    listArray = []
    
  }
})

form.addEventListener('submit', (e) => insertList(e))
