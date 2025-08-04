import { Directive } from '@angular/core';

// a(nchor)s with appSafeLink attribute!
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('Safe link is contructed');
  }

  onConfirmLeavePage(event: MouseEvent) {
    console.log('Call OK');
    const wantsToLeave = window.confirm('Do you ant to leave the app?');
    if (wantsToLeave) {
      return;
    }
    event.preventDefault();
  }
}
