import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templatRef = inject(TemplateRef);
  private viewContRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('SHOW ELEMENT');
        this.viewContRef.createEmbeddedView(this.templatRef);
      } else {
        console.log('HIDE ELEMENT');
        this.viewContRef.clear();
      }
    });
  }
}
