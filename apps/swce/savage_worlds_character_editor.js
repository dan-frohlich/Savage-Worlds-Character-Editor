// ==========================================================================
// Project:   SavageWorldsCharacterEditor
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SavageWorldsCharacterEditor */

SavageWorldsCharacterEditor = SC.Application.create();

SC.ready(function() {
  SavageWorldsCharacterEditor.mainPane = SC.TemplatePane.append({
    layerId: 'savage_worlds_character_editor',
    templateName: 'savage_worlds_character_editor'
  });
});
