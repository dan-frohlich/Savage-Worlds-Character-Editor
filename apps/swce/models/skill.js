// ==========================================================================
// Project:   Sw.Skill
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.Skill = SC.Record.extend(
/** @scope SWCE.Skill.prototype */ {
	name: SC.Record.attr(String),
	attribute: SC.Record.toOne('SWCE.Attribute', { inverse: 'skills' }),
	text: SC.Record.attr(String)
}) ;
