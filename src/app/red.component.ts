import { Component } from '@angular/core';

@Component({
  template: `
    <div class="very-pale-red padded">
      <h2>Red</h2>
    </div>`,
  styles: ['.very-pale-red {background-color: #ffb3b3;}']
})
export class RedComponent {
}
