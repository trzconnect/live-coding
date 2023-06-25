const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "react",
          children: [
            {
              name: "index.js",
            },
          ],
        },
        {
          name: "joi",
          children: [
            {
              name: "index.js",
            },
            {
              name: "node_modules",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "tsconfig.json",
    },
  ],
};

export const getFiles = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(files);
    }, 1000);
  });
};
