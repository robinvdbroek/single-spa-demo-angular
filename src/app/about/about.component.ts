import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  template: `
    <h1>About Angular...</h1>
    <p>
      Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
    </p>`
})
export class AboutComponent {
  constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
    console.log(baseHref);
  }
}
