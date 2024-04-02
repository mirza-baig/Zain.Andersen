import { Result } from '@coveo/headless';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getFieldsToInclude } from 'lib/coveo';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { ResultLink } from 'src/helpers/Coveo';

const TableTemplate = (
  resultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.ResultColumn[],
  templateClasses?: { [property: string]: string }
) => {
  const fieldsToInclude = getFieldsToInclude(resultItems, 'table');

  return {
    priority: 1,
    conditions: [],
    fields: ['sc_templateid', ...fieldsToInclude],
    content: (result: Result) => {
      return (
        <li
          key={result.uniqueId}
          className="flex flex-col border-b border-gray py-s text-body text-dark-gray ml:flex-row ml:first:mt-[10px] ml:first:border-t"
        >
          {resultItems.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  'my-xxs flex ml:my-0',
                  index === 0 ? 'basis-4/5' : 'basis-1/5'
                )}
              >
                <p className={classNames('basis-2/6 ml:hidden', templateClasses?.itemTitle)}>
                  {item.fields?.displayName.value}
                </p>
                {item.fields?.isResultLink.value ? (
                  <div className={templateClasses?.itemLink}>
                    <SvgIcon icon="pdf" className="mr-xxs" />
                    <ResultLink result={result}>{item.fields?.text.value}</ResultLink>
                  </div>
                ) : (
                  <p className="my-auto basis-4/6">
                    {
                      result.raw[
                        getEnum<string>(item.fields?.field) || item.fields?.text.value || ''
                      ] as string
                    }
                  </p>
                )}
              </div>
            );
          })}
        </li>
      );
    },
  };
};

export default TableTemplate;
