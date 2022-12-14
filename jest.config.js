module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true, 
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/*.js',
  ],
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
}
