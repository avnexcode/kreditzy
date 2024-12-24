const path = import('path');

module.exports = {
    output: {
        filename: 'kreditur-webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
};
