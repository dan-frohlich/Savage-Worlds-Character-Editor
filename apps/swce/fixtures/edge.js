// ==========================================================================
// Project:   Sw.Edge Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sw */

sc_require('models/edge');

SWCE.Edge.FIXTURES = [
	{
		guid: 1,
		name: 'Ambidexterity',
		text: 'Can use off-hand without -2 penalty',
		type: 'Background',
		requiredEdges: [],
		requiredAttributes: [1],
		requiredSkills: [],
		requiredRank: 'Novice'
	},
	{
		guid: 2,
		name: 'Cyberware',
		text: 'Allows the installment of cybernetics, and gives points for buying initial cyberware.',
		type: 'Background',
		requiredEdges: [],
		requiredAttributes: [],
		requiredSkills: [],
		requiredRank: 'Novice'
	},
	{
		guid: 3,
		name: 'Quick',
		text: 'May redraw initiative card if the value is 5 or below.',
		type: 'Background',
		requiredEdges: [],
		requiredAttributes: [1],
		requiredSkills: [],
		requiredRank: 'Novice'
	},
	{
		guid: 4,
		name: 'Quickdraw',
		text: 'May draw a weapon and attack without taking -2. If rolling agility to draw, gets +2 to the roll.',
		type: 'Combat',
		requiredEdges: [],
		requiredAttributes: [1],
		requiredSkills: [],
		requiredRank: 'Novice'
	},
	{
		guid: 5,
		name: 'Dodge',
		text: 'Opponents take -1 to hit when trying to shoot the character.',
		type: 'Combat',
		prerequisiteFor: [8],
		requiredEdges: [],
		requiredAttributes: [1],
		requiredSkills: [],
		requiredRank: 'Seasoned'
	},
	{
		guid: 6,
		name: 'Two-fisted',
		text: 'May use weapons in both hands without taking -2 to hit.',
		type: 'Combat',
		requiredEdges: [],
		requiredAttributes: [1],
		requiredSkills: [],
		requiredRank: 'Novice'
	},
	{
		guid: 7,
		name: 'Marksman',
		text: 'Gets aim maneuver (+2 shooting or throwing) if he does not move this turn. May only be used if RoF is 1.',
		type: 'Combat',
		requiredEdges: [],
		requiredAttributes: [],
		requiredSkills: [],
		requiredRank: 'Seasoned'
	},
	{
		guid: 8,
		name: 'Improved dodge',
		text: 'Opponents take -2 to hit when trying to shoot the character.',
		type: 'Combat',
		requiredEdges: [5],
		requiredAttributes: [],
		requiredSkills: [],
		requiredRank: 'Veteran'
	},
	{
		guid: 9,
		name: 'Scholar',
		text: 'Choose two knowledge skills, and get +2 for any rolls with them.',
		type: 'Professional',
		requiredEdges: [],
		requiredAttributes: [],
		requiredSkills: [],
		requiredRank: 'Novice',
		otherRequirements: 'd8 in affected skill.'
	},
	{
		guid: 10,
		name: 'Thief',
		text: 'Gain +2 to lockpick, stealth and climb. Stealth bonus only applies in urban areas.',
		type: 'Professional',
		requiredEdges: [],
		requiredAttributes: [1],
		requiredSkills: [1,2,3],
		requiredRank: 'Novice'
	}
];
