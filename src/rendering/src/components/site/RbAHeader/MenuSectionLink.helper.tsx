import { LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from 'lib/jss21.2.1/layout';
import React from 'react';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { CTASection } from 'src/helpers/LinkWrapper/LinkWrapper';

export const MenuSectionLink = ({
  menuTitle,
  menuLink,
  ctaSection,
}: {
  menuTitle: Field<string>;
  menuLink: LinkField;
  ctaSection: CTASection;
}) => {
  return menuLink.value.href ? (
    <LinkWrapper
      className="flex items-center"
      field={{ href: menuLink.value.href, text: menuTitle.value }}
      ctaSection={ctaSection}
      ariaLabel={{ value: menuTitle.value }}
    >
      <span className="ml-xxxs">
        <svg
          role="img"
          width="12"
          height="12"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Arrow Icon</title>
          <path
            d="M13.4111 15.4186L13.4985 15.5071L13.5874 15.4201L21.0874 8.08948L21.1788 8.00009L21.0874 7.9107L13.5874 0.580042L13.4985 0.49313L13.4111 0.581588L11.6611 2.35316L11.5728 2.44256L11.6626 2.5304L15.8808 6.65331H1H0.875V6.77831V9.22187V9.34687H1H15.8808L11.6626 13.4698L11.5728 13.5576L11.6611 13.647L13.4111 15.4186Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.25"
          ></path>
        </svg>
      </span>
    </LinkWrapper>
  ) : (
    <Text field={{ value: menuTitle.value }} />
  );
};
