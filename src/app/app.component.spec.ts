import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { BlueComponent } from './blue.component';
import { routing } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        routing
      ],
      declarations: [
        AppComponent,
        BlueComponent,
        GreenComponent,
        RedComponent
      ],
      providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
      ]
    }).compileComponents();
  }));
  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // test here
  }));
});
