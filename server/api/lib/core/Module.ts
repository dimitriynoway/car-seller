export const Module = ({ controllers = [] }: { controllers: any[] }) => {
  const routesObj = [];

  controllers.forEach((Controller) => {
    // implement IoC here
    const instance = new Controller();

    const prefix = Reflect.getMetadata("prefix", Controller);
    const routes: Array<any> = Reflect.getMetadata("routes", Controller);

    const obj = routes.map((route) => {
      console.log({ route });
      const { path, method, methodName } = route;
      console.log({ path, method, methodName });
      return { route: prefix + path, method, handler: instance[methodName] };
    });

    console.log({ obj });

    routesObj.push(...obj);
  });

  return routesObj;
};
