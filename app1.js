function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(comments) {
    const container = document.getElementById('container')

    comments.forEach(comment => {
        const { id, name, email, body: description } = comment
        const commentDiv = document.createElement('div')
        //  commentDiv.classList.add('add')
        commentDiv.innerHTML = `
         <h2> ID: ${id}</h2>
         <h1> Name :${name} </h1>
         <h1> Email :${email} </h1>
         <p> Description : ${description} </p>
         <button onclick="showDetails(${id})"> Details </button>
         `
        container.appendChild(commentDiv)
    })
}

function showDetails(id) {
    const topDataField = document.getElementById('topdata')
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        // .then(data => console.log(data))
    .then(data => {
        const { id, name, email, body: description } = data ;

        topDataField.innerHTML = `
        <h2> ID: ${id}</h2>
        <h1> Name :${name} </h1>
        <h1> Email :${email} </h1>
        <p> Description : ${description} </p>
        `
        
    })
}

loadData();