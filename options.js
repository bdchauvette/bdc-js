const eslint = require('eslint');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  // homepage, version and bugs pulled from package.json
  version: pkg.version,
  homepage: pkg.homepage,
  tagline: 'eslint configured to my tastes',
  bugs: pkg.bugs.url,

  // The command to run
  cmd: Object.keys(pkg.bin)[0],

  // pass any version of eslint >= 1.0.0
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json'),
  },

  // current working directory, passed to eslint
  cwd: '',
};
