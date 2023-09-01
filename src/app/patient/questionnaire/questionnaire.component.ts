import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {

  constructor(private router: Router) { }
  // Current index of the question being displayed
  currentQuestionIndex: number = 0;

  // Sample questions for the demo
  questions: any[] = [
    {
      id: 1,
      text: 'Do you have any allergies?',
      answer: null
    },
    {
      id: 2,
      text: 'Have you had any surgeries in the past?',
      answer: null
    },
    {
      id: 3,
      text: 'Are you currently on any medication?',
      answer: null
    },
    {
      id: 4,
      text: 'Do you have a family history of heart disease?',
      answer: null
    }
    // ... you can add more questions as needed
  ];

  // Go to the next question
  onNext(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Go to the previous question
  onPrev(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  // Optional: Function to submit the questionnaire (to be implemented)
  onSubmit(): void {
    console.log('Questionnaire submitted:', this.questions);
    this.router.navigate(['/payment']);
  }
  
}
