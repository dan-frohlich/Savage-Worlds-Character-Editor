// ==========================================================================
// Project:   SavageWorldsCharacterEditor
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SavageWorldsCharacterEditor */

var SWCE = SC.Application.create();

SC.ready(function() {
  SWCE.mainPane = SC.TemplatePane.append({
    layerId: 'savage_worlds_character_editor',
    templateName: 'savage_worlds_character_editor'
  });
});
