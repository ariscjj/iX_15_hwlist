class Task {
  constructor(name, completed = false) {
    this.name = name; 
    this.completed = completed;
  }
}

class UI {
    constructor() {
      this.form = document.getElementById('form');
      this.task = document.getElementById('task-input');

      this.tableBody = document.getElementById('table-body'); 

      this.form.addEventListener("submit", (e) => {
        this.onFormSubmit(e); 
        console.log(e.target.id)
      });
      // this.delete.addEventListener("click", (e) => this.removeTask(e.target.id)); 
      // document.getEventListener("click", (e) => this.removeTask(e.target.id));  

      this.tasks = [];  
      this.renderTaskTable(); 
    }

  onFormSubmit(e) {
    e.preventDefault();

    const task = new Task(
      this.task.value
    )
    this.tasks.push(task); 
    this.renderTaskTable(); 
  }

  renderTaskTable() {
    this.tableBody.innerHTML = [];
    // console.log("rendertasktable running"); 

    for (let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i]; 

      const tr = document.createElement("tr");

      const tdTask = document.createElement("td");
      const tdComplete = document.createElement("td");
      const tdRemove = document.createElement("td");

      const btndiv = document.createElement("div");
      btndiv.classList.add("form-check");
      btndiv.classList.add("postition-relative");

      const btnComplete = document.createElement("input"); 
      btnComplete.setAttribute("type","radio"); 
      btnComplete.setAttribute("id", "flexRadioDefault1")
      btnComplete.classList.add('text-center'); 
      btndiv.appendChild(btnComplete); 
      tdComplete.appendChild(btndiv); 

      const trashlink = document.createElement("button"); 
      trashlink.classList.add("btn");
      trashlink.classList.add("btn-link");
      trashlink.classList.add("delete");
      trashlink.setAttribute("id", task.name);
      trashlink.addEventListener('click', () =>{
        console.log(task.name); 
        this.removeTask(task.name)});


      // console.log("trashid"+ trashlink.getAttribute("id")); 
      // console.log("trashclass"+ trashlink.getAttribute("class")); 

      trashlink.innerHTML = document.getElementById("trashicon").innerHTML

      tdRemove.appendChild(trashlink);

      tdTask.innerHTML = task.name;

      tr.appendChild(tdTask);
      tr.appendChild(tdComplete);
      tr.appendChild(tdRemove); 

      this.tableBody.appendChild(tr); 

//       var btns = document.querySelectorAll(".delete"); 
//       btns.forEach(btn => {
//         // console.log("btn id " + btn.getAttribute("id"));
//         btn.addEventListener('click', (e) => {
//           console.log(e.target.id);
//         this.removeTask(e.target.id);
//         }); 
//       }); 


    }
  }

  removeTask(taskname) {
    // console.log("removing test"); 
    // console.log(taskname); 
    
    this.tasks = this.tasks.filter((task) => {

      // console.log(task.name); 
      return task.name !== taskname;
    })
    this.renderTaskTable(); 
  } 
} 

const ui = new UI(); 
