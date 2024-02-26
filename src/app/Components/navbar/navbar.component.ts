import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { faUser} from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faHeart = faHeart;
  faUser = faUser;
  faCartShopping =faCartShopping;
}
