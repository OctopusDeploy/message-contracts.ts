import type { EndpointResource } from "./endpointResource";
import type { TentacleDetailsResource } from "./tentacleDetailsResource";

export interface TentacleEndpointResource extends EndpointResource {
  Thumbprint: string;
  TentacleVersionDetails: TentacleDetailsResource;
  CertificateSignatureAlgorithm: string;
}
