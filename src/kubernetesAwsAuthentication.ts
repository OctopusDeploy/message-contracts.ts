import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";
import { KubernetesStandardAccountAuthentication } from "./kubernetesStandardAccountAuthentication";

export class KubernetesAwsAuthentication extends KubernetesStandardAccountAuthentication {
  AssumedRoleArn: string = undefined!;
  AssumedRoleSession: string = undefined!;
  AssumeRole: boolean = undefined!;
  AssumeRoleExternalId: string = undefined!;
  AssumeRoleSessionDurationSeconds: number | null = undefined!;
  ClusterName: string = undefined!;
  UseInstanceRole: boolean = undefined!;

  constructor() {
    super();
    this.AuthenticationType = KubernetesAuthenticationType.KubernetesAws;
  }
}
