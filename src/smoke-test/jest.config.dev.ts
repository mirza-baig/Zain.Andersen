import type {Config} from 'jest';
import * as base from './jest.config';

const config: Config = {
  globals: {
    enterpriseWeb: {
      urls: {
        aw: "https://www.dev.andersenwindows.com/",
        hw: "https://www.dev.heritagewindows.com/",
      },
    },
  },
};

export default { ...base.default, ...config };
