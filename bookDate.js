    const data  = require("./data/comingSoon.json");
  
   module.exports = { 

    getAllData(){
      return data.bookDate;
    },

  checkBookComing(book_id) {      
    for(let i in data.bookDate){
      if(data.bookDate[i].id == book_id)
        return data.bookDate[i].type;
    }
        
        return "err: book not found";
  },

  checkIdAndBook(book_id,book_name) {
    let foundbook = false;
    for(let i in data.bookDate){
      var bookDate = data.bookDate[i];
      if(bookDate.id == book_id){
        console.log(bookDate.id);
        console.log(bookDate.type);
        for(let j in bookDate.books){
          var bookName = bookDate.books[j];
          if(bookName.name == book_name){
            console.log(bookName.name);
            foundAge = true;
            return bookName;
          }
        }
      }
    }
    if (!foundbook)
      return ({"err":"bookDate not found"});
  }
};