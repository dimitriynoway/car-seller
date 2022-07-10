export const Inject = (token: string | symbol) => (x, y, z) => {
    console.log({ x, y, z, token });
  };
