import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class LocalStorageService {

  getData() {
    return localStorage.getItem('data') || null;
  }

  setData(data: string) {
    localStorage.setItem('data', JSON.stringify(data));
  }

}
