// ==========================================================================
// Project:   Sw.RequiredAttribute
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.RequiredAttribute = SC.Record.extend(
/** @scope SWCE.RequiredAttribute.prototype */ {
	short: function() {
		return this.get('attribute').get('short');
	}.property('attribute').cacheable(),
	name: function() {
		return this.get('attribute').get('name');
	}.property('attribute').cacheable(),
	
	attribute: SC.Record.toOne('SWCE.Attribute'),
	edges: SC.Record.toMany('SWCE.Edge', { inverse: 'requiredAttributes', isMaster: NO }),
	value: SC.Record.attr(String)
}) ;
