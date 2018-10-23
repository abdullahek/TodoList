
function Todos_list(title,location,description)

{
   
    this.title = title;
    this.location = location;
    this.description = description;

}



function adddata()
{  alert("Data saved into local storage successfully");

    
        var todolist =[];


    var title_var = document.getElementById("title").value;
        var location_var = document.getElementById("location").value;
        var description_var = document.getElementById("desc").value;

        var todo1 = new Todos_list(title_var,location_var,description_var);

    
    todolist.push(todo1);  

    localStorage.setItem("My Todo List",JSON.stringify(todolist));
  


}
function display_list(){

    var retrievedData = localStorage.getItem("My Todo List");
    var Todos = JSON.parse(retrievedData);

    if(Todos.length!==0)
    {
   
         var a = '<ul id="test">',
            b = '</ul>',
            c=' <a onclick=getdata()><i class="material-icons prefix" style="margin-left:50%" >update</i></a>',
            edit=' <i class="material-icons prefix" style="" >close</i>',
            m = [];
    
   for (i = 0; i < Todos.length; i += 1){
           
     m[i] = '<li style="display:inline" class="list" >' + Todos[0].title + c+edit
     '</li>';
   
        }
        document.getElementById('Maindiv').innerHTML = a + m + b;

          
        // Right now, this loop only works with one
        // explicitly specified array (options[0] aka 'set0')

    }

     
     
    }
function getindex(title,myarray)
{
    var i = 0;
    for(var item in myarray) {
        if(myarray[item].title == title)
            break;
        i++;
    }    
    return i-1;
}

    function updatedata()
    {  
        var retrievedData = localStorage.getItem("My Todo List");
        var Todos = JSON.parse(retrievedData);

        
        
           
    
        var title_var = document.getElementById("title").value;

 var location = getindex(title_var,Todos);
       

            var location_var = document.getElementById("location").value;
            var description_var = document.getElementById("desc").value;
    
            //var todo1 = new Todos_list(title_var,location_var,description_var);
    

            Todos[location].location = location_var;
            Todos[location].description = description_var;



        
       // todolist.push(todo1);  
    
        localStorage.setItem("My Todo List",JSON.stringify(Todos));
      
        alert("Data Update into local storage successfully");
    
    }



function getdata()
{







    
}

  
   








