var webpack = require('webpack')

module.exports = {

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {test: /\.css$/, loader: "style!css"}

        ]
    }
};
