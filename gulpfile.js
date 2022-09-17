/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.theme = './assets/uswds/dist/theme';
uswds.paths.dist.img = './assets/uswds/dist/img';
uswds.paths.dist.fonts = './assets/uswds/dist/fonts';
uswds.paths.dist.js = './assets/uswds/dist/js';
uswds.paths.dist.css = './assets/uswds/dist/css';

uswds.paths.dist.sass = './sass';

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;