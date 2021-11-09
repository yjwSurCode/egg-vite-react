// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAdd from '../../../app/service/add';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    add: AutoInstanceType<typeof ExportAdd>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
