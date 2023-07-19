form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login", { //get json response from controllers login
        method:"POST",
        body: JSON.stringify(login), 
        headers: {
            "Content-Type":"application/json"

        }
    }).then(res => res.json())
    .then(data => { //if login fails
        if(data.status == "error"){
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
        }
        else{ //if login is successful
            error.style.display = "none"
            success.style.display = "block"
            success.innerText = data.success
            setTimeout(() => {
                window.open('../home.html', '_self'); //redirects to home after login
            }, 500); 
        }
    })
})