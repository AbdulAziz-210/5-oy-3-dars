




// // Uy ishi


////   Inputdan yozilgan content'ni <li></li> ni ichiga qanaqqilib yozish bilolmadim -->





const inputText = document.getElementById("inputText")
// const button = document.getElementById("btn")
const text = document.getElementById("text") 
// let content = document.querySelectorAll("li")

inputText.addEventListener("change", (event) => {
    let inputValue = event.target.value;
    text.innerHTML += `<p>${inputValue}</p>`;
    event.target.value = " ";
})

