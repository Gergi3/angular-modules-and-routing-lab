import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  public isActive = false;

  constructor() { }

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }

  switch() {
    this.isActive = !this.isActive;
  }
}
