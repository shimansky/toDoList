let toggle;

function createNewNote(){
    let note = document.createElement("div");
    note.className='card';
    note.innerHTML='add new task: <input name="inputField" maxlength="50"><button class="addNewTaskInThisNoteButton" onclick="addNewTaskInThisNote(this)">+</button><br><button class="closeNoteButton" onclick="deleteThisNote(this)">X</button>';
    document.body.appendChild(note);
	
}

function addNewTaskInThisNote(button){
    let redactNote = button.parentNode;
    let task = document.createElement("div");
    let textToTask = redactNote.childNodes[1].value.toString();
    if(textToTask!=''){
         task.className= 'newTask';
         task.innerHTML= '<input type="checkbox" onclick="deactivateThisTaskInThisNote(this)">'+  textToTask + '<button class="deleteThisTask" onclick="deleteThisTaskInThisNote(this)">x</button>';
         redactNote.appendChild(task);
         redactNote.childNodes[1].value = '';
	}
}


function deleteThisNote(button){
    let deletedNote = button.parentNode;
    deletedNote.remove();
	
}

function deleteThisTaskInThisNote(button){
    let deletedTask = button.parentNode;
    deletedTask.remove();
	
}

function deactivateThisTaskInThisNote(check){
	let deactivatedTask = check.parentNode;
	
	   if(check.checked){
             deactivatedTask.style.textDecoration='line-through';
             
              } else {
                 deactivatedTask.style.textDecoration='none';
                 
              }

        }
