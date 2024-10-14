import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  DialogContentAddTrainingComponent
} from "../../components/dialog-content-add-training/dialog-content-add-training.component";
import {
  DialogContentAddGameComponent
} from "../../components/dialog-content-add-game/dialog-content-add-game.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  clickedCard: number | null = null;
  readonly dialog = inject(MatDialog)

  games = [
    {id:1, name:"game 1", description:"the description of the game 1 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:true},
    {id:2, name:"game 2", description:"the description of the game 2 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:false},
    {id:3, name:"game 3", description:"the description of the game 3 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:true},
    {id:4, name:"game 4", description:"the description of the game 4 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:false},
    {id:5, name:"game 5", description:"the description of the game 5 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:true},
    {id:6, name:"game 6", description:"the description of the game 6 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:false},
    {id:7, name:"game 7", description:"the description of the game 7 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:true},
    {id:8, name:"game 8", description:"the description of the game 8 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:false},
    {id:9, name:"game 9", description:"the description of the game 9 so this topic will describe all the position of the game and our star 11 respectively the substitutes", active:true},
  ]

  onCardClick(index: number): void {
    this.clickedCard = this.clickedCard === index ? null : index
  }

  openDialog () {
    const dialogRef = this.dialog.open(DialogContentAddGameComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
