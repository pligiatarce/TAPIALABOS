//laboratoio 3
///P. Ligia Tapia Arce
///resolucion
class TodoManager {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }
    getTodosById(TodosID: string) {
        return this.todos.find(todo => todo.id === TodosID);
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local

        function save_localTodoManager () {
             var id = parseInt (document.getTodosById ("cedula").value); 
             var clave=document.getTodosById ("key").value; var ident=localTodoManager.getIndex ("Identificacion"); 
             var localTodoManager=localTodoManager.getIndex ("Password"); 
             if (id==ident && clave==password) { 
                location.href="index.html"; }
                else { var answer=prompt ("Su Id y pass no se encuentran registrado desea guardarlos (S/N)");
                 if (answer=='s' || answer=='S') { localTodoManager.setItem ("Identificacion",id);
                 localTodoManager.setIndex ("Password",clave); document.getTodosById("Identificacion").value = ""; 
                  document.getTodosById ("key").value = ""; } } }
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
        function withAuthentication(IndexComponent) {
            return function(render) {
              if (localTodoManager.isLoggedIn) {
                return <IndexComponent {...localTodoManager} />;
              } else {
                return "";
              }
            }
          }
}
