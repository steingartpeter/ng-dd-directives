import { Directive, input } from '@angular/core';

// a(nchor)s with appSafeLink attribute!
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
    qryParam = input('myApp',{alias:'appSafeLink'});
  constructor() {
    //console.log('Safe link is contructed');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you ant to leave the app?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from='+this.qryParam();

      return;
    }
    event.preventDefault();
  }
}
