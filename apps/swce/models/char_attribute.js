// ==========================================================================
// Project:   Sw.CharAttribute
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.CharAttribute = SC.Record.extend(
/** @scope SWCE.CharAttribute.prototype */ {
	short: function() {
		return this.get('attribute').get('short').toLowerCase();
	}.property('attribute').cacheable(),
	name: function() {
		return this.get('attribute').get('name');
	}.property('attribute').cacheable(),
	description: function() {
		return this.get('value') + ' ' + this.get('attribute').get('name');
	}.property('attribute', 'value').cacheable(),
	
	attribute: SC.Record.toOne('SWCE.Attribute'),
	value: SC.Record.attr(String),
	char: SC.Record.toOne('SWCE.Character', { inverse: 'attributes', isMaster: NO })
}) ;
