/**
 *
 * @param prefix
 * @returns
 */
export const Controller = (prefix = "/"): ClassDecorator => {
  const modifiedPrefix = prefix === "" ? "/" : !prefix.startsWith("/") ? `/${prefix}` : prefix;

  console.log("DEFINE CONTROLLER");

  return (target: any) => {
    // define prefix metadata value to class
    Reflect.defineMetadata("prefix", modifiedPrefix, target);

    // if class does not have any routes inside, create empty array
    if (!Reflect.hasMetadata("route", target)) {
      Reflect.defineMetadata("route", [], target);
    }
  };
};
