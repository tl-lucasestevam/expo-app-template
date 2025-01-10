const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
	preset: 'jest-expo',
	transformIgnorePatterns: [
		'node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg))',
	],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
		'!**/styles.ts',
		'!src/app/*',
		'!src/i18n/*',
		'!src/themes/*',
		'!src/services/*',
		'!src/providers/**/index.tsx',
		'!src/layouts/**/index.tsx',
		'!src/components/**/index.tsx',
		'!src/screens/**/index.tsx',
	],
}
