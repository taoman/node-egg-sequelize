// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCofig from '../../../app/model/cofig';
import ExportLogin from '../../../app/model/login';
import ExportType from '../../../app/model/type';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Cofig: ReturnType<typeof ExportCofig>;
    Login: ReturnType<typeof ExportLogin>;
    Type: ReturnType<typeof ExportType>;
    User: ReturnType<typeof ExportUser>;
  }
}
