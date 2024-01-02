
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({todos}) {
    if (!todos || !Array.isArray(todos)) {
        // Handle case where todos is not defined or not an array
        return <div>No todos available</div>; // Or render an error message
    }
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}