(self.webpackChunkstar_flicks_ds3=self.webpackChunkstar_flicks_ds3||[]).push([[3,502],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./components/AboutAtom.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_home_user_rea_de_Trabalho_Projects_star_flicks_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./components/SFRanking/SFRanking.stories.ts");function _createMdxContent(props){const _components={h1:"h1",p:"p",...(0,_home_user_rea_de_Trabalho_Projects_star_flicks_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Atom/About"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"atom",children:"Atom"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Bem-vindo à seção de Átomos do nosso Design System, onde a construção de interfaces começa com os blocos fundamentais. Os átomos são os blocos de construção mais elementares, representando os elementos visuais mais simples e reutilizáveis em nossa interface. Cada átomo é projetado com precisão para garantir consistência e coesão em toda a experiência do usuário."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Nesta seção, você encontrará uma variedade de átomos que abrangem desde cores e tipografia até ícones e espaçamento. Cada átomo é cuidadosamente projetado para ser flexível e escalável, permitindo sua combinação para criar componentes mais complexos. Ao utilizar os átomos em conjunto, você poderá criar interfaces coesas e intuitivas que refletem nossa identidade de marca de forma consistente."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Explore nossa coleção de átomos e descubra como eles podem ser combinados para formar componentes significativos, proporcionando uma base sólida para a criação de experiências digitais de alta qualidade."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_user_rea_de_Trabalho_Projects_star_flicks_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./components/SFRanking/SFRanking.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SFRanking_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),SFIcon=__webpack_require__("./components/SFIcon/SFIcon.tsx");const SFRanking=param=>{let{value}=param;const stars=Array.from({length:5},((_,index)=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(SFIcon.V,{name:"star"})},index)));return(0,jsx_runtime.jsx)("div",{className:"flex",children:(0,jsx_runtime.jsxs)("div",{className:"relative z-0",children:[(0,jsx_runtime.jsx)("div",{className:"absolute top-0 right-0 bg-white h-full z-10",style:{width:"".concat(100-value,"%")}}),(0,jsx_runtime.jsx)("ul",{className:"flex gap-1",children:stars})]})})};var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1;SFRanking.__docgenInfo={description:"",methods:[],displayName:"SFRanking",props:{className:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"number"},description:""}}};const SFRanking_stories={title:"Components/SF-Ranking",component:SFRanking,argTypes:{}},Primary={args:{value:45}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 45\n  }\n}",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]},"./components/SFIcon/SFIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>SFIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const SFIcon=param=>{let{name}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon-".concat(name," text-yellow")})};SFIcon.__docgenInfo={description:"",methods:[],displayName:"SFIcon",props:{name:{required:!0,tsType:{name:"union",raw:'| "star"',elements:[{name:"literal",value:'"star"'}]},description:""}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function p(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&"key"!==b&&"ref"!==b&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=p,exports.jsxs=p},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);