export default ({ config }) => ({
  ...config,
  name: "jwservice",
  slug: "jwservice",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
