/* eslint-disable @typescript-eslint/consistent-type-assertions */

type AllProjects = ["projects-all"] | ["projects-unrelated"];
type AllEnvironments = ["environments-all"] | ["environments-unrelated"];
type AllTenants = ["tenants-all"] | ["tenants-unrelated"];
type AllProjectGroups = ["projectgroups-all"] | ["projectgroups-unrelated"];

type SubsetOfProjects = string[];
type SubsetOfEnvironments = string[];
type SubsetOfTenants = string[];
type SubsetOfProjectGroups = string[];

type ProjectIdRestrictions = SubsetOfProjects | AllProjects;
type EnvironmentIdRestrictions = SubsetOfEnvironments | AllEnvironments;
type TenantIdRestrictions = SubsetOfTenants | AllTenants;
type ProjectGroupIdRestrictions = SubsetOfProjectGroups | AllProjectGroups;

export interface UserPermissionRestriction {
  RestrictedToProjectIds: ProjectIdRestrictions;
  RestrictedToEnvironmentIds: EnvironmentIdRestrictions;
  RestrictedToTenantIds: TenantIdRestrictions;
  RestrictedToProjectGroupIds: ProjectGroupIdRestrictions;
  SpaceId: string;
}

export function isAllProjects(
  restrictions: ProjectIdRestrictions
): restrictions is AllProjects {
  const allProjects = restrictions as AllProjects;
  return (
    allProjects.length === 1 &&
    (allProjects[0] === "projects-all" ||
      allProjects[0] === "projects-unrelated")
  );
}

export function isAllEnvironments(
  restrictions: EnvironmentIdRestrictions
): restrictions is AllEnvironments {
  const allEnvironments = restrictions as AllEnvironments;
  return (
    allEnvironments.length === 1 &&
    (allEnvironments[0] === "environments-all" ||
      allEnvironments[0] === "environments-unrelated")
  );
}

export function isAllTenants(
  restrictions: TenantIdRestrictions
): restrictions is AllTenants {
  const allTenants = restrictions as AllTenants;
  return (
    allTenants.length === 1 &&
    (allTenants[0] === "tenants-all" || allTenants[0] === "tenants-unrelated")
  );
}

export function isAllProjectGroups(
  restrictions: ProjectGroupIdRestrictions
): restrictions is AllProjectGroups {
  const allProjectGroups = restrictions as AllProjectGroups;
  return (
    allProjectGroups.length === 1 &&
    (allProjectGroups[0] === "projectgroups-all" ||
      allProjectGroups[0] === "projectgroups-unrelated")
  );
}