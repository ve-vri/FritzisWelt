import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './_components/characters/characters.component';
import { HomeComponent } from './_components/home/home.component';
import { QuizComponent } from './_components/quiz/quiz.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "characters", component:CharactersComponent},
  {path: "quiz", component:QuizComponent},
  {path: "**", redirectTo: "/home", pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
