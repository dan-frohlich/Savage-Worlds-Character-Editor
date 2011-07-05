// ==========================================================================
// Project:   Sw.Character
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.Character = SC.Record.extend(
/** @scope SWCE.Character.prototype */ {
	name: SC.Record.attr(String),
	xp: SC.Record.attr(Number, { defaultValue: 0 }),
	race: SC.Record.attr(String),
	
	// TODO: Add hindrances
	
	attr: SC.Record.toMany('SWCE.CharAttribute', { inverse: 'char', isMaster: YES }),
	skills: SC.Record.toMany('SWCE.CharSkill', { inverse: 'char', isMaster: YES }),
	edges: SC.Record.toMany('SWCE.CharEdge', { inverse: 'char', isMaster: YES }),

	charisma: SC.Record.attr(Number, { defaultValue: 0 }),
	pace_die: SC.Record.attr(String, { defaultValue: 'd6' }),
	pace_val: SC.Record.attr(Number, { defaultValue: 6 }),
	
	pace: function() {
		// TODO: Add edges, gear or encumbrance to this
		return this.get('pace_val') + ' (' + this.get('pace_die') + ')';
	}.property('pace_die', 'pace_val').cacheable()
}) ;
