import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";
import { KubernetesStandardAccountAuthentication } from "./kubernetesStandardAccountAuthentication";

export class KubernetesAzureAuthentication extends KubernetesStandardAccountAuthentication {
  ClusterName: string = undefined!;
  ClusterResourceGroup: string = undefined!;
  AdminLogin: string = undefined!;

  constructor() {
    super();
    this.AuthenticationType = KubernetesAuthenticationType.KubernetesAzure;
  }
}
