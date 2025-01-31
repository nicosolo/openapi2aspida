import type { OpenAPIV3 } from 'openapi-types';
import { $ref2Type, defKey2defName, isRefObject, schema2value } from './converters';
import type { PropValue } from './props2String';

export type Response = { name: string; value: string | PropValue };

export default (
  bodies: OpenAPIV3.ComponentsObject['responses'],
  keepDateObject: boolean,
  typesNamespace: string
) =>
  bodies &&
  Object.keys(bodies)
    .map(defKey => {
      const target = bodies[defKey];
      let value: Response['value'];

      if (isRefObject(target)) {
        value = $ref2Type(target.$ref, typesNamespace);
      } else {
        const content =
          target.content &&
          Object.entries(target.content).find(([key]) => key.startsWith('application/'))?.[1];
        if (!content) return null;

        const result = schema2value(content.schema, false, keepDateObject, typesNamespace);
        if (!result) return null;

        value = result;
      }

      return { name: defKey2defName(defKey), value };
    })
    .filter((v): v is Response => !!v);
