import type { AgentlessEndpointResource } from "./agentlessEndpointResource";
import type { CommunicationStyle } from "./communicationStyle";
import type { DeploymentActionContainer } from "./deploymentActionContainer";
import type { KubernetesAwsAuthentication } from "./kubernetesAwsAuthentication";
import type { KubernetesAzureAuthentication } from "./kubernetesAzureAuthentication";
import type { KubernetesCertificateAuthentication } from "./kubernetesCertificateAuthentication";
import type { KubernetesGoogleCloudAuthentication } from "./kubernetesGoogleCloudAuthentication";
import type { KubernetesPodServiceAccountAuthentication } from "./kubernetesPodServiceAccountAuthentication";
import type { KubernetesStandardAccountAuthentication } from "./kubernetesStandardAccountAuthentication";
import type { LinksCollection } from "./linksCollection";

export interface KubernetesEndpointResource extends AgentlessEndpointResource {
  AccountType: string;
  Authentication:
  | KubernetesAwsAuthentication
  | KubernetesAzureAuthentication
  | KubernetesStandardAccountAuthentication
  | KubernetesCertificateAuthentication
  | KubernetesPodServiceAccountAuthentication
  | KubernetesGoogleCloudAuthentication
  | null;
  ClusterCertificate: string;
  ClusterCertificatePath: string;
  ClusterUrl: string;
  CommunicationStyle: CommunicationStyle.Kubernetes;
  Container: DeploymentActionContainer | null;
  DefaultWorkerPoolId: string | undefined;
  Id: string;
  Links: LinksCollection;
  Name: string;
  Namespace: string;
  ProxyId: string;
  SkipTlsVerification: string;
}
