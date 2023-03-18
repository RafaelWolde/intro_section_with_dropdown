
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");


const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
});
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static"),
        filename: "main.js",
    },

    module: {

        rules: [{
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: "file-loader",
                },
            ],
        }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [htmlPlugin],
    resolve: {
        extensions: ["", ".js", ".jsx"],
    }
};
