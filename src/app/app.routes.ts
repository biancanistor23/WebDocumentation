import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RxJsDocComponent } from './features/rx-js-doc/rx-js-doc.component';
import { OperatorsComponent } from './features/rx-js-doc/operators/operators.component';
import { CombinationComponent } from './features/rx-js-doc/operators/combination/combination.component';
import { CombineLatestAllDocComponent } from './features/rx-js-doc/operators/combination/combine-latest-all-doc/combine-latest-all-doc.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rxjs',
    component: RxJsDocComponent,
    children: [
      {
        path: 'operators',
        component: OperatorsComponent,
        children: [
          {
            path: 'combination',
            component: CombinationComponent,
            children: [
              { path: 'latestAll', component: CombineLatestAllDocComponent },
            ],
          },
        ],
      },
    ],
  },
];
