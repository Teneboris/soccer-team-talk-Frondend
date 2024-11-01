import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {GameComponent} from "./pages/game/game.component";
import {TrainingComponent} from "./pages/training/training.component";
import {MessageComponent} from "./pages/message/message.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {
  DialogContentTrainingDetailsComponent
} from "./components/dialog-content-open-training-details/dialog-content-training-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/:trainingId', component: TrainingComponent},
  { path: 'game', component: GameComponent },
  //{ path: 'training/message/:trainingId', component: MessageComponent },
  //{ path: 'game/message/:gameId', component: MessageComponent },
  { path: 'message', component: MessageComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
