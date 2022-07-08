// nodejs에서 언제든지 사용하여 가지고와 쓸수있는 전역 모듈
const path = require('path')
// node_modules폴더에 있는 html-webpack-plugin 패키지를 가져온다
const HtmlPlugin = require('html-webpack-plugin')

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    // parcel index.html
    // 파일을 읽어들이기 시작하는 진입점 생성
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path속성은 반드시 절대경로 이어야 한다
        // __dirname : 현재파일이 있는 그 경로, resolve() : 인자의 요소끼리 합쳐주는 함수
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                // 정규표현식 : .css로 끝나는 파일, ?는 있을수도 있고 없을수도 있다는 의미
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}