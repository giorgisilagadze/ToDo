const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const input = document.getElementById("input");
const body = document.querySelector("body");
const target = document.getElementById("target-div");
const count = document.getElementById("count");
const pActive = document.querySelector(".p-filter-active");
const mainDiv = document.querySelector(".main-div");
const left = document.querySelector(".div-items-left");
const filter = document.querySelector(".div-filter");
const all = document.querySelector(".p-filter-all");
const completed = document.querySelector(".p-filter-completed");
const clearCompleted = document.getElementById("clear-completed");
let arrayOfTodos = [];
let countOfTodos = 0;
let isDark = false;
let araayChildren = [];

input.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && input.value != "") {
        const newTodo = document.createElement("div");
            if(isDark) {
                newTodo.style.backgroundColor = "#25273D";  
            }else {
                newTodo.style.backgroundColor = "";
            }
            const checkCircle = document.createElement("div");
            const check = document.createElement("img");
            const cut = document.createElement("img");
            let isDone = false;
            newTodo.classList.add("todo-s");
            checkCircle.classList.add("div-input-circle-2");
            check.src = "./todo-app-main/images/icon-check.svg";
            check.classList.add("icon-check");
            cut.src = "./todo-app-main/images/icon-cross.svg";
            cut.classList.add("icon-cross");
            newTodo.innerHTML = input.value;
            target.appendChild(newTodo);
            newTodo.appendChild(checkCircle);
            newTodo.appendChild(check);
            newTodo.appendChild(cut);
            let randomNumb = Math.random();
            let objectOfTodos = {status: "",  todo: "", id: randomNumb};
            objectOfTodos.status = "Active";
            objectOfTodos.todo = input.value;
            arrayOfTodos.push(objectOfTodos);
            newTodo.value = randomNumb;
            console.log(newTodo.value);
            console.log(objectOfTodos);
            console.log(arrayOfTodos);
            input.value = "";
            countOfTodos += 1;
            count.innerHTML = countOfTodos;
            all.style.color = "#3A7CFD";
            console.log(target.children);
            checkCircle.addEventListener("click", () => {
                if(objectOfTodos.status == "Active") {
                    if(newTodo.value == objectOfTodos.id) {
                        objectOfTodos.status = "completed";
                        console.log(objectOfTodos);
                        console.log(arrayOfTodos);
                    }
                    checkCircle.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
                    newTodo.style.color = "#D1D2DA";
                    newTodo.style.textDecoration = "line-through";
                    check.style.zIndex = "98";
                }else if (objectOfTodos.status == "completed") {
                    if(newTodo.value == objectOfTodos.id) {
                        objectOfTodos.status = "Active";
                        console.log(objectOfTodos);
                        console.log(arrayOfTodos);
                    }
                    checkCircle.style.background = "";
                    newTodo.style.color = "";
                    newTodo.style.textDecoration = "none";
                    check.style.zIndex = "0";
                }
            })
            check.addEventListener("click", () => {
                if(objectOfTodos.status == "Active") {
                    if(newTodo.value == objectOfTodos.id) {
                        objectOfTodos.status = "completed";
                        console.log(objectOfTodos);
                        console.log(arrayOfTodos);
                    }
                    checkCircle.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
                    newTodo.style.color = "#D1D2DA";
                    newTodo.style.textDecoration = "line-through";
                    check.style.zIndex = "98";
                }else if (objectOfTodos.status == "completed") {
                    if(newTodo.value == objectOfTodos.id) {
                        objectOfTodos.status = "Active";
                        console.log(objectOfTodos);
                        console.log(arrayOfTodos);
                    }
                    checkCircle.style.background = "";
                    newTodo.style.color = "";
                    newTodo.style.textDecoration = "none";
                    check.style.zIndex = "0";
                }
            })
            cut.addEventListener("click", () => {
                countOfTodos -= 1;
                count.innerHTML = countOfTodos;
                let deleted = arrayOfTodos.indexOf(objectOfTodos);
                arrayOfTodos.splice(deleted, 1);
                target.removeChild(newTodo);
                console.log(arrayOfTodos)
            })
            completed.addEventListener("click", () => {
                pActive.style.color = "";
                all.style.color = "";
                completed.style.color = "#3A7CFD";
                let numbOfCompleted = 0;
                arrayOfTodos.map(item => {
                    if(item.status == "completed") {
                        numbOfCompleted++;
                    }
                })
                count.innerHTML = numbOfCompleted;
                if(objectOfTodos.status == "Active") {
                    newTodo.style.display = "none";
                }else {
                    newTodo.style.display = "block";
                }
            })
            pActive.addEventListener("click", () => {
                pActive.style.color = "#3A7CFD";
                completed.style.color = "";
                all.style.color = "";
                let numbOfActive = 0;
                arrayOfTodos.map(item => {
                    if(item.status == "Active") {
                        numbOfActive++;
                    }
                })
                count.innerHTML = numbOfActive;
                if(objectOfTodos.status == "completed") {
                    newTodo.style.display = "none";
                    console.log(newTodo);
                } else {
                    newTodo.style.display = "block";
                }
            })
            all.addEventListener("click", () => {
                newTodo.style.display = "block";
                all.style.color = "#3A7CFD";
                completed.style.color = "";
                pActive.style.color = "";
                count.innerHTML = countOfTodos;
            })
            clearCompleted.addEventListener("click", () => {
                // arrayOfTodos.map((item, index) => {
                //     if(item.status == "completed") {
                //         arrayOfTodos.splice(index, 1);
                //         target.removeChild(newTodo);

                //     }
                // })
                
                console.log(arrayOfTodos);

            })

    }
})



moon.addEventListener("click", () => {
    isDark = !isDark;
    console.log(isDark);
    araayChildren = [...target.children];
    if (isDark) {
        if(window.innerWidth < 1440) {
            body.style.backgroundImage = "url('./todo-app-main/images/bg-mobile-dark.jpg')";
            console.log(2+5);
        } else {
            body.style.backgroundImage = "url('./todo-app-main/images/bg-desktop-dark.jpg')";
            console.log(20+5);
        }
        body.style.backgroundColor = "#171722";
        input.style.backgroundColor = "#25273D";
        mainDiv.style.backgroundColor = "#25273D";
        mainDiv.style.boxShadow = "none";
        left.style.backgroundColor = "#25273D";
        left.style.boxShadow = "none";
        filter.style.backgroundColor = "#25273D";
        filter.style.boxShadow = "none";
        moon.src = "./todo-app-main/images/icon-sun.svg";
        if(target.children.length > 0) {
            console.log(target.children[0]);
            araayChildren.map((element) => {
                element.style.backgroundColor = "#25273D";
                element.style.borderBottom = "solid 1px #393A4B";
            }); 
        }
    }else {
        body.style.backgroundImage = "";
        body.style.backgroundColor = "";
        input.style.backgroundColor = "";
        mainDiv.style.backgroundColor = "";
        mainDiv.style.boxShadow = "";
        left.style.backgroundColor = "";
        left.style.boxShadow = "";
        filter.style.backgroundColor = "";
        filter.style.boxShadow = "";
        moon.src = "./todo-app-main/images/icon-moon.svg"
        if(target.children.length > 0) {
            araayChildren.map(element => {
                element.style.backgroundColor = "";
                element.style.borderBottom = "";
            }); 
        }
    }
})

