import {AfterViewInit, Directive, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[appUserImage]'
})
export class UserImageDirective implements AfterViewInit {
    @Input()
    public userImage: string;
    @Input()
    public userGender: string;

    constructor(private  elRef: ElementRef,
                private  elemRender: Renderer2) {
    }

    ngAfterViewInit() {
        const imgPath: string = '../../../assets/images/';

        if (this.userImage) {
            this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}${this.userImage}.png`);
        } else {
            if (this.userGender === 'male') {
                this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}male1.png`);

            } else {
                this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}female1.png`);

            }
        }
    }

}
