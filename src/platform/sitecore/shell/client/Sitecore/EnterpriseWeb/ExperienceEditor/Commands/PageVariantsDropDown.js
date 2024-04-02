define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js", "/-/speak/v1/ExperienceEditor/sxaHelper.js", "/-/speak/v1/ew/Constants/TemplateIds.js"], function (Sitecore, ExperienceEditor, SxaHelper, TemplateIds) {
  Sitecore.Commands.PageVariantsDropDown =
  {
    canExecute: function (context) {
      var requestContext = context.app.clone(context.currentContext);
      requestContext.target = context.currentContext.value;
      requestContext.template = `${TemplateIds.foundation.enterpriseWeb.enterprise.personalization.pageVariant}|${TemplateIds.foundation.enterpriseWeb.enterprise.baseTemplates.pages._basePage}`;
      var canEditPage = context.app.canExecute("ExperienceEditor.EW.DoesItemInheritFrom", requestContext);
      return canEditPage;
    },
    execute: function (context) {
    }
  };

  Sitecore.Commands.PageVariantsDropDownItem =
  {
    canExecute: function (context) {
      requestContext = context.app.clone(context.currentContext);
      requestContext.target = context.currentContext.value;
      requestContext.template = TemplateIds.foundation.enterpriseWeb.enterprise.personalization.pageVariant;
      var canEdit = context.app.canExecute("ExperienceEditor.XA.CanEditFields", requestContext);
      return canEdit;
    },
    execute: function (context) {
      ExperienceEditor.modifiedHandling(true, function () {
        var requestContext = context.app.clone(context.currentContext);
        requestContext.target = context.currentContext.argument;
        ExperienceEditor.PipelinesUtil.generateRequestProcessor("ExperienceEditor.XA.GetItemUrl", function (response) {
          if (response.responseValue.value) {
            window.parent.location = response.responseValue.value;
          }
        }, requestContext).execute(context);
      });
    }
  };

});
