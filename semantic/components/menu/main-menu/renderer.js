var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('main-menu', input);
  template.render(input, out);
};
