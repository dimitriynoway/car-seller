export const Module = ({ controller = [] }: { controller: any[] }) => {
  console.log({ controller });

  const routesObj = [];

  controller.forEach((Controller) => {
    // implement IoC here
    const instance = new Controller();

    const prefix = Reflect.getMetadata("prefix", controller);
    const routes: Array<any> = Reflect.getMetadata("routes", controller);

    console.log({ prefix, routes });

    const obj = routes.map((route) => {
      const { path, method, methodName } = route;
      return { route: prefix + path, method, handler: instance[methodName] };
    });

    console.log({ obj });

    routesObj.push(...obj);
  });

  return routesObj;
};
