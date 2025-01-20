export const cn = (...classes: Array<string | boolean | undefined>): string =>
  classes.filter((item) => item).join(" ");
