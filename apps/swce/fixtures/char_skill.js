// ==========================================================================
// Project:   Sw.CharSkill Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

sc_require('models/char_skill');

SWCE.CharSkill.FIXTURES = (function() {
	var c = function(skill, val) {
		return { guid: skill, value: val, skill: skill, char: 1 };
	};
	return [
		c(1, 'd10'),
		c(2, 'd10'),
		c(3, 'd6'),
		c(4, 'd6'),
		c(5, 'd6'),
		c(6, 'd6'),
		c(7, 'd4'),
		c(8, 'd6')
	];
})();
