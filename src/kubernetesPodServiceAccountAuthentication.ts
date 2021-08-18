/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { IEndpointWithMultipleAuthentication } from "./endpointResource";
import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";

export class KubernetesPodServiceAccountAuthentication
  implements IEndpointWithMultipleAuthentication {
  AuthenticationType: string = undefined!;
  TokenPath: string = undefined!;

  constructor() {
    this.AuthenticationType =
      KubernetesAuthenticationType.KubernetesPodServiceAccount;
  }
}
