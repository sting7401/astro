import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import tsParser from '@typescript-eslint/parser';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro,svelte}'] },
    ...eslintPluginAstro.configs.recommended,
    eslint.configs.recommended,
    js.configs.recommended,
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...tailwindPlugin.configs['flat/recommended'],
    ...svelte.configs['flat/recommended'],
    litA11yRecommended,
    prettier,
    ...svelte.configs['flat/prettier'],
    prettierPluginRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
        },
    },
    {
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
            globals: { ...globals.browser },
        },
    },
    {
        ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/*', 'examples', 'lib'],
    },
];

/*
ESLint의 recommended 규칙 목록

Possible Errors
// 콘솔 사용 금지 (기본값: 경고)
'no-console': 'warn', // console 사용에 대한 경고

// debugger 사용 금지
'no-debugger': 'error', // debugger 사용에 대한 오류

// 함수 매개변수의 중복 금지
'no-dupe-args': 'error', // 중복된 매개변수 사용 금지

// 객체 내 중복 키 금지
'no-dupe-keys': 'error', // 중복된 객체 키 사용 금지

// switch문에서 중복된 case 금지
'no-duplicate-case': 'error', // 중복된 case 사용 금지

// 빈 블록 금지 (예외: 주석이 있는 경우)
'no-empty': 'error', // 빈 블록 사용 금지

// catch 절에서 예외 객체에 대한 재할당 금지
'no-ex-assign': 'error', // catch 절에서 예외 객체 재할당 금지

// 불필요한 세미콜론 금지
'no-extra-semi': 'error', // 불필요한 세미콜론 사용 금지

// 함수 선언에 대한 재할당 금지
'no-func-assign': 'error', // 함수 재할당 금지


Best Practices
// == 대신 === 사용 권장
'eqeqeq': 'error', // 엄격한 동등 연산자 사용 권장

// eval() 사용 금지
'no-eval': 'error', // eval 사용 금지

// 전역 범위에서의 암묵적 전역 변수 및 함수 생성 금지
'no-implicit-globals': 'error', // 암묵적 전역 변수 사용 금지

// 루프 내부에서 함수 선언 금지
'no-loop-func': 'error', // 루프 내 함수 선언 금지

// 여러 줄 문자열 리터럴 금지
'no-multi-str': 'error', // 여러 줄 문자열 사용 금지

// new 연산자를 사용하여 객체 생성 후 할당하지 않는 것 금지
'no-new': 'error', // new 사용 후 할당 금지

// __proto__ 속성 접근 금지
'no-proto': 'error', // __proto__ 접근 금지

// 변수의 중복 선언 금지
'no-redeclare': 'error', // 중복 변수 선언 금지

// 동일한 변수에 자기 할당 금지
'no-self-assign': 'error', // 자기 할당 금지

// 변수와 자기 자신을 비교 금지
'no-self-compare': 'error', // 자기 비교 금지


Variables
// 변수에 대한 delete 연산자 사용 금지
'no-delete-var': 'error', // delete 사용 금지

// 제한된 이름의 변수 사용 금지 (e.g., undefined, NaN)
'no-shadow-restricted-names': 'error', // 제한된 이름 사용 금지

// 선언되지 않은 변수 사용 금지
'no-undef': 'error', // 선언되지 않은 변수 사용 금지

// 사용하지 않는 변수 경고
'no-unused-vars': 'warn', // 사용하지 않는 변수에 대한 경고


Stylistic Choices
// 공백과 탭의 혼합 사용 금지
'no-mixed-spaces-and-tabs': 'error', // 공백과 탭 혼합 금지

// 줄 끝의 불필요한 공백 제거
'no-trailing-spaces': 'error', // 줄 끝 공백 사용 금지

// 문장의 끝에 세미콜론 사용 여부 (기본값: 권장)
'semi': ['error', 'always'], // 세미콜론 사용 권장


ECMAScript 6 (ES6+)
// 파생 클래스의 constructor에서 super() 호출 필요
'constructor-super': 'error', // constructor에서 super 호출 필수

// 클래스 선언에 대한 재할당 금지
'no-class-assign': 'error', // 클래스 재할당 금지

// const 변수에 대한 재할당 금지
'no-const-assign': 'error', // const 재할당 금지

// Symbol()을 new와 함께 사용 금지
'no-new-symbol': 'error', // Symbol 사용 시 new 금지

// super() 호출 전 this 사용 금지
'no-this-before-super': 'error', // super 호출 전 this 사용 금지

// var 대신 let 또는 const 사용 권장
'no-var': 'error', // var 사용 금지

// 변경되지 않는 변수에 const 사용 권장
'prefer-const': 'error' // const 사용 권장
*/
