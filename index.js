/* 
1- Create a program that fetches 10 users from the jsonplaceholderAPI


2- Using the data you just fetched, create 10 user cards and show them on the screen.

3- They might appear directly on the screen, or you can fetch the data with a button click, its your choice.

PS: You definitely dont need to use all the data coming from the API, design and style your user cards to your hearts desire!

BONUS: Do a POST request to the https://jsonplaceholder.typicode.com/posts endpoint adding a new post there, and console log the result.


*/
function getAllUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(usersData => usersData.forEach(user => renderUsers(user)))
}

function renderUsers(user){
    const card = document.createElement('li');
    card.className = 'card'
    card.innerHTML = `
    <h2> ${user.name}</h2>
    <p><b>Email</b>: ${user.email}</p>
    <p><b>Phone</b>: ${user.phone}</p>
    <p><b>Website</b>: ${user.website}</p>
    `
    document.querySelector("#users-list").appendChild(card)
}
getAllUsers()
const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Contant-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(ww => console.log(ww))
})



