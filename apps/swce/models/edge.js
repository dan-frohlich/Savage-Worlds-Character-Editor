// ==========================================================================
// Project:   Sw.Edge
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SWCE.Edge = SC.Record.extend(
/** @scope SWCE.Edge.prototype */ {
	name: SC.Record.attr(String),
	text: SC.Record.attr(String),
	type: SC.Record.attr(String),
	prerequisiteFor: SC.Record.toMany('SWCE.Edge', { inverse: 'requiredEdges' }),
	requiredEdges: SC.Record.toMany('SWCE.Edge', { inverse: 'prerequisiteFor' }),
	requiredAttributes: SC.Record.toMany('SWCE.RequiredAttribute', { inverse: 'edges', isMaster: YES }),
	requiredSkills: SC.Record.toMany('SWCE.RequiredSkill', { inverse: 'edge', isMaster: YES }),
	requiredRank: SC.Record.attr(String),
	otherRequirements: SC.Record.attr(String)
}) ;
