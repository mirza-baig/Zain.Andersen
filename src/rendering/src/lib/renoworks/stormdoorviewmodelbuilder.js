import { AttributeOption, AttributeOptionGroup, HardwareAttributeViewModel, ProductSetting, ProductSettingSetValue, SelectableAttributeOptionGroup, SizingAttributeViewModel, SummaryHelpers, SwatchAttributeViewModel, TabbedSwatchAttributeViewModel, ViewModelBuilderBase } from './designtool';
import { RenoworksChildKeys, RenoworksKeys, RenoworksProductSide } from './renoworks';
import { isNullOrWhitespace } from 'lib/utils/string-utils';
import {} from 'lib/utils/linq';

export class StormdoorViewModelBuilder extends ViewModelBuilderBase {
  constructor(product, apiEndpoint) {
    super(product, apiEndpoint);
    if (!product || !apiEndpoint)
    {
      return;
    }

    // Child Attributes
    this._GrilleWidth = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'grilleWidth', renoworksKey: RenoworksChildKeys.GrilleWidth, summaryName: 'Grille Width', isChildKey: true });

    // Attributes
    this._FrameColor = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'frameColor', renoworksKey: RenoworksKeys.FrameColor, summaryName: SummaryHelpers.NameFromValueWithNameAndValue, summaryFormatter: SummaryHelpers.ValueFromValueWithNameAndValue });
    this._Width = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'width', renoworksKey: RenoworksKeys.Width, summaryName: 'Width', summaryFormatter: SummaryHelpers.ValueFromValue });
    this._Height = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'height', renoworksKey: RenoworksKeys.Height, summaryName: 'Height', summaryFormatter: SummaryHelpers.ValueFromValue });
    this._Operation = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'operation', renoworksKey: RenoworksKeys.Operation, summaryName: 'Operation', summaryFormatter: value => value.split(';')[0] });
    this._HardwareOptions = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'hardware', renoworksKey: RenoworksKeys.HardwareOptions, summaryName: 'Hardware Options', summaryFormatter: SummaryHelpers.ValueFromValueWithColor });
    this._Glass = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'glass', renoworksKey: RenoworksKeys.Glass, summaryName: 'Glass', summaryFormatter: SummaryHelpers.ValueFromValue });
    this._GrilleStyle = new ProductSetting({ side: RenoworksProductSide.Exterior, queryStringKey: 'grilleStyle', renoworksKey: RenoworksKeys.GrilleStyle, summaryName: 'Grille Style', childKeys: [this._GrilleWidth] });

    this.productSettings.add(this._FrameColor);
    this.productSettings.add(this._Width);
    this.productSettings.add(this._Height);
    this.productSettings.add(this._Operation);
    this.productSettings.add(this._HardwareOptions);
    this.productSettings.add(this._Glass);
    this.productSettings.add(this._GrilleStyle);
    this.productSettings.add(this._GrilleWidth);
  }

  get supportedSides() {
    return RenoworksProductSide.Exterior;
  }

    buildAttributesForRenoworksResult(renoworksResult) {
        var imageHelpers = {
            emptySwatchUrl: 'empty',
            exteriorImageRootPath: renoworksResult.exteriorResult.product.imageRootPath.replace('http:', 'https:'),
        };

    // color
    var frameColorAttributes = [];
    this._buildFrameColorAttribute(renoworksResult, imageHelpers, frameColorAttributes);
    if (frameColorAttributes.length > 0)
    {
      this.addProgressBarStep('Color', frameColorAttributes);
    }

    // size
    var sizeAttributes = [];
    this._buildSizingAttribute(renoworksResult, sizeAttributes);
    if (sizeAttributes.length > 0)
    {
      this.addProgressBarStep('Size', sizeAttributes);
    }

    // operation
    var operationAttributes = [];
    this._buildOperationAttribute(renoworksResult, imageHelpers, operationAttributes);
    if (operationAttributes.length > 0)
    {
      this.addProgressBarStep('Operation', operationAttributes);
    }

    // hardware
    var hardwareAttributes = [];
    this._buildHardwareOptionsAttribute(renoworksResult, imageHelpers, hardwareAttributes);
    if (hardwareAttributes.length > 0)
    {
      this.addProgressBarStep('Hardware', hardwareAttributes);
    }

    // glass
    var glassAttributes = [];
    this._buildGlassAttribute(renoworksResult, imageHelpers, glassAttributes);
    if (glassAttributes.length > 0)
    {
      this.addProgressBarStep('Glass', glassAttributes);
    }

    // grilles
    var grilleAttributes = [];
    this._buildGrilleStyleAttribute(renoworksResult, imageHelpers, grilleAttributes);
    if (grilleAttributes.length > 0)
    {
      this.addProgressBarStep('Grilles', grilleAttributes);
    }
  }

  _buildFrameColorAttribute(renoworksResult, imageHelpers, attributes) {
    var tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.FrameColor.name);

    if (tab != null)
    {
      var vm = new TabbedSwatchAttributeViewModel(RenoworksKeys.FrameColor.name);

      for (let component of tab.component)
      {
        var group = new AttributeOptionGroup(component.name);

        for (let color of component.color)
        {
          group.options.push(new AttributeOption({
            title: color.name,
            isSelected: color.selected,
            productSettingChanges: [new ProductSettingSetValue(this._FrameColor, component.name + '; color=' + color.name)],
            image: isNullOrWhitespace(color.swatch) ? imageHelpers.emptySwatchUrl : imageHelpers.exteriorImageRootPath + color.swatch,
            gtmItemHeader: component.name,
            gtmItemDetail: color.name,
            colorRgb: color.rgb,
          }));
        }

        vm.groups.push(group);
      }

      if (vm.groups.length > 0)
      {
        attributes.push(vm);
      }
    }
  }

  _buildSizingAttribute(renoworksResult, attributes) {
    var tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.Width.name);
    var vm = new SizingAttributeViewModel();

    if (tab != null)
    {
      for (let component of tab.component)
      {
        vm.widths.push(new AttributeOption({
          title: component.name,
          isSelected: component.selected,
          productSettingChanges: [new ProductSettingSetValue(this._Width, component.name)],
          gtmItemHeader: tab.name,
          gtmItemDetail: component.name,
        }));
      }
    }

    tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.Height.name);

    if (tab != null)
    {
      for (let component of tab.component)
      {
        vm.heights.push(new AttributeOption({
          title: component.name,
          isSelected: component.selected,
          productSettingChanges: [new ProductSettingSetValue(this._Height, component.name)],
          gtmItemHeader: tab.name,
          gtmItemDetail: component.name,
        }));
      }
    }

    if (vm.widths.length > 0 || vm.heights.length > 0)
    {
      attributes.push(vm);
    }
  }

  _buildOperationAttribute(renoworksResult, imageHelpers, attributes) {
    var tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.Operation.name);
    if (tab != null)
    {
      var vm = new SwatchAttributeViewModel(RenoworksKeys.Operation.name);

      for (let component of tab.component)
      {
        vm.options.push(new AttributeOption({
          title: component.name,
          isSelected: component.selected,
          productSettingChanges: [new ProductSettingSetValue(this._Operation, component.name)],
          image: imageHelpers.exteriorImageRootPath + component.sampleImage,
          gtmItemHeader: tab.name,
          gtmItemDetail: component.name,
        }));
      }

      attributes.push(vm);
    }
  }

  _buildHardwareOptionsAttribute(renoworksResult, imageHelpers, attributes) {
    var tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.HardwareOptions.name);
    var vm = new HardwareAttributeViewModel(RenoworksKeys.HardwareOptions.name);

    var showOilRubbedBronzeNote = false;

    if (tab != null)
    {
      for (let component of tab.component)
      {
        var group = new SelectableAttributeOptionGroup({
          title: component.name,
          isSelected: component.selected,
          productSettingChanges: [new ProductSettingSetValue(this._HardwareOptions, component.name)],
          image: imageHelpers.exteriorImageRootPath + component.sampleImage,
          gtmItemHeader: 'Hardware',
          gtmItemDetail: component.name,
        });

        if (component.color)
        {
          for (let color of component.color)
          {
            group.options.push(new AttributeOption({
              title: color.name,
              isSelected: color.selected,
              productSettingChanges: [new ProductSettingSetValue(this._HardwareOptions, component.name + '; color=' + color.name)],
              image: isNullOrWhitespace(color.swatch) ? imageHelpers.emptySwatchUrl : imageHelpers.exteriorImageRootPath + color.swatch,
              gtmItemHeader: 'Hardware',
              gtmItemDetail: component.name + ', ' + color.name,
              colorRgb: color.rgb,
            }));

            showOilRubbedBronzeNote = showOilRubbedBronzeNote || color.name === 'Oil Rubbed Bronze';
          }
        }

        vm.groups.push(group);
      }
    }

    if (showOilRubbedBronzeNote)
    {
      vm.note = '* Distressed bronze and oil rubbed bronze are \'living\' finishes that will change with time and use.';
    }

    if (vm.groups.length > 0)
    {
      attributes.push(vm);
    }
  }

  _buildGlassAttribute(renoworksResult, imageHelpers, attributes) {
    var tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.Glass.name);
    if (tab != null)
    {
      var vm = new SwatchAttributeViewModel(RenoworksKeys.Glass.name);

      for (let component of tab.component)
      {
        vm.options.push(new AttributeOption({
          title: component.name,
          isSelected: component.selected,
          productSettingChanges: [new ProductSettingSetValue(this._Glass, component.name)],
          image: imageHelpers.exteriorImageRootPath + component.sampleImage,
          gtmItemHeader: tab.name,
          gtmItemDetail: component.name,
        }));
      }

      attributes.push(vm);
    }
  }

  _buildGrilleStyleAttribute(renoworksResult, imageHelpers, attributes) {
    var tab = renoworksResult.exteriorResult.product.tab.singleOrDefault(_ => _.name === RenoworksKeys.GrilleStyle.name);
    // Don't display the grilles attribute if the only option is "none"
    if (tab != null && tab.component.length > 1)
    {
      var vm = new SwatchAttributeViewModel(RenoworksKeys.GrilleStyle.name);

      for (let component of tab.component)
      {
        // If the "Remove Tall Fraction Grille Option" toggle is enabled, we want to omit Tall Fractional from the grille options for all products
        if (component.name === 'Tall Fractional')
        {
          continue;
        }

        vm.options.push(new AttributeOption({
          title: component.name,
          isSelected: component.selected,
          productSettingChanges: [new ProductSettingSetValue(this._GrilleStyle, component.name)],
          image: imageHelpers.exteriorImageRootPath + component.sampleImage,
          gtmItemHeader: 'Grilles',
          gtmItemDetail: component.name,
        }));
      }

      attributes.push(vm);
    }
  }
}
