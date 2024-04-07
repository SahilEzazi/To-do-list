console.log("working")
const title = document.getElementById("title")
const description = document.getElementById("description")
const container = document.querySelector(".container")
const form = document.querySelector("form")

// const taskadd = localStorage.getItem('taskadd')?JSON.parse(localStorage.getItem('taskadd')):[];

const taskadd = [];

// console.log(taskadd)

function showAllTasks(){

    taskadd.forEach((value,index)=>{
        const div = document.createElement("div");
    div.setAttribute("class","taskadd")

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span)

    const btn = document.createElement("button")
    btn.setAttribute("class","del")
    btn.innerText = "-"
    div.append(btn)
    container.append(div)

        btn.addEventListener("click",()=>{
            removeTask();
            taskadd.splice(index,1);
            localStorage.setItem("taskadd",JSON.stringify(taskadd))
            showAllTasks();
        })

    })
}

function removeTask(){
    taskadd.forEach(()=>{
        const div = document.querySelector(".taskadd")
        div.remove();
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTask();

    taskadd.push({
        title: title.value,
        description: description.value
    })

    localStorage.setItem("taskadd",JSON.stringify(taskadd));

    console.log(taskadd)
    showAllTasks();
})


// let arr =['sahil','ajju','arshad', 'abhiraj', 'uvais'];
// let brr = arr.splice(2,2)
// console.log(brr)
// console.log(arr)


// splice

// foreach 
// map 
// prevendefault 
// addEventListener 
// ternary operator 
// storage 