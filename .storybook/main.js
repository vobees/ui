const path = require('path')
const fs = require('fs')

// This logic means `"../packages/components/*/stories/*.stories.tsx"`.
const getStories = () => {
  const scope = fs.readdirSync('src')
  return scope.map((component) => `src/${component}/stories`)
    .filter((storyDir) => fs.existsSync(storyDir))
    .map((storyDir) => `../${storyDir}/*.stories.tsx`)
}

module.exports = {
  core: {
    builder: '@storybook/builder-webpack5',
    disabledTelemetry: true,
  },
  stories: getStories(),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
}
