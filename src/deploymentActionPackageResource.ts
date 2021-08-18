/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as _ from "lodash";
import type DeploymentActionResource from "./deploymentActionResource";

export interface DeploymentActionPackageResource {
  DeploymentAction: string;
  PackageReference?: string;
}

export function displayName(pkg: DeploymentActionPackageResource) {
  return !!pkg.PackageReference
    ? `${pkg.DeploymentAction}/${pkg.PackageReference}`
    : pkg.DeploymentAction;
}

export function deploymentActionPackages(actions: DeploymentActionResource[]) {
  return _.chain(actions)
    .flatMap((action) =>
      _.map(action.Packages, (pkg) => ({
        DeploymentAction: action.Name,
        PackageReference: pkg.Name!,
      }))
    )
    .value();
}
