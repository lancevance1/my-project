import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="container mx-auto py-10">
            <h1 class="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
            <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero
                quis metus convallis finibus non eget dui. Proin in ex vestibulum,
                interdum nunc sed, feugiat dolor.
            </p>
        </div>
    `,
})
export class HomeComponent {}
