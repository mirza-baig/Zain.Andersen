define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js", "/-/speak/v1/ew/Constants/TemplateIds.js"], function (Sitecore, ExperienceEditor, TemplateIds) {
  Sitecore.Commands.EditActivationRules =
  {
    canExecute: function (context) {
      var requestContext = context.app.clone(context.currentContext);
      requestContext.target = context.currentContext.value;
      requestContext.template = TemplateIds.foundation.enterpriseWeb.enterprise.personalization.pageVariant;
      var canEdit = context.app.canExecute("ExperienceEditor.XA.CanEditFields", requestContext);
      return canEdit;
    },
    execute: function (context) {
      var requestContext = context.app.clone(context.currentContext);
      requestContext.button = "/sitecore/EnterpriseWeb/content/Applications/WebEdit/Edit Frame Buttons/EW - Edit Activation Rules/Edit";
      requestContext.preservesections = "0";
      ExperienceEditor.PipelinesUtil.generateRequestProcessor("ExperienceEditor.XA.GetFieldEditorDialog", function (response1) {
        if (!response1.responseValue.value) {
          return;
        }

        var dialogFeatures = "dialogHeight:390px;dialogWidth:520px;";
        ExperienceEditor.Dialogs.showModalDialog(response1.responseValue.value, '', dialogFeatures, null, function (result) {
          if (!result) {
            return;
          }

          ExperienceEditor.PipelinesUtil.generateRequestProcessor("ExperienceEditor.XA.GetFieldEditorResult", function (response2) {
            if (!response2.responseValue.value) {
              return;
            }

            window.parent.Sitecore.PageModes.ChromeManager.handleMessage('chrome:editframe:updatestart');
            response2.responseValue.value.forEach(function (field) {
              var uri = new window.parent.Sitecore.ItemUri(field.ItemId, field.Language, field.Version, field.Revision);
              window.parent.Sitecore.WebEdit.setFieldValue(uri, field.FieldId, field.Value);
            });
            window.parent.Sitecore.PageModes.ChromeManager.handleMessage('chrome:editframe:updateend');
          }, { value: result }).execute(context);
        });
      }, requestContext).execute(context);
    }
  };
});
