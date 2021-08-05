function selectSize(id) {
    document.querySelectorAll(".size").forEach(e => {
        e.style.backgroundColor = "";
        e.style.borderRadius = "";
        e.style.color = "";
    });
    document.getElementById(id).style.backgroundColor = "rgb(235, 235, 235)";
    document.getElementById(id).style.borderRadius = "10px";
    document.getElementById(id).style.color = "black";
}

function changeColor(id) {
    document.getElementById(id).style.color = "red";
    document.getElementById(id).style.backgroundColor = "rgb(235, 235, 235)";
}