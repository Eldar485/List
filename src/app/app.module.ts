import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';
import { ItemComponent } from './item/item.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { AppEffects } from './app.effects';


const appRoutes: Routes = [
  {path: 'Editor', component: EditorComponent},
  {path: 'Preview', component: PreviewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PreviewComponent,
    ItemComponent,
    DropMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
