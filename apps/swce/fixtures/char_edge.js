// ==========================================================================
// Project:   Sw.CharEdge Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

sc_require('models/char_edge');

SWCE.CharEdge.FIXTURES = (function() {
	'use strict';
	var c = function(i) {
		return { guid: i, edge: i, char: 1 };
	};
	return [
		c(1),
		c(2),
		c(3),
		c(4),
		c(5),
		c(6),
		c(7)
	];
})();
