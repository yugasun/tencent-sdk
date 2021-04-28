import { ServiceType, ApiFactory } from '@tencent-sdk/common';

const ACTIONS = [
  'CreateFunction',
  'DeleteFunction',
  'GetFunction',
  'UpdateFunctionCode',
  'UpdateFunctionConfiguration',
  'CreateTrigger',
  'DeleteTrigger',
  'PublishVersion',
  'ListAliases',
  'CreateAlias',
  'UpdateAlias',
  'DeleteAlias',
  'GetAlias',
  'Invoke',
  'ListTriggers',
] as const;

export type ActionType = typeof ACTIONS[number];

const APIS = ApiFactory({
  serviceType: ServiceType.faas,
  version: '2018-04-16',
  actions: ACTIONS,
});

export default APIS;
