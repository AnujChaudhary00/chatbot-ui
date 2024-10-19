import { Inject, Injectable, InjectionToken } from '@angular/core';

export const CHAT_CONFIGS = new InjectionToken<Storage>('chat.configs', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class chatService {
  constructor(@Inject(CHAT_CONFIGS) public storage: Storage) {
    console.log('Chat Service Initialized');
  }

  getChatConfigs() {
    return this.storage.getItem('chat_configs');
  }

  getChats() {
    return ['what is Logger', 'what is Service', 'what is Module'];
  }
}
