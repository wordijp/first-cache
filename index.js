'use strict';

var browserifyCache = require('browserify-cache-api');

module.exports = firstCache;

// watchify plugin

//////////////////////////////////////////////////////////////////////////////

function firstCache(browserify, options) {
	options.cachefile = options.c || options.cachefile || './browserify-cache.json';

	var cache_bundle = browserify.bundle;
	browserifyCache(browserify, options);

	browserify.once('bundle', function (bundle) {
		bundle.once('end', function() {
			// repair hooked bundle
			browserify.bundle = cache_bundle;
		});
	});
	return browserify;
};

