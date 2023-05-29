import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  base = environment.apiEndpoint;
  ambiente = environment.ambiente;
  constructor() {
  }
}
