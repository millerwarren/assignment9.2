// List the Array items on their own line along with their index(number)position within the console when a user says "list"
var todos = ['wash car', 'pay bills', 'walk dog', 'cook dinner'];

// Use a .forEach loop. Also, pass a second arument through the function to get the index position
var question = prompt("What would you like to do?");

while (question != "quit") {
    //if the user says "list" print to console their list
    if (question == 'list') {
        console.log("*************");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("*************");
        //If the user says "new", prompt them to add a new todo
    } else if (question == 'new') {
        var newTodo = prompt("Add new todo");
        todos.push(newTodo);

    } else if (question == "delete") {
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Deleted Todo");
    }
    var question = prompt("What would you like to do?");
}

console.log("You have quit the app!");
//List Todos
// function listTodos(){
//     console.log('**********');
//     todos.forEach(function(todo, i){
//         console.log(i + ':' + todo);
//     });
//     console.log('*********');
// }
// // add new todo
// function newTodo (){
//     var newTodo = prompt('Enter new todo');
//     todos.push(newTodo);
//     console.log('Added Todo');
// }

// // delete a todo
// function deleteTodo(){
//     var index = prompt('Enter index of todo to delete');
//     todos.splice(index, 1);
//     console.log('Deleted Todo');
// }