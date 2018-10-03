import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBorderColor]'
})
export class BorderColorDirective implements AfterViewInit {
    @Input()
    public userAge: number;

    constructor(private  elRef: ElementRef,
                private  elemRender: Renderer2) {
    }

    ngAfterViewInit() {
        let earlyChildhood = 'greenyellow',
            middleChildhood = 'green',
            adolescence = ' darkgreen',
            Adulthood = '#EBD448',
            midleAge ='#6E6422',
            lateAdulthood = 'saddlebrown',
            dependentElder = 'firebrick';
        if (this.userAge >= 1 && this.userAge < 5) {
            this.elRef.nativeElement.style.border = `2px solid ${earlyChildhood}`;
        }
        if (this.userAge >= 5 && this.userAge < 14) {
            this.elRef.nativeElement.style.border = `2px solid ${middleChildhood}`;
        }
        if (this.userAge >= 12 && this.userAge < 20) {
            this.elRef.nativeElement.style.border = `2px solid ${adolescence}`;
        }
        if (this.userAge >= 20 && this.userAge < 40) {
            this.elRef.nativeElement.style.border = `2px solid ${Adulthood}`;
        }
        if (this.userAge >= 40 && this.userAge < 55) {
            this.elRef.nativeElement.style.border = `2px solid ${midleAge}`;
        }
        if (this.userAge >= 55 && this.userAge < 70) {
            this.elRef.nativeElement.style.border = `2px solid ${lateAdulthood}`;
        }
        if (this.userAge >= 70 && this.userAge < 99) {
            this.elRef.nativeElement.style.border = `2px solid ${dependentElder}`;
        }
    }

}
