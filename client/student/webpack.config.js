const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/Home_page.js", // Điểm vào chính của ứng dụng
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Hỗ trợ cả JS và JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Hỗ trợ import mà không cần đuôi file
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Đảm bảo file HTML tồn tại
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true, // Hỗ trợ React Router
  },
};

