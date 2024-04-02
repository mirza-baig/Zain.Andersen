import { Pager as HeadlessPager } from '@coveo/headless';
import classNames from 'classnames';
import { FunctionComponent, useEffect, useState } from 'react';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { twMerge } from 'tailwind-merge';

interface PagerProps {
  controller: HeadlessPager;
  pagerClasses?: {
    [property: string]: string;
  };
}

export const Pager: FunctionComponent<PagerProps> = (props) => {
  const { controller, pagerClasses } = props;
  const [state, setState] = useState(controller?.state);

  useEffect(() => controller?.subscribe(() => setState(controller.state)), [controller]);

  if (controller?.state.currentPages.length <= 1) {
    return <></>;
  }

  return (
    <nav className={pagerClasses?.pagerWrapper}>
      <button
        className={classNames(
          pagerClasses?.navButton,
          pagerClasses?.previousButton,
          !state?.hasPreviousPage && pagerClasses?.disabledNavButton
        )}
        disabled={!state?.hasPreviousPage}
        onClick={() => controller.previousPage()}
        title="btn-previous"
      >
        <SvgIcon icon="arrow-left" size="md" />
      </button>
      {state?.currentPages.map((page) => (
        <button
          key={page}
          disabled={controller.isCurrentPage(page)}
          onClick={() => controller.selectPage(page)}
          className={twMerge(
            pagerClasses?.pageNumber,
            controller.isCurrentPage(page) && pagerClasses?.currentPage
          )}
          title="btn-page-number"
        >
          {page}
        </button>
      ))}
      <button
        className={classNames(
          pagerClasses?.navButton,
          pagerClasses?.nextButton,
          !state?.hasNextPage && pagerClasses?.disabledNavButton
        )}
        disabled={!state?.hasNextPage}
        onClick={() => controller.nextPage()}
        title="btn-next"
      >
        <SvgIcon icon="arrow-right" size="md" />
      </button>
    </nav>
  );
};
