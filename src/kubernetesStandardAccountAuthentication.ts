/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { IEndpointWithMultipleAuthentication } from "./endpointResource";
import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";

export class KubernetesStandardAccountAuthentication
  implements IEndpointWithMultipleAuthentication {
  AccountId: string = undefined!;
  AuthenticationType: string = undefined!;

  constructor() {
    this.AuthenticationType = KubernetesAuthenticationType.KubernetesStandard;
  }
}
