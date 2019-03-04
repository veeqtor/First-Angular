import { ConvertTOSpacesPipe } from './convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';

@NgModule({
  declarations: [
    StarComponent,
    ConvertTOSpacesPipe
  ],

  imports: [
    CommonModule
  ],

  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertTOSpacesPipe
  ]
})
export class SharedModule { }
