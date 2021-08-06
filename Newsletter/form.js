document.getElementById("submit").addEventListener("click", (e) => {
    var email = document.getElementById("email").value;


    if (email.length == 0) {
        alert("Enter email!");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter correct email!");
        return;
    }

    e.preventDefault();


    var url = "http://antisloth-env-1.eba-2vq6nuns.ap-south-1.elasticbeanstalk.com/form/save";

    var xhr = new XMLHttpRequest();

    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");

    xhr.setRequestHeader("Content-Type", "application/json");

    var data = `{
        "email": "${email}"
    }`;

    xhr.send(data);
});