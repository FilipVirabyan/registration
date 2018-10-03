import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserImageDirective } from './directives/user-image.directive';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserCardComponent, UserImageDirective, BorderColorDirective],
    exports:[UserCardComponent]
})
export class SharedModule { }
