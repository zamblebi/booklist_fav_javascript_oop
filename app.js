let btnAdd = document.querySelector('.btn')
let name_book = document.querySelector('#name_book')
let author = document.querySelector('#author')
let details = document.querySelector('#details')

let tBody = document.querySelector('tbody')


class Book{
    constructor(name, author, details){
        this.name = name;
        this.author = author;
        this.details = details;
    }
    all_info () {
        return `Name of book: ${this.name} author : ${this.author} and details is : ${this.details}`
    }
}

let allBookFav = [];


btnAdd.addEventListener("click", (e)=> {
    // e.preventDefault();
    
    let newBookAdded = new Book(name_book.value, author.value, details.value);
    // create new books with class instance
    
    if(name_book.value == '' && author.value == '' && details.value == ''){
        console.error('value empty')
    }else{
        let valueBookAdded = {name: newBookAdded.name, author: newBookAdded.author, details: newBookAdded.details};
        
        if(!localStorage.getItem('books')){

            if(allBookFav.length == 0){
                allBookFav.push(valueBookAdded);
                localStorage.setItem('books', JSON.stringify(allBookFav))
        }}else{
            allBookFav = JSON.parse(localStorage.getItem('books'));
            allBookFav.push(valueBookAdded);
            localStorage.setItem('books', JSON.stringify(allBookFav))
        }
        
    }
       
        name_book.value = ''
        author.value = ''
        details.value = ''
});

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
