const findBook = document.querySelector(".find");
const books = document.querySelectorAll(".book");

findBook.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase();
    books.forEach(item =>{
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})