import type { DecoratorFunction } from "storybook/internal/types";

const withColorSchema: DecoratorFunction = (Story, context) => {
  const theme = context.globals.theme;
  document.documentElement.classList.remove("dark");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  return <Story />;
};

export default withColorSchema;
