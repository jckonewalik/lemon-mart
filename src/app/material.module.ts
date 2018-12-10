import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule,
    MatSidenavModule, MatListModule
    
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule,
    MatSidenavModule, MatListModule
  ]
})
export class MaterialModule { }
