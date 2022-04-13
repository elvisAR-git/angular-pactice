import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Nathan John', 'You live to die, but it is what you die for that is worth living.', 'Nathan John', 3, 1),
    new Quote(2, 'Bruce Lee', 'Be like water, my friend.', 'Mr Net', 14, 3),
    new Quote(3, 'Maya Angelou', 'I am a Woman Phenomenally.Phenomenal Woman,that is me.', 'Tori', 0, 0),
    new Quote(4, 'Gandhi', 'You must be the change you wish to see in the world.', 'Mr Net', 0, 0),
    new Quote(5, 'Joshua J. Marine', 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', 'Mr Net', 0, 0),

  ];



  maxPerformanceIndex = Math.max(...this.quotes.map((quote) => quote.upvote - quote.downvote));

  highestUpvotes = Math.max(...this.quotes.map((quote) => quote.upvote));



  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.upvote = 0;
    quote.downvote = 0;
    this.quotes.push(quote)

    // reverse array
    this.quotes.reverse();


  }


  ngOnInit(): void {
  }


  upvoteQuote(quote: Quote) {
    console.log(quote);
    quote.upvote += 1;

    this.maxPerformanceIndex = Math.max(...this.quotes.map((quote) => quote.upvote - quote.downvote));
    this.highestUpvotes = Math.max(...this.quotes.map((quote) => quote.upvote));
  }

  downvoteQuote(quote: Quote) {
    quote.downvote += 1;

    this.maxPerformanceIndex = Math.max(...this.quotes.map((quote) => quote.upvote - quote.downvote));
    this.highestUpvotes = Math.max(...this.quotes.map((quote) => quote.upvote));
  }
}
