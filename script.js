const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const input = document.getElementById("input");
const body = document.querySelector("body");
const target = document.getElementById("target-div");
const count = document.getElementById("count");
const pActive = document.querySelector(".p-filter-active");
const pActiveMob = document.querySelector(".p-filter-active-mobile");
const mainDiv = document.querySelector(".main-div");
const left = document.querySelector(".div-items-left");
const filter = document.querySelector(".div-filter");
const all = document.querySelector(".p-filter-all");
const allMob = document.querySelector(".p-filter-all-mobile");
const completed = document.querySelector(".p-filter-completed");
const completedMob = document.querySelector(".p-filter-completed-mobile");
const clearCompleted = document.getElementById("clear-completed");
let arrayOfTodos = [];
let countOfTodos = 0;
let isDark = false;
let araayChildren = [];
let arr = [];

input.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && input.value != "") {
        const newTodo = document.createElement("div");
        if (isDark) {
            newTodo.style.backgroundColor = "#25273D";
            newTodo.style.borderBottom = "solid 1px #393A4B";
        } else {
            newTodo.style.backgroundColor = "";
            newTodo.style.borderBottom = "";
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
        let objectOfTodos = { status: "", todo: "", id: randomNumb };
        objectOfTodos.status = "Active";
        objectOfTodos.todo = input.value;
        arrayOfTodos.push(objectOfTodos);
        newTodo.value = randomNumb;
        input.value = "";
        countOfTodos += 1;
        count.innerHTML = countOfTodos;
        all.style.color = "#3A7CFD";
        allMob.style.color = "#3A7CFD";
        checkCircle.addEventListener("click", () => {
            if (objectOfTodos.status == "Active") {
                if (newTodo.value == objectOfTodos.id) {
                    objectOfTodos.status = "completed";
                }
                checkCircle.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
                newTodo.style.color = "#D1D2DA";
                newTodo.style.textDecoration = "line-through";
                check.style.zIndex = "98";
            } else if (objectOfTodos.status == "completed") {
                if (newTodo.value == objectOfTodos.id) {
                    objectOfTodos.status = "Active";
                }
                checkCircle.style.background = "";
                newTodo.style.color = "";
                newTodo.style.textDecoration = "none";
                check.style.zIndex = "0";
            }
        })
        check.addEventListener("click", () => {
            if (objectOfTodos.status == "Active") {
                if (newTodo.value == objectOfTodos.id) {
                    objectOfTodos.status = "completed";
                }
                checkCircle.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
                newTodo.style.color = "#D1D2DA";
                newTodo.style.textDecoration = "line-through";
                check.style.zIndex = "98";
            } else if (objectOfTodos.status == "completed") {
                if (newTodo.value == objectOfTodos.id) {
                    objectOfTodos.status = "Active";
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
        })
        completed.addEventListener("click", () => {
            pActive.style.color = "";
            all.style.color = "";
            completed.style.color = "#3A7CFD";
            let numbOfCompleted = 0;
            arrayOfTodos.map(item => {
                if (item.status == "completed") {
                    numbOfCompleted++;
                }
            })
            count.innerHTML = numbOfCompleted;
            if (objectOfTodos.status == "Active") {
                newTodo.style.display = "none";
            } else {
                newTodo.style.display = "block";
            }
        })
        completedMob.addEventListener("click", () => {
            pActiveMob.style.color = "";
            allMob.style.color = "";
            completedMob.style.color = "#3A7CFD";
            let numbOfCompleted = 0;
            arrayOfTodos.map(item => {
                if (item.status == "completed") {
                    numbOfCompleted++;
                }
            })
            count.innerHTML = numbOfCompleted;
            if (objectOfTodos.status == "Active") {
                newTodo.style.display = "none";
            } else {
                newTodo.style.display = "block";
            }
        })
        pActive.addEventListener("click", () => {
            pActive.style.color = "#3A7CFD";
            completed.style.color = "";
            all.style.color = "";
            let numbOfActive = 0;
            arrayOfTodos.map(item => {
                if (item.status == "Active") {
                    numbOfActive++;
                }
            })
            count.innerHTML = numbOfActive;
            if (objectOfTodos.status == "completed") {
                newTodo.style.display = "none";
            } else {
                newTodo.style.display = "block";
            }
        })
        pActiveMob.addEventListener("click", () => {
            pActiveMob.style.color = "#3A7CFD";
            completedMob.style.color = "";
            allMob.style.color = "";
            let numbOfActive = 0;
            arrayOfTodos.map(item => {
                if (item.status == "Active") {
                    numbOfActive++;
                }
            })
            count.innerHTML = numbOfActive;
            if (objectOfTodos.status == "completed") {
                newTodo.style.display = "none";
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
        allMob.addEventListener("click", () => {
            newTodo.style.display = "block";
            allMob.style.color = "#3A7CFD";
            completedMob.style.color = "";
            pActiveMob.style.color = "";
            count.innerHTML = countOfTodos;
        })
        clearCompleted.addEventListener("click", () => {
            arrayOfTodos.map((item, index) => {
                if (item.status == "completed") {
                    arrayOfTodos.splice(index, 1);
                }
            })
            let n = 0;
            for (let i = 0; i < target.children.length; i++) {
                if (target.children[i].style.textDecoration == "line-through") {
                    target.removeChild(target.children[i]);
                    n += 1;
                }
            }
            countOfTodos -= n;
            count.innerHTML = countOfTodos;
        })

    }
})



moon.addEventListener("click", () => {
    isDark = !isDark;
    araayChildren = [...target.children];
    if (isDark) {
        if (window.innerWidth < 1440) {
            body.style.backgroundImage = "url('./todo-app-main/images/bg-mobile-dark.jpg')";
        } else {
            body.style.backgroundImage = "url('./todo-app-main/images/bg-desktop-dark.jpg')";
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
        input.style.color = "#C8CBE7";
        if (target.children.length > 0) {
            araayChildren.map((element) => {
                element.style.backgroundColor = "#25273D";
                element.style.borderBottom = "solid 1px #393A4B";
            });
        }
    } else {
        body.style.backgroundImage = "";
        body.style.backgroundColor = "";
        input.style.backgroundColor = "";
        mainDiv.style.backgroundColor = "";
        mainDiv.style.boxShadow = "";
        left.style.backgroundColor = "";
        left.style.boxShadow = "";
        filter.style.backgroundColor = "";
        filter.style.boxShadow = "";
        input.style.color = "";
        moon.src = "./todo-app-main/images/icon-moon.svg"
        if (target.children.length > 0) {
            araayChildren.map(element => {
                element.style.backgroundColor = "";
                element.style.borderBottom = "";
            });
        }
    }
})

