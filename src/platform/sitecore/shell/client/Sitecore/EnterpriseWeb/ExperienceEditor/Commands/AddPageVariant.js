define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js"], function (Sitecore, ExperienceEditor) {
  Sitecore.Commands.AddPageVariant =
  {
    canExecute: function (context) {
      var result = context.app.canExecute("ExperienceEditor.EW.CanAddPageVariant", context.currentContext);
      return result;
    },
    execute: function (context) {
      ExperienceEditor.modifiedHandling(true, function () {
        var requestContext = context.app.clone(context.currentContext);

        ExperienceEditor.Dialogs.prompt('Enter a name for the new page variant.', 'Page Variant', function (name) {
          if (name === null) {
            return;
          }

          requestContext.value = name;
          ExperienceEditor.PipelinesUtil.generateRequestProcessor("ExperienceEditor.EW.ValidatePageVariantName", function (validationResponse) {
            if (!validationResponse.responseValue.value.success) {
              context.app.showNotification('error', validationResponse.responseValue.value.reason, true);
              return;
            }

            requestContext.argument = name;
            ExperienceEditor.PipelinesUtil.generateRequestProcessor("ExperienceEditor.EW.AddPageVariant", function (addResponse) {
              var requestContext = context.app.clone(context.currentContext);
              requestContext.target = addResponse.responseValue.value;
              ExperienceEditor.PipelinesUtil.generateRequestProcessor("ExperienceEditor.XA.GetItemUrl", function (response) {
                if (response.responseValue.value) {
                  window.parent.location = response.responseValue.value;
                }
              }, requestContext).execute(context);
            }, requestContext).execute(context);
          }, requestContext).execute(context);
        });
      });
    }
  };
});
