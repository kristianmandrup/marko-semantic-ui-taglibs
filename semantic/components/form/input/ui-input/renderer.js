var template = require('./template.marko');

exports.renderer = function(input, out) {
  if (!input.fieldWrap && input.field)
    input.fieldWrap = input.field || input.field !== '';
  input.type = input.type || 'text';
  input.focus = input.focus ? 'focus' : '';
  input.loading = input.loading ? 'loading' : '';
  input.error = input.error ? 'error' : '';
  input.hasIcon = input.icon ? 'icon' : '';
  input.hasAction = input.action ? 'action' : '';
  input.label = input.label ? 'labeled' : '';

  template.render(input, out);
};
