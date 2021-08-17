import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { CommunicationStyle } from "./communicationStyle";
import type { DeploymentActionContainer } from "./deploymentActionContainer";
import type { KubernetesAwsAuthentication } from "./kubernetesAwsAuthentication";
import type { KubernetesAzureAuthentication } from "./kubernetesAzureAuthentication";
import type { KubernetesStandardAccountAuthentication } from "./kubernetesStandardAccountAuthentication";
import type { KubernetesCertificateAuthentication } from "./kubernetesCertificateAuthentication";
import type { KubernetesPodServiceAccountAuthentication } from "./kubernetesPodServiceAccountAuthentication";
import type { KubernetesGoogleCloudAuthentication } from "./kubernetesGoogleCloudAuthentication";
import type LinksCollection from "./linksCollection";

export interface KubernetesEndpointResource extends AgentlessEndpointResource {
  Id: string;
  Links: LinksCollection;
  Name: string;
  AccountType: string;
  ClusterUrl: string;
  ClusterCertificate: string;
  ClusterCertificatePath: string;
  Namespace: string;
  SkipTlsVerification: string;
  ProxyId: string;
  DefaultWorkerPoolId: string | undefined;
  CommunicationStyle: CommunicationStyle.Kubernetes;
  Authentication:
    | KubernetesAwsAuthentication
    | KubernetesAzureAuthentication
    | KubernetesStandardAccountAuthentication
    | KubernetesCertificateAuthentication
    | KubernetesPodServiceAccountAuthentication
    | KubernetesGoogleCloudAuthentication
    | null;
  Container: DeploymentActionContainer | null;
}
