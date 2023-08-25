import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="bg-gray-800">
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <div class="text-white">
            <a href="/" class="text-xl font-semibold">Utility Tools</a>
          </div>
          <div class="hidden space-x-4 md:flex">
            <a href="/" class="text-gray-300 hover:text-white">Home</a>
            <a href="/about" class="text-gray-300 hover:text-white">About</a>
            <a href="/services" class="text-gray-300 hover:text-white">Services</a>
            <a href="/contact" class="text-gray-300 hover:text-white">Contact</a>
          </div>
          <div class="relative md:hidden">
            <button class="text-gray-300 hover:text-white focus:outline-none" (click)="toggleMobileMenu()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
                <path
                  fill-rule="evenodd"
                  d="M3 4.5a.5.5 0 011 0V5h12a.5.5 0 110 1H4a.5.5 0 01-.5-.5v-1zm0 5a.5.5 0 01.5-.5h12a.5.5 0 110 1H4a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h12a.5.5 0 110 1H4a.5.5 0 01-.5-.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div *ngIf="mobileMenuOpen" class=" left-0 right-0 top-0 bg-gray-800 px-6 py-3">
              <a href="/" class="block py-2 text-white">Home</a>
              <a href="/about" class="block py-2 text-white">About</a>
              <a href="/services" class="block py-2 text-white">Services</a>
              <a href="/contact" class="block py-2 text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
