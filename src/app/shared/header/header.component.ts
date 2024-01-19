import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContatoComponent } from '../contato/contato.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContatoComponent, {
      width: '50%'
    })
  }

}
