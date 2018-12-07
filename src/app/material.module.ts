import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule
    
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule    
  ]
})
export class MaterialModule { }
