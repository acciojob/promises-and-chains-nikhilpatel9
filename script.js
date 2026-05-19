document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!age || !name) {
        alert("Please enter valid details.");
        return;
    }

    let val = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(age) >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    val.then((message) => {
        alert(message);
    }).catch((error) => {
        alert(error);
    });
});