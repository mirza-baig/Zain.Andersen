// Global
import { ComponentFactory } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

const SAMPLE_COMPONENT_NAME = 'MockPlaceholderContent';

interface PlaceholderContent {
  componentName: string;
}

interface SampleRenderingContext {
  componentName: string;
  displayName: string;
  placeholders: Record<string, PlaceholderContent[]>;
}

/**
 * Generates a sample rendering context for the component
 * using sample placeholder content.
 *
 * @param {string | string[]} placeholderName the placeholder names to render the sample content into
 * @param {number} repeat the number of times to repeat the sample content
 * @returns {object} A rendering context for the placeholders using the sample component
 */
export const getSampleRenderingContext = (
  placeholderNames: string | string[],
  repeat = 1
): SampleRenderingContext => {
  if (!placeholderNames && process.env.NODE_ENV === 'development') {
    console.warn(
      'getSampleRenderingContext requires at least one valid placeholder name as the first parameter'
    );
  }

  const sampleComponent = { componentName: SAMPLE_COMPONENT_NAME };
  const placeholderContent: PlaceholderContent[] = [];
  const validRepeat = repeat < 1 ? 1 : Math.ceil(repeat);
  for (let i = 0; i < validRepeat; i++) {
    placeholderContent.push(sampleComponent);
  }

  const context: SampleRenderingContext = {
    componentName: 'foo',
    displayName: 'Foo',
    placeholders: {},
  };

  const placeholders = Array.isArray(placeholderNames) ? placeholderNames : [placeholderNames];
  placeholders.forEach((placeholder: string) => {
    context.placeholders[placeholder] = placeholderContent;
  });

  return context;
};

const SamplePlaceholderComponent = (): JSX.Element => <div>Placeholder content</div>;

const SamplePlaceholderComponentFactory = (componentName: string): (() => JSX.Element) => {
  return function SamplePlaceholderComponent() {
    return (
      <div
        style={{
          background: 'darkorange',
          outline: '5px solid orange',
          padding: '10px',
          color: 'white',
          maxWidth: '500px',
        }}
      >
        <h2>{componentName}</h2>
        <p>
          JSS component is missing React implementation. See the developer console for more
          information.
        </p>
      </div>
    );
  };
};

/**
 * Creates a mock componentFactory for use in a <SitecoreContext> component.
 *
 * @param {React.FC} args additional React components to add to the factory
 * @returns {ComponentFactory} a method that accepts a string and returns a matching component or null
 */
export const createComponentFactory =
  (...args: React.FC[]): ComponentFactory =>
  (componentName: string): React.FC | null => {
    const components = new Map<string, React.FC>();

    components.set(SAMPLE_COMPONENT_NAME, SamplePlaceholderComponent as React.FC);

    args.forEach((component) => {
      components.set(component.name, component);
    });

    return components.get(componentName) || null;
  };

export const createSampleComponentFactory =
  (): ComponentFactory =>
  (componentName: string): React.FC | null => {
    return SamplePlaceholderComponentFactory(componentName) as React.FC;
  };
