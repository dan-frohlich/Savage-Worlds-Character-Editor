// ==========================================================================
// Project:   Sw.CharAttribute Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

sc_require('models/char_attribute');

SWCE.CharAttribute.FIXTURES = (function() {
	var c = function(guid, attr, value) {
		return { guid: guid, attribute: attr, value: value, char: 1 };
	};
	return [
		c(1, 'ag', 'd8'),
		c(2, 'sm', 'd6'),
		c(3, 'sp', 'd6'),
		c(4, 'st', 'd8'),
		c(5, 'vi', 'd6')
	];
})();
