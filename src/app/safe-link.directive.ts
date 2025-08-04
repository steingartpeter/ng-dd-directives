import { Directive } from "@angular/core";

// a(nchor)s with appSafeLink attribute!
@Directive({
    selector:"a[appSafeLink]",
    standalone:true
})
export class SafeLinkDirective{
    constructor(){
        console.log('Safe link is contructed');
    }
}