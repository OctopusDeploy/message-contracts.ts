import type { IEndpointWithMultipleAuthentication } from "./endpointResource";
import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";

export class KubernetesStandardAccountAuthentication
  implements IEndpointWithMultipleAuthentication {
  AuthenticationType: string = undefined!;
  AccountId: string = undefined!;

  constructor() {
    this.AuthenticationType = KubernetesAuthenticationType.KubernetesStandard;
  }
}
