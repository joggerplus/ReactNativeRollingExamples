var RNInvokeManager = require('react-native').NativeModules.RNInvokeManager;
var Invoke = require('./src/Invoke.js');

function execute(invocation) {
  if (typeof invocation === 'function') {
    invocation = invocation();
  }
  return RNInvokeManager.execute(invocation);
}

module.exports = {
  React: require('./src/React.js'),
  IOS: require('./src/IOS.js'),
  call: Invoke.call,
  execute: execute
};
