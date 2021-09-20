import { StepperComponent } from './stepper/stepper.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { AmplifystartComponent } from './amplifystart/amplifystart.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'amplifystart', component: AmplifystartComponent },
  { path: 'grid-demo', component: GridDemoComponent},
  { path: 'app-stepper', component: StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
