var findNodeHandle = require('react-native').findNodeHandle;

function view(component) {
  return {
    type: 'React.View',
    value: findNodeHandle(component)
  };
}

module.exports = {
  view: view
};
