export const getEnvVariables = () => {
  // import.meta.env;

  return {
      // ...import.meta.env
      GITHUB_TOKEN: import.meta.env.GITHUB_TOKEN,
  }
}