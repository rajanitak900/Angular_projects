import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User ={
//   id: string;
//   name: string;
//   avatar: string;
//  };

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // avatar= input.required<string>();
  // name = input.required<string>();
  // imagePath= computed(()=>'assets/users/' + this.avatar());
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    //  this.avatar.set();
    this.select.emit(this.user.id);
  }
}
