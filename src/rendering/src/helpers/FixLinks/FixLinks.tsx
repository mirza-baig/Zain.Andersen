import { useEffect } from 'react';

const FixLinks = () => {
  const internalLinksSelector = '.body-copy a[href^="/"][target="_blank"]';

  useEffect(() => {
    const links = document.querySelectorAll<HTMLElement>(internalLinksSelector);

    links.forEach((link) => {
      link.replaceWith(link.cloneNode(true));
    });
  });

  return <></>;
};

export default FixLinks;
