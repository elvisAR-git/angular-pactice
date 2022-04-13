import { Quote } from './../../quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  showform: boolean = false;
  toggleform() {
    this.showform = !this.showform;
  }

  newQuote!: Quote;

  addQuoteForm = this.builder.group(
    {
      submittedby: ['', [Validators.required, Validators.minLength(3)]],
      quote: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)],],
    }
  );


  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    if (this.addQuoteForm.valid) {
      console.log(this.addQuoteForm.value);


      this.addQuote.emit(this.addQuoteForm.value);

      // clear form
      this.addQuoteForm.reset();
      // close form
      this.showform = false;
    }
  }




  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

}
