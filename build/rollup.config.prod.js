import baseConfig from './rollup.config.base';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;

if (env === 'production') {
    baseConfig.forEach(config => {
        config.plugins.push(uglify({
            compress: {
                unsafe: true,
                unsafe_comps: true,
            },
        }));
    });
}
export default baseConfig;