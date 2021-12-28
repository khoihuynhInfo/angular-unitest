import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  constructor(private auth: AuthService) {

  }

  ngOnInit()  {
 
  }

  login(email, password) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}

export class User {
  constructor(
    public email: string, 
    public password: string
  ) {

  }
}