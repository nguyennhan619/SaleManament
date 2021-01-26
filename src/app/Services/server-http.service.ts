import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import{TransferHttpService} from '../httpService/transfer-http';
import { LinkSettings } from '../httpService/linkSetting';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {

  constructor(private transferHttpService: TransferHttpService) {}

  public getStudents() {
    let url = LinkSettings.GetResLinkSetting("User","Link");
    return this.transferHttpService.get(url);
  }

  public getStudent(studentId: number) {
    let url = LinkSettings.GetResLinkSetting("User","LinkID",studentId);
    return this.transferHttpService.getByID(url);
  }

  public addStudent(data: Student) {
    let url = LinkSettings.GetResLinkSetting("User","Link");
    return this.transferHttpService.add(url,data);
  }

  public modifyStudent(studentId: number, data: Student) {
    let url = LinkSettings.GetResLinkSetting("User","LinkID",studentId);
    return this.transferHttpService.modify(url,data);
  }

  public deleteStudent(studentId: number) {
    let url = LinkSettings.GetResLinkSetting("User","LinkID",studentId);
    return this.transferHttpService.delete(url);
  }
}
