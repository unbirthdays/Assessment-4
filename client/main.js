const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const toDo = document.querySelector("#todo") // My idea was to grab the data of a date and a text entry to submit into a database
let toDoDate = document.querySelector("#todo-date")
let toDoText = document.querySelector("#todo-text")
const toDoList = document.querySelector("#todo-list")
const listBtn = document.getElementById("allList") // and then show what we put as another feature
const delBtn = document.getElementById("deleteButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const getToDoValues = () => {
    // I have these here to continually access the values
    toDoDate = document.querySelector("#todo-date").value
    toDoText = document.querySelector("#todo-text").value

    data = {
        "date": toDoDate,
        "text": toDoText
    }

    return data
}

const addList = (event) => { // i normally wouldn't have passed a param if it wasn't for preventing the refresh
    event.preventDefault(); // just really annoying to have it keep refreshing

    let payload = getToDoValues()
    axios.post("http://localhost:4000/api/list/", payload)
        .then(res => {
            alert("To Do List Item Added!");
        })
};


const allList = () => {
    axios.get("http://localhost:4000/api/showAll/")
        .then(res => {
            html = "<ul>"; // THIS IS AN HTML INJECTION!!!!!!!!
            for(let i = 0; i < res.data.length; i++) {
                let ele = "<li>" + res.data[i].date + ", " + res.data[i].text + "</li>" 
                html += ele
            }

            html += "</ul>"
            
            toDoList.innerHTML = html // needs this to edit list and show up
        })
};

const deleteList = () => {
    axios.delete("http://localhost:4000/api/deleteAll/")
        .then(res => {
        alert("Entries deleted.");
        allList();
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
toDo.addEventListener('submit', addList)
listBtn.addEventListener('click', allList)
delBtn.addEventListener('click', deleteList)

