const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/addon-links",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-knobs",
        "@storybook/addon-actions",
        "@storybook/addon-controls",
        "storybook-dark-mode/register",
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../"),
            },
            // { test: /\.css$/, loader: 'style-loader!css-loader', include: __dirname },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "fonts/[hash].[ext]",
                        limit: 5000,
                        mimetype: "application/font-woff",
                    },
                },
            },
            {
                test: /\.(ttf|eot|svg|png)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[hash].[ext]",
                    },
                },
            },
            {
                test: /\.mdx$/,
                use: ["babel-loader", "@mdx-js/loader"],
            },
        ],
    },
};
