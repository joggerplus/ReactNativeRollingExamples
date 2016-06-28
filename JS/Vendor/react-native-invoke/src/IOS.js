var CGPoint = function (value) {
  return {
    type: 'CGPoint',
    value: value
  };
};

var CGRect = function (value) {
  return {
    type: 'CGRect',
    value: value
  };
};

module.exports = {
  CGPoint: CGPoint,
  CGRect: CGRect
};
