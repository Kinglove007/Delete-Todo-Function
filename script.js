let todos = [];
        function addTodo() {
        todos.push({
            title: document.querySelector("input").value
        })
        render()
        }

        function deleteLastTodo() {
        todos.splice(todos.length - 1, 1) // remove the last element from the arr
        render()
        }


        function deleteFirstTodo() {
        todos.splice(0, 1) // remove the last element from the arr
        render()
        }

        function deleteTodoAtIndex(index) {
            todos.splice(index, 1); // remove the specific element at index
            render();
        }

        function createTodoComponent(todo, index) {
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const button = document.createElement("button");
            button.innerHTML = "Delete";
            button.onclick = function() {
                deleteTodoAtIndex(index);
            };
            h1.innerHTML = todo.title;
            div.appendChild(h1);
            div.appendChild(button);
            return div;
        }

        function render() {
            document.querySelector("input").value = "";
            document.querySelector("#todos").innerHTML = "";
            todos.forEach((todo, index) => {
                const element = createTodoComponent(todo, index);
                document.querySelector("#todos").appendChild(element);
            });
        }