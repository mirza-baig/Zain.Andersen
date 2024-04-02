# escape=`

ARG PARENT_IMAGE
ARG SXA_IMAGE
ARG SPE_IMAGE
ARG TOOLS_IMAGE
ARG MANAGEMENT_SERVICES_IMAGE
ARG HEADLESS_SERVICES_IMAGE
ARG EXPERIENCE_EDGE_CONNECTOR_IMAGE
ARG DELTA_ASSET_IMAGE

FROM ${TOOLS_IMAGE} as tools
FROM ${SPE_IMAGE} as spe
FROM ${SXA_IMAGE} as sxa
FROM ${MANAGEMENT_SERVICES_IMAGE} AS management_services
FROM ${HEADLESS_SERVICES_IMAGE} AS headless_services
FROM ${EXPERIENCE_EDGE_CONNECTOR_IMAGE} AS experience_edge_connector
FROM ${DELTA_ASSET_IMAGE} as deltaAssetImage
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

WORKDIR C:\inetpub\wwwroot

# Copy developer tools and entrypoint
COPY --from=tools C:\tools C:\tools

# Add SPE module
COPY --from=spe \module\cm\content C:\inetpub\wwwroot
RUN Rename-Item -Path "c:\inetpub\wwwroot\App_Config\Include\Spe\Spe.IdentityServer.config.disabled" -NewName "Spe.IdentityServer.config"

# Add SXA module
COPY --from=sxa \module\cm\content C:\inetpub\wwwroot
COPY --from=sxa \module\tools \module\tools
RUN C:\module\tools\Initialize-Content.ps1 -TargetPath C:\inetpub\wwwroot; `
    Remove-Item -Path C:\module -Recurse -Force;

# Copy the Sitecore Management Services Module
COPY --from=management_services C:\module\cm\content C:\inetpub\wwwroot

# Configure Experience Edge Connector
COPY --from=experience_edge_connector C:\module\cm\content C:\inetpub\wwwroot

# Copy and init the JSS / Headless Services Module
COPY --from=headless_services C:\module\cm\content C:\inetpub\wwwroot
COPY --from=headless_services C:\module\tools C:\module\tools
RUN C:\module\tools\Initialize-Content.ps1 -TargetPath C:\inetpub\wwwroot; `
    Remove-Item -Path C:\module -Recurse -Force;

# Copy Sitecore Hotfix from XM Delta Image - Security Bulletin SC2023-002-576660
COPY --from=deltaAssetImage \platform\cm \

# Copy solution website files
COPY .\deploy\artifacts .

# Apply our local transforms
COPY ./azure-pipelines/build/cm/transforms/ C:\module\xdt
RUN C:\tools\scripts\Invoke-XdtTransform.ps1 -Path C:\inetpub\wwwroot -XdtPath C:\module\xdt;`
    Remove-Item -Path C:\module -Recurse -Force;

# Sitecore Hotfix 602289-1 SXA 10.2.0.4247
# Three config files need to be removed
RUN rm C:\inetpub\wwwroot\App_Config\Modules\SXA\Z.LayoutService\Sitecore.LayoutService.Analytics.config
RUN rm C:\inetpub\wwwroot\App_Config\Modules\SXA\Z.LayoutService\Sitecore.LayoutService.config
RUN rm C:\inetpub\wwwroot\App_Config\Modules\SXA\Z.LayoutService\Sitecore.LayoutService.Mvc.config
