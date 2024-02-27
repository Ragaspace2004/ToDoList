function addTask(){
  //search with element with id task-input
  var task=document.getElementById('task-input').value;
  console.log('TASK:'+task);
  if(task.trim!=""){
    window.alert("Enter valid Task");
  }
  //insert tasks
  var taskCount=document.getElementById('task-list').childElementCount;
  var tc=document.getElementById('task-count');
  tc.innerHTML=taskCount+1;
  var taskItem=document.createElement('li');
  taskItem.className="bg-white border border-gray-300 p-6 shadow-xl rounded-lg mt-3 flex flex-row items-center justify-between";
  taskItem.textContent=task;
  document.getElementById('task-list').appendChild(taskItem);
document.getElementById('task-input').value='';
  
  //delete button
  var deletebutton=document.createElement('button');
  deletebutton.textContent="Delete";
  deletebutton.className="bg-red-300 rounded-lg p-2 text-white border-gray-500";
  taskItem.appendChild(deletebutton);
  deletebutton.onclick=function(){
  taskItem.remove();
  var taskCount1=document.getElementById('task-list').childElementCount;
  var tc3=document.getElementById('task-count');
  tc3.innerHTML=taskCount1;
  
 }}
function deleteAll(){
  document.getElementById("task-list").replaceChildren('');
  var tc1=document.getElementById(task-count);
  tc1.innerHTML=0;
}