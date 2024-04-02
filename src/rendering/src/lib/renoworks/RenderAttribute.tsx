/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them,
 * and this utils are being used at multiple palces */

/* eslint-disable @typescript-eslint/no-explicit-any */

//import { memo } from 'react';
import { AttributeViewModelBase } from 'lib/renoworks';
import { RefObject } from 'react';

export type RenderAttributeProps = {
  rendererMap: Map<string, React.FC<AttributeRendererProps<AttributeViewModelBase>>>;
  viewModel: AttributeViewModelBase;
  onUpdateOption: (option: any, collection?: any[]) => void;
  onUpdateOptionGroup: (optionGroup: any, collection?: any[]) => void;
  props?: any;
  selectedOptions?: any[];
  attributeIndex: number;
  maxAttributeIndex: number;
  modalRef?: RefObject<HTMLDivElement>;
};

export type AttributeRendererProps<VM extends AttributeViewModelBase> = {
  viewModel: VM;
  onUpdateOption?: (option: any, collection?: any[]) => void;
  onUpdateOptionGroup?: (optionGroup: any, collection?: any[]) => void;
  props?: any;
  selectedOptions?: any[];
  attributeIndex: number;
  maxAttributeIndex: number;
  modalRef?: RefObject<HTMLDivElement>;
};

export const RenderAttribute = (props: RenderAttributeProps): JSX.Element => {
  const { rendererMap, ...rest } = props;

  if (!rest.viewModel) {
    return <>Null ViewModel</>;
  }

  const attributeName = rest.viewModel.component;

  const Element = rendererMap.get(attributeName);

  if (!Element) {
    return <>No renderer for {attributeName}</>;
  }

  return <Element {...rest} />;
};

export default RenderAttribute;
