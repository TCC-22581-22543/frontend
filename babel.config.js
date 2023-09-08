module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          "@assets": "./src/Components",
          "@components": "./src/Components",
          "@routes": "./src/Routes",
          "@Screens": "./src/Screens",
          "@storage": "./src/Storage",
          "@theme": "./src/Theme",
          "@utils": "./src/Utils"
        }
      }]
    ]
  }
};