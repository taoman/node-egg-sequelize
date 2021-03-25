// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfig from '../../../app/controller/config';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    config: ExportConfig;
    home: ExportHome;
    user: ExportUser;
  }
}
