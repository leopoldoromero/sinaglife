import moment from 'moment';
import { StorageHandlerHelper } from './StorageHandler.helper';

export class SessionHandlerHelper {
  static readonly storagekey = 'visitHistory';

  static create() {
    const sessionData: SessionData = {
      id: '123456789',
      pageVisited: 1,
      startedAt: moment().format('YYYY-MM-DD'),
    };
    StorageHandlerHelper.save(this.storagekey, sessionData);
  }

  static incrementPageVisit() {
    const sessionData = StorageHandlerHelper.retrieve(this.storagekey) as SessionData;
    if (sessionData) {
      sessionData.pageVisited++;
      StorageHandlerHelper.save(this.storagekey, sessionData);
    }
  }
}

export interface SessionData {
  id: string;
  pageVisited: number;
  startedAt: string;
}
