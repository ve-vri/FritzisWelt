import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  public questions = [
    { title: "Wer ist kein Bewohner des Seerosenteichs?", answers: ["Fritzi der Frosch", "Lilly die Libelle", "Madame Scharmilla", "Schnecke Schnickelschnack"], correctAnswer: 3 },
    { title: "Wer ist der größte Tollpatsch des Seerosenteichs?", answers: ["Igor der Igel", "Tausendfüßler Thade", "Amadeus die Ameise", "Schantal und Schorsch"], correctAnswer: 0 },
    { title: "Was isst der Tausendfüßler Thade am liebsten?", answers: ["Bananen", "Äpfel", "Orangen", "Schokolade"], correctAnswer: 3 },
  ]
  public errorCount = 0

  public currentQuestionIndex = 0;
  public selectedAnswerIndex?: string;
  public showResults = false;
  public showWrongAnswerAlert = false;

  constructor() {
    this.questions = this.shuffle(this.questions).map((question) => {
      const correctAnswer = question.answers[question.correctAnswer];
      question.answers = this.shuffle(question.answers);
      question.correctAnswer = question.answers.findIndex((a: any) => a == correctAnswer)
      return question
    });
  }

  public checkAnswer() {
    if (this.selectedAnswerIndex === undefined) {
      return;
    }
    if (parseInt(this.selectedAnswerIndex) === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.currentQuestionIndex++;
      this.selectedAnswerIndex = undefined;
      this.showWrongAnswerAlert = false
      if (this.currentQuestionIndex >= this.questions.length) {
        this.showResults = true
      }
    } else {
      this.showWrongAnswerAlert = true
      this.errorCount = this.errorCount + 1
    }
  }

  public startOver() {
    location.reload();
  }

  private shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}


