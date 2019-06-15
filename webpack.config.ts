import path from 'path'

import { Configuration } from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'

const config = (_env: any, { mode }: Configuration): Configuration => {
  const isProduction = mode === 'production'

  return {
    entry: {
      app: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: isProduction ? false : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'thread-loader',
            },
            {
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
              options: {
                happyPackMode: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
    optimization: {
      minimizer: [new TerserWebpackPlugin()],
    },
  }
}

export default config
