import { Component } from '@angular/core';

@Component({
    template:  `
        <div class="very-pale-green padded">
            <h2>Green</h2>
        </div>`,
    styles: ['.very-pale-green {background-color: LightGreen;}']
})
export class GreenComponent {
}