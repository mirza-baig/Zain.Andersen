import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { ViewModel } from './designtool';
import { StormdoorViewModelBuilder } from './stormdoorviewmodelbuilder';
import { AWViewModelBuilder } from './awviewmodelbuilder';
import { useRouter } from 'next/router';

export type AttributeParameters = { [name: string]: string };

export type RenoworksContextType = {
  viewModel: ViewModel | undefined;
  setProductAttributes: (parameters: AttributeParameters) => void;
};

export const RenoworksContext = createContext<RenoworksContextType | undefined>(undefined);

// Storms doors only have an exterior, so we need to handle that
const StormdoorProductPrefixes = ['aw_6_series_', 'aw_8_series_', 'aw_10_series_', 'emco_'];

const IsStormDoor = (productId: string) => {
  return StormdoorProductPrefixes.some((_) => productId.startsWith(_));
};

export type RenoworksProduct = {
  renoworksKey: string;
  // text: {
  //   sizing: string;
  //   customSizing: string;
  //   disclaimer: string;
  // };
  // tertiaryLinks: {
  //   customSizesLink: string;
  // };
  configuration: [RenoworksProductConfiguartion] | undefined;
};

export type RenoworksProductConfiguartion = {
  renoworksName: string;
  dimensionMappings: RenoworksProductConfigurationDimensionMapping[];
};

export type RenoworksProductConfigurationDimensionMapping = {
  productNumber: string;
  width: string;
  height: string;
  grilleLightsWide: string;
  grilleLightsHigh: string;
  fractionalWidth: string;
  fractionalHeight: string;
};

export type RenoworksApiConfig = {
  host: string;
  prefix: string;
};

export type RenoworksProps = {
  product: RenoworksProduct;
  apiConfig: RenoworksApiConfig;
  pageSize?: number;
  pathMapper?: (path: string) => AttributeParameters;
};

export const Renoworks = ({
  product,
  apiConfig,
  pageSize,
  pathMapper,
  children,
}: PropsWithChildren<RenoworksProps>) => {
  const [viewModel, setViewModel] = useState<ViewModel | undefined>();

  const setProductAttributes = (attributes: AttributeParameters) => {
    const viewModelBuilder = IsStormDoor(product.renoworksKey.toLowerCase())
      ? new StormdoorViewModelBuilder(product, apiConfig)
      : new AWViewModelBuilder(product, apiConfig, pageSize);

    viewModelBuilder.product &&
      viewModelBuilder
        .buildViewModelForQueryString(attributes)
        .then(() => {
          setViewModel(viewModelBuilder.viewModel);
        })
        .catch((err) => {
          // TODO: Handle this
          // eslint-disable-next-line
          console.log(err);
        });
  };

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady || !pathMapper) {
      return;
    }

    const attributes = pathMapper(router.asPath);

    setProductAttributes(attributes);
  }, [router.isReady, router.asPath, pathMapper]);

  return (
    <RenoworksContext.Provider value={{ viewModel, setProductAttributes }}>
      {children}
    </RenoworksContext.Provider>
  );
};

export const useRenoworks = () => {
  const context = useContext(RenoworksContext);

  if (!context) {
    throw new Error('useRenoworks must be used inside the Renoworks component');
  }

  return context;
};
