let btnAdd = document.querySelector('.btn')
let name_book = document.querySelector('#name_book')
let author = document.querySelector('#author')
let details = document.querySelector('#details')

let tBody = document.querySelector('tbody')


function Book(name, author, details){
    this.name = name;
    this.author = author;
    this.details = details;
    this.all_info = () => {
        return `Name of book: ${this.name} author : ${this.author} and details is : ${this.details}`
    }
}

var allBookFav = [];


btnAdd.addEventListener("click", (e)=> {
    e.preventDefault();

    let newBookAdded = new Book(name_book.value, author.value, details.value);
    // create new books with class instance
    
    if(name_book.value == '' && author.value == '' && details.value == ''){
        console.error('value empty')
    }else{
        let valueBookAdded = {name: newBookAdded.name, author: newBookAdded.author, details: newBookAdded.details};
        allBookFav.push(valueBookAdded);
        localStorage.setItem('books', JSON.stringify(allBookFav))

    }

    name_book.value = ''
    author.value = ''
    details.value = ''

    console.log(newBookAdded.all_info()) 
})

JSON.parse(localStorage.getItem('books')).map((book,i) => {
    tBody.innerHTML += `
    <tr>
        <td>
        ${book.name}
        </td>
        <td>
        ${book.author}
        </td>
        <td>
        ${book.details}
        </td>
    </tr>
    `
})
console.log(tBody)