form.addEventListener("submit", () => {
    const register = {
        email: email.value,
        password: password.value
    }
    fetch("/api/register", { //get json response from controllers register
        method:"POST",
        body:JSON.stringify(register), 
        headers: {
            "Content-Type":"application/json"

        }
    }).then(res => res.json())
    .then(data => { //if register fails
        if(data.status == "error"){
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
        }
        else{ //if register is successful
            error.style.display = "none"
            success.style.display = "block"
            success.innerText = data.success
            setTimeout(() => {
                window.open('/login', '_self'); //redirects to login after register
              }, 500);
        }
    })
})