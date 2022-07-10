export const Get = (path: string): MethodDecorator => (target, propertyKey: string, descriptor) => {
    console.log({ target, propertyKey, descriptor, constr: target.constructor });

    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }

    const routes = Reflect.getMetadata("routes", target.constructor) as Array<any>;

    routes.push({
      method: "GET",
      path,
      methodName: propertyKey,
    });

    Reflect.defineMetadata("routes", routes, target.constructor);

    const route1 = Reflect.getMetadata("routes", target.constructor) as Array<any>;
    console.log({ route1 });
  };
