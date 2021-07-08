document.addEventListener('DOMContentLoaded', () => {
       fetchDogs()
})

// On page load, render a list of already registered dogs in the table. You can fetch these dogs 
// from http://localhost:3000/dogs (Links to an external site.).

// The dog should be put on the table as a table row. The HTML might look something like this: 
// <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

// Make a dog editable. Clicking on the edit button next to a dog should populate the top form 
// with that dog's current information.

function fetchDogs () {
    fetch("http://localhost:3000/dogs")
    .then(resp => resp.json())
    .then(dogs => dogs.map(renderDogTable))
}


function renderDogTable(dog) {
    console.log(dog)
    let tbody = document.querySelector("#table-body")
    let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    let tdBreed = document.createElement("td")
    let tdSex = document.createElement("td")
    let tdButton = document.createElement("button")
    tbody.append(tr)
    tr.append(tdName, tdBreed, tdSex, tdButton)

    tdName.textContent = dog.name
    tdBreed.textContent = dog.breed
    tdSex.textContent = dog.sex
    tdButton.textContent = "Edit Dog"

    tdButton.addEventListener("click", () => {
        let dogForm = document.querySelector("#dog-form")
        dogForm.name.value = tdName.textContent
        dogForm.breed.value = tdBreed.textContent
        dogForm.sex.value = tdSex.textContent
    })
}