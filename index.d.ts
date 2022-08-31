/// <reference types="node" />

import "reflect-metadata";
import "./modules";
import { IGifflarContract } from "@managing/gifflarContract/types/IGifflarContract";
import { IGifflarManager } from "@managing/gifflarManager/types/IGifflarManager";
import { IGifflarLibrary } from "@managing/gifflarLibrary/types/IGifflarLibrary";
import { IGifflarInterface } from "@managing/GifflarInterface/types/IGifflarInterface";
declare const createGifflarContract: (name: string) => IGifflarContract;
declare const createGifflarLibrary: (name: string) => IGifflarLibrary;
declare const createGifflarInterface: (name: string) => IGifflarInterface;
declare const createGifflarManager: () => IGifflarManager;
export {
  createGifflarContract,
  createGifflarLibrary,
  createGifflarInterface,
  createGifflarManager,
};
