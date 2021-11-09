// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdd from '../../../app/controller/add';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    add: ExportAdd;
    home: ExportHome;
  }
}
