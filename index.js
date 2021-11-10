function submitData(name, email) {

const formData = {
    name: name,
    email: email,    
}

const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(formData)
}

return fetch("http://localhost:3000/users", configObj)
.then (function (response) {
    return response.json();
})
.then(function (object) {
    let body= document.querySelector("body")
    body.append(object.id)  
})
.catch(function(error) {
    let body = document.querySelector("body")
    body.append(error.message)
    
})
}

