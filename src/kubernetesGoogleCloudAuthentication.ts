/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";
import { KubernetesStandardAccountAuthentication } from "./kubernetesStandardAccountAuthentication";

export class KubernetesGoogleCloudAuthentication extends KubernetesStandardAccountAuthentication {
  UseVmServiceAccount = false;
  ImpersonateServiceAccount = false;
  ServiceAccountEmails: string = undefined!;
  Project: string = undefined!;
  Region: string = undefined!;
  Zone: string = undefined!;
  ClusterName: string = undefined!;

  constructor() {
    super();
    this.AuthenticationType =
      KubernetesAuthenticationType.KubernetesGoogleCloud;
  }
}
