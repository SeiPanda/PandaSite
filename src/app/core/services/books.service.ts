﻿import {Injectable} from "@angular/core";
import {Book} from "../models/book.model";
import {BookDummys} from "../models/book.dummy";

@Injectable()
export class BooksService {

  books: Book[] = BookDummys;

  loadAllBooks(){
    //Endpoint aufruf BookEndpoint LoadAllBooks()
    return this.books.slice();
  }

  loadBook(id: string){
    const book = this.books.find(x => x.id === +id)

    return book;
  }



}
