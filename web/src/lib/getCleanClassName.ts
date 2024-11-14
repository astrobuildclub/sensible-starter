import {stegaClean} from '@sanity/client/stega'

export function getCleanClassName(elem:string){
  return stegaClean(elem);
}