import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsPanelComponent } from './results-panel/results-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

const routes: Routes = [
  {path: '', component: SearchPanelComponent},
  {path: 'results', component: ResultsPanelComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
