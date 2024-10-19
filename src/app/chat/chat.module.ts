import { NgModule } from '@angular/core';
import { chatService } from './chat.service';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../directives/shared.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [SharedModule],
  exports: [ChatComponent],
  providers: [{ provide: chatService, useClass: chatService }],
})
export class ChatModule {}
