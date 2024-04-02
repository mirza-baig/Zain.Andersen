// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { useEffect, useRef } from 'react';

export type HTMLBlockProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.HtmlBlock.HtmlBlock & ComponentProps;

const HTMLBlock = (props: HTMLBlockProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.fields?.code?.value) {
      try {
        const fragment = document.createRange().createContextualFragment(props.fields?.code?.value);
        divRef.current?.append(fragment);
      } catch (error) {
        console.error('Error creating fragment:', error);
      }
    }
    // Suggested deps are coming from layout service. We can ignore useEffect warning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.fields?.code?.value) {
    return <></>;
  }

  return (
    <Component variant="full" dataComponent="general/htmlblock" {...props}>
      <div className="col-span-12" ref={divRef}></div>
    </Component>
  );
};

export default withDatasourceCheck()<HTMLBlockProps>(HTMLBlock);
