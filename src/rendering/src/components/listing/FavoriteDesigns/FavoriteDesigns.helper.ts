import { ButtonGroupProps } from 'src/helpers/ButtonGroup';
import { ImageToggleWrapperProps } from 'src/helpers/ImageToggleWrapper/ImageToggleWrapper';
import { DesignProps } from './FavoriteDesignsTypes.helper';

export const getImageToggleData = (props: DesignProps): ImageToggleWrapperProps => {
  return {
    fields: {
      primaryImage: {
        value: {
          src: props.interiorImage?.src,
          width: 387,
          height: 387,
        },
      },
      primaryImageMobile: {
        value: {
          src: props.interiorImage?.src,
          width: 387,
          height: 387,
        },
      },
      secondaryImage: {
        value: {
          src: props.exteriorImage?.src,
          width: 387,
          height: 387,
        },
      },
      secondaryImageMobile: {
        value: {
          src: props.exteriorImage?.src,
          width: 387,
          height: 387,
        },
      },
    },
  };
};

export const getButtonGroupData = (props: DesignProps): Partial<ButtonGroupProps> => {
  return {
    fields: {
      cta1Style: {
        name: '',
        id: '',
        url: '',
        fields: {
          Value: {
            value: 'primary',
          },
        },
      },
      cta1Link: {
        value: {
          href: decodeURIComponent(props.requestAQuoteUrl),
          linktype: 'internal',
          text: 'Get a quote',
          querystring: '',
          target: '',
          id: '{7FB335D2-8E99-458E-9EF9-562A78CCB821}',
        },
      },
      cta1Icon: {
        id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
        url: '',
        name: 'Arrow',
        displayName: 'Arrow',
        fields: {
          Value: {
            value: 'arrow',
          },
        },
        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
        templateName: 'Enum',
      },
      cta1ModalLinkText: { value: '' },
      cta1AriaLabel: {
        value: '',
      },
      cta2Style: {
        name: '',
        url: '',
        id: '',
        fields: {
          Value: {
            value: 'link',
          },
        },
      },
      cta2Link: {
        value: {
          href: props.url,
          linktype: 'internal',
          text: 'Edit design selections',
          querystring: '',
          target: '',
          id: '{7FB335D2-8E99-458E-9EF9-562A78CCB821}',
        },
      },
      cta2Icon: {
        id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
        url: '',
        name: 'Arrow',
        displayName: 'Arrow',
        fields: {
          Value: {
            value: 'arrow',
          },
        },
        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
        templateName: 'Enum',
      },
      cta2ModalLinkText: { value: '' },
      cta2AriaLabel: {
        value: '',
      },
      cta3Style: {
        name: '',
        url: '',
        id: '',
        fields: {
          Value: {
            value: 'link',
          },
        },
      },
      cta3Link: {
        value: {},
      },
      cta3Icon: {
        id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
        url: '',
        name: 'Arrow',
        displayName: 'Arrow',
        fields: {
          Value: {
            value: 'arrow',
          },
        },
        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
        templateName: 'Enum',
      },
      cta3ModalLinkText: { value: '' },
      cta3AriaLabel: {
        value: '',
      },
    },
  };
};

export const shareServicesToExclude = [
  'amazon_wish_list',
  'aol_mail',
  'balatarin',
  'bibsonomy',
  'bitty_browser',
  'blinklist',
  'blogger',
  'blogmarks',
  'bookmarks_fr',
  'box_net',
  'buffer',
  'care2_news',
  'citeulike',
  'copy_link',
  'design_float',
  'diary_ru',
  'diaspora',
  'digg',
  'diigo',
  'douban',
  'draugiem',
  'dzone',
  'evernote',
  'facebook_messenger',
  'fark',
  'flipboard',
  'folkd',
  'google_bookmarks',
  'google_classroom',
  'hacker_news',
  'hatena',
  'houzz',
  'instapaper',
  'kakao',
  'kik',
  'kindle_it',
  'known',
  'line',
  'linkedin',
  'livejournal',
  'mail_ru',
  'mastodon',
  'mendeley',
  'meneame',
  'mewe',
  'mix',
  'mixi',
  'myspace',
  'netvouz',
  'odnoklassniki',
  'papaly',
  'pinboard',
  'plurk',
  'pocket',
  'print',
  'printfriendly',
  'protopage_bookmarks',
  'pusha',
  'qzone',
  'reddit',
  'rediff',
  'refind',
  'renren',
  'sina_weibo',
  'sitejot',
  'skype',
  'slashdot',
  'sms',
  'stocktwits',
  'svejo',
  'symbaloo_bookmarks',
  'telegram',
  'threema',
  'trello',
  'tuenti',
  'tumblr',
  'twiddla',
  'twitter',
  'typepad_post',
  'viadeo',
  'viber',
  'vk',
  'wanelo',
  'wechat',
  'whatsapp',
  'wordpress',
  'wykop',
  'xing',
  'yoolink',
  'yummly',
];
