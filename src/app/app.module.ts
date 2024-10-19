import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { FocusInput } from './directives/focus.directive';
import { SharedModule } from './directives/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChatModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
