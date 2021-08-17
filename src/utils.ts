export const typeSafeHasOwnProperty = <T extends {}>(
  target: T,
  key: keyof T
) => {
  return target.hasOwnProperty(key);
};

export const isPropertyDefinedAndNotNull = <T extends {}>(
  target: T,
  key: keyof T
) => {
  return (
    typeSafeHasOwnProperty(target, key) &&
    target[key] !== null &&
    target[key] !== undefined
  );
};
