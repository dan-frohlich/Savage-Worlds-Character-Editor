// ==========================================================================
// Project:   Sw.RequiredSkill
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.RequiredSkill = SC.Record.extend(
/** @scope SWCE.RequiredSkill.prototype */ {
	name: function() {
		return this.get('skill').get('name');
	}.property('skill').cacheable(),
	
	skill: SC.Record.toOne('SWCE.Skill'),
	edges: SC.Record.toMany('SWCE.Edge', { inverse: 'requiredSkills', isMaster: NO }),
	value: SC.Record.attr(String)
}) ;
