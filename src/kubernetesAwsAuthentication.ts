/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { KubernetesAuthenticationType } from "./kubernetesAuthenticationType";
import { KubernetesStandardAccountAuthentication } from "./kubernetesStandardAccountAuthentication";

export class KubernetesAwsAuthentication extends KubernetesStandardAccountAuthentication {
  UseInstanceRole: boolean = undefined!;
  AssumeRole: boolean = undefined!;
  AssumedRoleArn: string = undefined!;
  AssumedRoleSession: string = undefined!;
  AssumeRoleSessionDurationSeconds: number | null = undefined!;
  AssumeRoleExternalId: string = undefined!;
  ClusterName: string = undefined!;

  constructor() {
    super();
    this.AuthenticationType = KubernetesAuthenticationType.KubernetesAws;
  }
}
