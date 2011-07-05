// ==========================================================================
// Project:   Sw.CharEdge
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.CharEdge = SC.Record.extend(
/** @scope SWCE.CharEdge.prototype */ {
	name: function() {
		return this.get('edge').get('name');
	}.property('edge').cacheable(),
	text: function() {
		return this.get('edge').get('text');
	}.property('edge').cacheable(),
	
	edge: SC.Record.toOne('SWCE.Edge'),
	char: SC.Record.toOne('SWCE.Character', { inverse: 'edges', isMaster: NO })
}) ;
