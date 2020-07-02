require('reflect-metadata')

const log = console.log

let target = {}
Reflect.defineMetadata('metakey', 'matavalue', target)

log(Reflect.getOwnMetadata('metakey'))