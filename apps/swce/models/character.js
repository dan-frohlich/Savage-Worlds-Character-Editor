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
	
	attr: SC.Record.toMany('SWCE.CharAttribute', { inverse: 'char', isMaster: YES }),
	skills: SC.Record.toMany('SWCE.CharSkill', { inverse: 'char', isMaster: YES }),
}) ;
