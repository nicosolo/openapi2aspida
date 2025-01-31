import type { AspidaConfig } from 'aspida/dist/cjs/commands';
import { getConfigs } from 'aspida/dist/cjs/commands';
import type { OpenAPI } from 'openapi-types';

export type Config = Pick<AspidaConfig, 'outputEachDir' | 'outputMode' | 'trailingSlash'> & {
  input: string | OpenAPI.Document;
  output: string;
  isYaml: boolean;
  keepDateObject?: boolean;
  typesNamespace?: string;
};

export type ConfigFile = AspidaConfig & {
  openapi?: {
    inputFile: string;
    yaml?: boolean;
    outputDir?: string;
  };
  keepDateObject?: boolean;
  typesNamespace?: string;
};

const createConfig = (config: ConfigFile): Config => {
  const openapi = config.openapi!;
  return {
    input: openapi.inputFile,
    output: openapi.outputDir ?? config.input,
    trailingSlash: config.trailingSlash,
    outputEachDir: config.outputEachDir,
    outputMode: config.outputMode,
    isYaml: openapi.yaml ?? !openapi.inputFile.endsWith('.json'),
    keepDateObject: !!config.keepDateObject,
    typesNamespace: config.typesNamespace || 'Types',
  };
};

export type PartialConfig = Partial<ConfigFile> | Partial<ConfigFile>[];

export default (config?: PartialConfig): Config[] => {
  const ReturnValue = getConfigs(config)
    .filter((c: ConfigFile) => c.openapi)
    .map(createConfig);

  return ReturnValue;
};
