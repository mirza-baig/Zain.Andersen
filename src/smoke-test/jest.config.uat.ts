import type {Config} from 'jest';
import * as base from './jest.config';

const config: Config = {
  globals: {
    enterpriseWeb: {
      urls: {
        aw: "https://www.uat.andersenwindows.com/",
        hw: "https://www.uat.heritagewindows.com/",
      },
    },
  },
};

export default { ...base.default, ...config };
