function addtask()
{
  //create a new list element
    var task =document.getElementById('task-input').value;
    console.log('Task:',task)
    //check if task is Empty
    if(task.trim()!==''){
    var taskItem =document.createElement('li')
    taskItem.textContent = task
    taskItem.className ='border border-gray-200 bg-blue-200 rounded-lg p-10 shadow-md py-4 px-10 mt-3 items-center flex justify-between'


    //Add task item to taklist dom
    document.getElementById('task-list').appendChild(taskItem)

    //search for total task element
    var totalTask=document.getElementById('total-task')

    //get child node count for task list
    var taskCount=document.getElementById('task-list').childElementCount

    //set total taskCount
    totalTask.textContent=taskCount

    //create delete button and ser class name 
    var deleteButton=document.createElement('button')

    //set button name to delete
    deleteButton.textContent = 'Delete'

    //Set class name for button
    deleteButton.className='bg-red-500 text-white px-4 py-2 m-4 rounded-full'

    //Add event listener to delete button
    deleteButton.addEventListener('click', function(){
      taskItem.remove()

      //get child node count for task list
      var taskCount=document.getElementById('task-list').childElementCount
      totalTask.textContent=taskCount
    })

    //Append delete button to the task item
    taskItem.appendChild(deleteButton)  

    //clear input field
    document.getElementById('task-input').value = ''
  }
}

//function to delete all items
function deleteAll(){
  document.getElementById('task-list').innerHTML = ''
  var totalTask=document.getElementById('total-task')
  totalTask.textContent=0
}