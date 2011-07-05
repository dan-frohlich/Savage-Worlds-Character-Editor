// ==========================================================================
// Project:   Sw.CharSkill
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.CharSkill = SC.Record.extend(
/** @scope SWCE.CharSkill.prototype */ {
	name: function() {
		return this.get('skill').get('name');
	}.property('skill').cacheable(),
	
	value: SC.Record.attr(String),
	skill: SC.Record.toOne('SWCE.Skill'),
	char: SC.Record.toOne('SWCE.Character', { inverse: 'skills', isMaster: NO })
}) ;
