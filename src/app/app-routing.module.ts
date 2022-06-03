import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnalysisComponent} from "./components/analysis/analysis.component";

const routes: Routes = [
  {path: '', redirectTo: '/analysis', pathMatch: 'full'},
  {path: 'analysis', component: AnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
