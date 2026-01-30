import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    // reactDocgenTypescriptOptions: {
    //   propFilter: (prop) =>
    //     prop.parent
    //       ? !prop.parent.fileName.includes("node_modules") || // no external props
    //         prop.parent.fileName.includes("@radix-ui") // BUT Radix ones wanted
    //       : true,
    // },
  },
};
export default config;
