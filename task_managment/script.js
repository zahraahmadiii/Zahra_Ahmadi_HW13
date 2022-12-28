let title = document.querySelector('.title')
let descrip = document.querySelector('.descrip')
let start_data = document.querySelector('.start_data')
let end_data = document.querySelector('.end_data')
let status_task = document.querySelector('.status_task')
let sub_btn = document.querySelector('.sub_btn')
let container_task = document.querySelector('.container_task')
let label = document.querySelector('.label1')
let container_doing = document.querySelector('.container_doing')
let container_complet = document.querySelector('.container_complet')

let taskArray = []
let doingArray = []
let completArray = []

function addnewTask(){

    newTaskObj = {
        id: Date.now(),
        title: title.value,
        description: descrip.value,
        startDate: start_data.value,
        endDate: end_data.value,
        status: label.innerText
    }
    title.value=""
    descrip.value=""
    start_data.value=""
    end_data.value=""

    taskArray.push(newTaskObj)
    setLocalStorage(taskArray)
    ganarator(taskArray)
}

sub_btn.addEventListener('click',addnewTask)

//set localstorage
function setLocalStorage(tasklist){
    localStorage.setItem('task',JSON.stringify(tasklist))
}


//create task
function ganarator(tasklist){
    container_task.innerHTML = ''

    tasklist.forEach(item => {
    container_task.insertAdjacentHTML('beforeend',`
    <section class="task">
    <div class="task_row1">
        <span class="title_task">${item.title}</span>
        <a><i class="fa fa-close icon_close" onclick="deletTask(${item.id})"></i></a>
    </div>
    <p class="descrip_task">${item.description}</p>
    <p class="date_start_task">start: ${item.startDate}</p>
    <p class="date_end_task">end: ${item.endDate}</p>
    <p class="status_task">status: ${item.status}</p>
    <div class="wraper_taskBtn">
        <a href="#"><button class="task_btn btn1_task"><i class="fa fa-window-minimize" style="color: #00b300"></i></button></a>
        <a href="#"><button class="task_btn btn2_task"><i class="fa fa-exclamation-circle" onclick="postTaskDoing(${item.id})"></i></button></a>
        <a href="#"><button class="task_btn btn3_task"><i class="fa fa-check"></i></button></a>
    </div>    
</section>`)
    })   
}


//get localstorage
function getLocalStorage(){
    let localStorageTask = JSON.parse(localStorage.getItem('task'))
    if(localStorageTask){
        taskArray = localStorageTask
    }else{
        taskArray =[]
    }
    ganarator(taskArray)
}

window.addEventListener('load',getLocalStorage)


//delet task
function deletTask(id){
    let localStorageTasks = JSON.parse(localStorage.getItem('task'))

        taskArray = localStorageTasks
        let findIndex = taskArray.findIndex(item => {
        return item.id ===id
    })

    taskArray.splice(findIndex,1)
    
    setLocalStorage(taskArray)
    ganarator(taskArray)
}

// -----------------------------------
//post task status doing

function postTaskDoing(id){

    let finditem
    let localStorageTasks = JSON.parse(localStorage.getItem('task'))

    taskArray = localStorageTasks

    taskArray.forEach(item => {
        if(item.id == id){
            finditem = item
            doingArray.push(finditem)
        } 
    })

    setToLocalDoing(doingArray)
    ganaratorDoing(doingArray)
 
    deletTask(id)
}


function setToLocalDoing(doinglist){
    localStorage.setItem('doing',JSON.stringify(doinglist))
}


function ganaratorDoing(doinglist){
    container_doing.innerHTML = ''

    doinglist.forEach(item => {
        
    container_doing.insertAdjacentHTML('beforeend',`
    <section class="task">
    <div class="task_row1">
        <span class="title_task">${item.title}</span>
        <a><i class="fa fa-close icon_close" onclick="deletDoing(${item.id})"></i></a>
    </div>
    <p class="descrip_task">${item.description}</p>
    <p class="date_start_task">start: ${item.startDate}</p>
    <p class="date_end_task">end: ${item.endDate}</p>
    <p class="status_task">status: doing</p>
    <div class="wraper_taskBtn">
        <a href="#"><button class="task_btn btn1_task"><i class="fa fa-window-minimize"></i></button></a>
        <a href="#"><button class="task_btn btn2_task"><i class="fa fa-exclamation-circle" style="color: #00b300;"></i></button></a>
        <a href="#"><button class="task_btn btn3_task")><i class="fa fa-check" onclick="postTaskComplet(${item.id})"></i></button></a>
    </div>    
</section>`)
    })   
}

function getLocalStorageDoing(){

    getLocal = JSON.parse(localStorage.getItem('doing'))
    
    if(getLocal){
        doingArray = getLocal
    }else{
        doingArray = []
    }

    ganaratorDoing(doingArray)
}

window.addEventListener('load', getLocalStorageDoing)

// click *
function deletDoing(id){
    
    let getLocal = JSON.parse(localStorage.getItem('doing'))
    doingArray = getLocal
    let findeIndex = doingArray.findIndex(item => {
        return item.id === id
    })
    doingArray.splice(findeIndex,1)
    setToLocalDoing(doingArray)
    ganaratorDoing(doingArray)
}

// ---------------------------------------
 //post task status complet

 function postTaskComplet(id){
    let finditem
    let getLocal = JSON.parse(localStorage.getItem('doing'))

    doingArray = getLocal

    doingArray.forEach(item => {
        if(item.id == id){
            finditem = item
            completArray.push(finditem)
        } 
    })
    console.log(completArray);

    setToLocalComplet(completArray)
    ganaratorComplet(completArray)
    deletDoing(id)   
 }


 function setToLocalComplet(completlist){
    localStorage.setItem('complet',JSON.stringify(completlist))
}


function ganaratorComplet(completlist){
    container_complet.innerHTML = ''

    completlist.forEach(item => {
        
    container_complet.insertAdjacentHTML('beforeend',`
    <section class="task">
    <div class="task_row1">
        <span class="title_task">${item.title}</span>
        <a><i class="fa fa-close icon_close" onclick="deletComplet(${item.id})"></i></a>
    </div>
    <p class="descrip_task">${item.description}</p>
    <p class="date_start_task">start: ${item.startDate}</p>
    <p class="date_end_task">end: ${item.endDate}</p>
    <p class="status_task">status: complet</p>
    <div class="wraper_taskBtn">
        <a href="#"><button class="task_btn btn1_task"><i class="fa fa-window-minimize"></i></button></a>
        <a href="#"><button class="task_btn btn2_task"><i class="fa fa-exclamation-circle"></i></button></a>
        <a href="#"><button class="task_btn btn3_task")><i class="fa fa-check" style="color: #00b300;"></i></button></a>
    </div>    
</section>`)
    })   
}

function getLocalStorageComplet(){

    getLocalComplet = JSON.parse(localStorage.getItem('complet'))

    if(getLocalComplet){
        completArray = getLocalComplet
    }else{
        completArray = []
    }

    ganaratorComplet(completArray)
}

window.addEventListener('load', getLocalStorageComplet)


// delet *
function deletComplet(id){
    
    let getLocal = JSON.parse(localStorage.getItem('complet'))
    completArray = getLocal
    let findeIndex = completArray.findIndex(item => {
        return item.id === id
    })
    completArray.splice(findeIndex,1)
    setToLocalComplet(completArray)
    ganaratorComplet(completArray)
}

  
// light and dark mood
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  
  document.body.classList.toggle('dark')

  if (document.body.className.includes('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }

  // console.log(document.body.className.includes('dark'));  // Boolean
})


window.onload = function () {
  let localStorageTheme = localStorage.getItem('theme')

  if (localStorageTheme === 'dark') {
    document.body.classList.add('dark')
  }

}