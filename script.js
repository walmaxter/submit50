const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 0,
  ITEM_COUNT:0,
  ITEM_DESCOUNT:0
}

const list = document.getElementById('todo-list')

let uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCountSpan = document.getElementById('item-count')
function newTodo() {

  let list = document.getElementById("todo-list");
  let todo = document.getElementById("todo");
  let li = document.createElement("li");
  let input = document.createElement("input");
  let label = document.createElement("label")
  input.type = "checkbox";
  input.id = itemCountSpan.textContent;
  input.value = itemCountSpan.textContent
  input.classList ="check"
  input.setAttribute("onclick", 'toggleSelect('+input.id+')');
  if(valide(todo.value)){
    classNames.ITEM_COUNT = classNames.ITEM_COUNT + 1
    itemCountSpan.textContent = classNames.ITEM_COUNT
    uncheckedCountSpan.textContent = classNames.ITEM_DESCOUNT
    label.innerHTML = todo.value;
    li.appendChild(input);
    li.appendChild(label)
    list.appendChild(li)
    todo.value = ''
  }
}
function valide(todoValue){
  if(todoValue.length > 0){
    return true
  }else{
    alert("please into value Todo!!")
    return false}
}
function toggleSelect(id){
  //alert(id)
  if(document.getElementById(id).checked == true){
    classNames.ITEM_DESCOUNT = classNames.ITEM_DESCOUNT + 1
  	uncheckedCountSpan.textContent = classNames.ITEM_DESCOUNT
  }else{
    classNames.ITEM_DESCOUNT = classNames.ITEM_DESCOUNT - 1
    uncheckedCountSpan.textContent = classNames.ITEM_DESCOUNT
  }

}
