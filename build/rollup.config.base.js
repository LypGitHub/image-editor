import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import typescript from 'typescript';
import rollupTypescript from 'rollup-plugin-typescript';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import { main, module, browser } from '../package.json';

const env = process.env.NODE_ENV;

const plugins = [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    json(), // surport json file import
    rollupTypescript({ typescript, importHelpers: true }),
    replace({
        'process.env.NODE_ENV': JSON.stringify(env),
    }),
    babel(),
];

export default [
    {
		input: 'src/index.ts',
		output: {
			name: 'gmage-editor',
			file: browser,
			format: 'umd'
		},
		plugins: plugins
    },
    {
        input: 'src/index.ts',

        external: ['ms'],

		output: [
			{ name: 'gmage-editor', file: main, format: 'cjs' },
			{ name: 'gmage-editor', file: module, format: 'es' }
        ],
        
        plugins: plugins
    }
];