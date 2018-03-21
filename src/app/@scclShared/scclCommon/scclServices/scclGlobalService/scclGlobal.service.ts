import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScclGlobalService {

    private _data = new Subject<any>();
    private _dataStream$ = this._data.asObservable();
    private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

    constructor() {
      this._dataStream$.subscribe((data) => {
          this._onEvent(data)
      });
    }

    notifyDataChanged(event, value) {
      let current = this._data[event]; 
      if (current !== value) {
        this._data[event] = value;

        this._data.next({
          event: event,
          data: this._data[event]
        });
      }
    }

    subscribe(event: string, callback: Function) {
      let subscribers = this._subscriptions.get(event) || [];
      subscribers.push(callback);
      this._subscriptions.set(event, subscribers);
    }

    _onEvent(data: any) {
      let subscribers = this._subscriptions.get(data['event']) || [];
      subscribers.forEach((callback) => {
        callback.call(null, data['data']);
      });
    }
    
    public unsubscribe (event: string) {
        this._subscriptions.delete(event)
    }
}
