
/**
 * Module dependencies.
 */

import { obfuscate } from './request-obfuscator';
import request from 'request';
import requestLogger from '@uphold/request-logger';

/**
 * Exports.
 */

export default requestLogger(request, (request, instance) => {
  obfuscate(request, instance);

  return request;
/*  if (request.type === 'response') {
    return logger.debug({ request }, `Received response for request ${request.id}`);
  }

  return logger.debug({ request }, `Making request ${request.id} to ${request.method} ${request.uri}`);*/
});
