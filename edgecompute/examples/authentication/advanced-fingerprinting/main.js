import * as util from './util.js';

export function onClientRequest(request) {
  const client_hello = request.getVariable('PMUSER_TLS_CLIENT_HELLO');
  const buffer = util.base64toUint8Array(client_hello);

  const advanced_fingerprint = util.advancedFingerprint(buffer);
  request.setVariable('PMUSER_ADVANCED_FINGERPRINT', advanced_fingerprint);

  return advanced_fingerprint;
}
