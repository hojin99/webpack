# webpack 구성

## 환경  

nodejs (npm) - 자바스크립트 패키지 관리 제공  

webpack (webpack-cli, webpack-dev-server, webpack-merge) - javascript 번들 작성 및 개발 환경 제공    
`webpack i webpack webpack-cli webpack-dev-server webpack-merge -D`  
https://webpack.js.org/concepts/  
https://webpack.js.org/guides/getting-started/  
https://webpack.js.org/api/cli/  
https://webpack.js.org/configuration/dev-server/  
https://www.npmjs.com/package/webpack-merge  

html-webpack-plugin - 템플릿으로 부터 webpack 출력파일을 포함하는 html 생성  
https://github.com/jantimon/html-webpack-plugin  

sass-loader, sass(dart) - scss, sass를 css로 컴파일  
https://github.com/webpack-contrib/sass-loader  

css-loader(resolve import,url), style-loader(css into dom) - css를 번들에 포함 시킴  
https://webpack.js.org/loaders/css-loader/  
https://webpack.js.org/loaders/style-loader/  
https://github.com/sass/dart-sass  

mini-css-extract-plugin - css파일 분리 (병렬로드로 성능 개선, 소스맵 지원)  
https://github.com/webpack-contrib/mini-css-extract-plugin  

## 실행  
package.json의 scripts를 통해서 실행
dev - 개발 서버 Run (http://localhost:9000에서 테스트, 코드 변경 시 자동으로 빌드 및 적용됨)  
prod - 패키징 (dist폴더)  

