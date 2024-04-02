// Global
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ComponentPropsContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { FastSitecoreContext } from 'lib/overrides/FastSitecoreContext';

// Lib
import { createSampleComponentFactory } from 'lib/mocks/mock-placeholder';

export const eeSitecoreContext = {
  route: {
    name: 'Foo',
    placeholders: {},
  },
  context: {
    pageEditing: true,
    site: {
      name: 'JssTestWeb',
    },
    language: 'en',
  },
};

export const renderComponent = (
  Component,
  {
    componentProps = {},
    staticProps = {},
    componentFactory = createSampleComponentFactory(),
    sitecoreContext = {
      route: {
        name: 'Foo',
        placeholders: {},
      },
    },
  }
) => {
  const mockLayoutData = {
    sitecore: sitecoreContext,
  };

  return render(
    <ComponentPropsContext value={staticProps}>
      <FastSitecoreContext componentFactory={componentFactory} layoutData={mockLayoutData}>
        <Component {...componentProps} />
      </FastSitecoreContext>
    </ComponentPropsContext>
  );
};

export const snapshot = (Component, mockData) => {
  const component = renderComponent(Component, mockData);
  expect(component.container.firstChild).toMatchSnapshot();
  return component;
};

export const hasDataComponent = async (component, name) => {
  await waitFor(() => {
    const nodes = component.baseElement.querySelectorAll(`[data-component="${name}"]`);
    return expect(nodes.length).toBe(1);
  });
};

export const mockDateAs = (epochMs) => {
  if (typeof epochMs !== 'number') {
    console.error(
      'mockDateAs only accepts epoch values in milliseconds to prevent timezones from factoring in to Date creation.'
    );
  }

  jest.spyOn(global.Date, 'now').mockImplementation(() => new Date(epochMs).valueOf());
};

export const testFieldError = async (Component, mockData, { label, value, error }) => {
  const component = renderComponent(Component, mockData);
  const field = component.getByLabelText(label);
  fireEvent.change(field, { target: { value } });
  field.blur();
  await waitFor(() => {
    const err = component.queryByText(error);
    return expect(err).not.toBe(null);
  });
};
