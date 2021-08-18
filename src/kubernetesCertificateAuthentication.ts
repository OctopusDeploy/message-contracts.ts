/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { IEndpointWithMultipleAuthentication } from "./endpointResource";
import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";

export class KubernetesCertificateAuthentication
  implements IEndpointWithMultipleAuthentication {
  AuthenticationType: string = undefined!;
  ClientCertificate: string = undefined!;

  constructor() {
    this.AuthenticationType =
      KubernetesAuthenticationType.KubernetesCertificate;
  }
}
