import { BookdetailPage } from './../bookdetail/bookdetail';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  private bookid:number;

  books:Book;
  category:string;
  
  constructor(public bookrsest:BookRestProvider ,public  navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    this.bookrsest.getbookList().subscribe(data=>{
      this.books=data.filter (book => book.category === this.category) ;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

showDetail(bookid:number){
  this.navCtrl.push(BookdetailPage,
    {bookid:bookid}
    );
  }


}
