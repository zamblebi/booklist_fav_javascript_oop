let btnAdd = document.querySelector('.btn')
let name_book = document.querySelector('#name_book')
let author = document.querySelector('#author')
let details = document.querySelector('#details')





function Book(name, author, details){
    this.name = name;
    this.author = author;
    this.details = details;
    this.all_info = () => {
        return `Name of book: ${this.name} author : ${this.author} and details is : ${this.details}`
    }
}


let chair_de_poule = new Book('Chair de poule', 'Allan stresfol', 'Lorem ipsum dolor sit amet consectetur.' );