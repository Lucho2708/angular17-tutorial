import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  userName: string = "Luis";
  doesUserExists: boolean = true;
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];
  isEditable: boolean = true;

  onMouseOver(osName: string): void {
    console.log(osName);
  }
}
