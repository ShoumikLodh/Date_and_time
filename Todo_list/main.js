window.addEventListener('load',()=>{
     // defining some variables
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");

    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();                          //avoids refresh of page every time we submit the form
        const task=input.value;
        if(task==false){
            alert('Please add a task')
            return;
            
        }else{
            console.log(task);
            
        }
        const task_elem=document.createElement("div");            // creating parent div
        task_elem.classList.add("task")                            //adding task class

        const task_content_element=document.createElement("div");       //child div
        task_content_element.classList.add("content")

        
        const task_input_elmt=document.createElement("input");     
        task_input_elmt.classList.add("text");
        task_input_elmt.type="text";
        task_input_elmt.value=task;
        task_input_elmt.setAttribute("readonly","readonly");

        
        task_content_element.appendChild(task_input_elmt);   //appending data to child

        task_elem.appendChild(task_content_element);               // appending child div to parent
        //list_el.appendChild(task_elem);                        

        

        const task_actions=document.createElement("div");
        task_actions.classList.add("actions")
        

        const edit_elem=document.createElement("button");
        edit_elem.classList.add("edit");
       edit_elem.innerHTML="Edit";
        
       const delete_elem=document.createElement("button");
        delete_elem.classList.add("delete");
        delete_elem.innerHTML="Delete";
       

        const done_elem=document.createElement("button");
        done_elem.classList.add("done");
       done_elem.innerHTML="Done";


        task_actions.append(edit_elem);
        task_actions.append(delete_elem);
        task_actions.append(done_elem);

        task_elem.appendChild(task_actions);                    // appending button
        list_el.appendChild(task_elem);                      //appending parent div to root div

        input.value="";



        edit_elem.addEventListener("click",()=>{
            if(edit_elem.innerText.toLocaleLowerCase()=="edit"){
                task_input_elmt.removeAttribute("readonly");    
                task_input_elmt.focus();
                edit_elem.innerText="Save";
            }
            else{
                task_input_elmt.setAttribute("readonly","readonly");    
                // task_input_elmt.focus();
                edit_elem.innerText="Edit";
            }
            })
        

            delete_elem.addEventListener("click",()=>{
                list_el.removeChild(task_elem);
                
            })


            done_list=document.createElement("div");
            done_list.classList.add("done")

            done_elem.addEventListener("click",()=>{
                let done_work=task_input_elmt;
                console.log(done_work);
                task_elem.setAttribute('id','done');
                // task_input_elmt.setAttribute('id','done');
                task_actions.removeChild(edit_elem);
                task_actions.removeChild(delete_elem);
                task_actions.removeChild(done_elem);
                

                
                //done_list.appendChild(task_input_elmt);
                
                
            })
    

    })
    
})


