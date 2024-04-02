import { ParsedUrlQuery } from 'querystring';
import * as plugins from 'temp/extract-path-plugins';

export interface Plugin {
  /**
   * A function which will be called during path extraction
   */
  exec(path: string): string;
}

export class PathExtractor {
  /**
   * Extract normalized Sitecore item path
   * @param {ParsedUrlQuery} [params]
   */
  public extract(params: ParsedUrlQuery | undefined): string {
    if (params === undefined) {
      return '/';
    }
    let path = Array.isArray(params.path) ? params.path.join('/') : params.path ?? '/';

    // Ensure leading '/'
    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    const extractedPath = (Object.values(plugins) as Plugin[]).reduce(
      (resultPath, plugin) => plugin.exec(resultPath),
      path
    );

    // For some reason the querystring sometimes comes across in the path?
    return extractedPath.split('?')[0];
  }
}

export const pathExtractor = new PathExtractor();
