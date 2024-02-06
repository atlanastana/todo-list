import {Injectable} from "@angular/core";
import {Item} from "../models/item.model";

@Injectable({providedIn: "root"})
export class LocalStorageService {

  getData() {
    return localStorage.getItem('data') || null;
  }

  setData(data: Array<Item>) {
    localStorage.setItem('data', JSON.stringify(data));
  }

}
