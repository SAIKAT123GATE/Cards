
function toggle_visibility(id){
    var y=document.getElementById(id);
                    
    
    if(y.style.display==='none')
        {
            y.style.display='block';
                        
                        
        }
        else
            y.style.display='none';
        }

function myFunction(x) {
        x.classList.toggle("fa-angle-down");
        }
            

//card section

setInterval(clock, 1000);
function clock() {
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var sec = time.getSeconds();
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    var displayTime = hrs + ":" + mins + ":" + sec;
    document.getElementById("time1").innerHTML = displayTime;
    document.getElementById("time2").innerHTML = displayTime;
    document.getElementById("time3").innerHTML = displayTime;
    document.getElementById("time4").innerHTML = displayTime;
    document.getElementById("time5").innerHTML = displayTime;
    document.getElementById("time6").innerHTML = displayTime;
}

function cardDisplay(index) {
    
    document.getElementById("history1").setAttribute("class", "inactive");
    document.getElementById("history2").setAttribute("class", "inactive");
    document.getElementById("history3").setAttribute("class", "inactive");
    document.getElementById("history4").setAttribute("class", "inactive");
    document.getElementById("history5").setAttribute("class", "inactive");
    document.getElementById("history6").setAttribute("class", "inactive");
    document.getElementById(index).setAttribute("class", "active");

document.getElementById("btn-all").setAttribute("class","inactive-btn")

    document.getElementById("open").setAttribute("class", "inactive");
    document.getElementById("calling").setAttribute("class", "inactive");
    document.getElementById("pickedUp").setAttribute("class", "inactive");
    document.getElementById("followUp").setAttribute("class", "inactive");
    document.getElementById("login").setAttribute("class", "inactive");
    document.getElementById("arrange").setAttribute("class", "inactive");

    document.getElementById("btn-open").setAttribute("class", "inactive-btn");
    document
        .getElementById("btn-calling")
        .setAttribute("class", "inactive-btn");
    document
        .getElementById("btn-pickedUp")
        .setAttribute("class", "inactive-btn");
    document
        .getElementById("btn-followUp")
        .setAttribute("class", "inactive-btn");
    document.getElementById("btn-login").setAttribute("class", "inactive-btn");
    document
        .getElementById("btn-arrange")
        .setAttribute("class", "inactive-btn");

    document.getElementById(index).setAttribute("class", "active");
    document.getElementById("btn-" + index).setAttribute("class", "active-btn");
}

function cardAllDisplay() {
    if (
        document.getElementById("btn-all").getAttribute("class") ===
        "inactive-btn"
    ) {
        document.getElementById("btn-all").setAttribute("class", "active-btn");

        document.getElementById("open").setAttribute("class", "active");
        document.getElementById("calling").setAttribute("class", "active");
        document.getElementById("pickedUp").setAttribute("class", "active");
        document.getElementById("followUp").setAttribute("class", "active");
        document.getElementById("login").setAttribute("class", "active");
        document.getElementById("arrange").setAttribute("class", "active");
        document
            .getElementById("btn-open")
            .setAttribute("class", "inactive-btn");
        document
            .getElementById("btn-calling")
            .setAttribute("class", "inactive-btn");
        document
            .getElementById("btn-pickedUp")
            .setAttribute("class", "inactive-btn");
        document
            .getElementById("btn-followUp")
            .setAttribute("class", "inactive-btn");
        document
            .getElementById("btn-login")
            .setAttribute("class", "inactive-btn");
        document
            .getElementById("btn-arrange")
            .setAttribute("class", "inactive-btn");
    } else {
        document
            .getElementById("btn-all")
            .setAttribute("class", "inactive-btn");

        document.getElementById("btn-open").setAttribute("class", "active");
        document.getElementById("open").setAttribute("class", "active-btn");
        document.getElementById("calling").setAttribute("class", "inactive");
        document.getElementById("pickedUp").setAttribute("class", "inactive");
        document.getElementById("followUp").setAttribute("class", "inactive");
        document.getElementById("login").setAttribute("class", "inactive");
        document.getElementById("arrange").setAttribute("class", "inactive");
    }
}

function status(state) {
    console.log(state);
    if (state === "success") {
        document
            .getElementById("comment-section")
            .setAttribute("class", "inactive");
    } else {
        document
            .getElementById("comment-section")
            .setAttribute("class", "active");
    }
}

function inputBox() {
    var state = document.getElementById("inputBox").getAttribute("class");
    console.log(state);
    if (state === "inactive-link") {
        document
            .getElementById("inputBox")
            .setAttribute("class", "active-link");
    } else {
        document
            .getElementById("inputBox")
            .setAttribute("class", "inactive-link");
    }
}

function editLink(text) {
    document.getElementById("link-address").innerHTML = text;
    document.getElementById("link-address").setAttribute("href", text);
    document.getElementById("edit-link-address").value = null;
    document.getElementById("inputBox").setAttribute("class", "inactive-link");
}

function display(index) {
    if (document.getElementById(index).getAttribute("class") === "inactive") {
        document.getElementById("history1").setAttribute("class", "inactive");
        document.getElementById("history2").setAttribute("class", "inactive");
        document.getElementById("history3").setAttribute("class", "inactive");
        document.getElementById("history4").setAttribute("class", "inactive");
        document.getElementById("history5").setAttribute("class", "inactive");
        document.getElementById("history6").setAttribute("class", "inactive");
        document.getElementById(index).setAttribute("class", "active");
    } else {
        document.getElementById(index).setAttribute("class", "inactive");
    }
}

function shift(direction) {
    console.log("working");
    if (direction === "right") {
        document.getElementById("dynamic").scrollLeft += 100;
    } else {
        document.getElementById("dynamic").scrollLeft -= 100;
    }
}

