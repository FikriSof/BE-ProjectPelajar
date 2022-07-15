'use strict';
require('dotenv').config();
const moment = require('moment-timezone');
const pino = require('pino');

const logger = pino(
    {   
        messageKey: 'message',
        timestamp: () => `,"@timestamp":"${moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss.SSS')}"`,
        formatters: {
            level (label, number) {
              return { 'log.level': label }
            },
            bindings (bindings) {
              const {
                // `pid` and `hostname` are default bindings, unless overriden by
                // a `base: {...}` passed to logger creation.
                pid,
                hostname,
                group,
                // name is defined if `log = pino({name: 'my name', ...})`
                name,
                // Warning: silently drop any "ecs" value from `base`. See
                // "ecs.version" comment below.
                ecs,
                ...ecsBindings
              } = bindings
      
              if(group === undefined){
                  ecsBindings.base = {group: "application", service: "ms-account", hostname: hostname, pid: pid}
              }      
              return ecsBindings
            },
        }
    }
);
module.exports = logger;