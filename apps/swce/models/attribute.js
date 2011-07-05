// ==========================================================================
// Project:   Sw.Attribute
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.Attribute = SC.Record.extend(
/** @scope SWCE.Attribute.prototype */ {
	short: function() {
		return this.get('name').substring(0, 2).toLowerCase();
	}.property('name').cacheable(),
	name: SC.Record.attr(String),
	skills: SC.Record.toMany('SWCE.Skill', { inverse: 'attribute' })
}) ;
