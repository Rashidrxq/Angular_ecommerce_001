import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  menuOpen = false;

  constructor(public cartService: CartService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
