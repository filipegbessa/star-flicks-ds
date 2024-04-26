"use strict";(self.webpackChunkstar_flicks_ds=self.webpackChunkstar_flicks_ds||[]).push([[368],{"./components/Switch/Switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),switch_switch=__webpack_require__("./node_modules/@headlessui/react/dist/components/switch/switch.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Switch=param=>{let{defaultEnable:enabledByDefault,disabled,onChange,variant="common",...props}=param;const[enabled,setEnabled]=(0,react.useState)(enabledByDefault),style=(param=>{let{variant,enabled,disabled}=param;const containerClasses=(0,dist.F)(classnames_default()("relative inline-flex h-6 w-11 items-center rounded-full disabled:bg-disabled bg-primary transition",{"pointer-events-none":disabled},{"bg-opacity-50":!enabled&&!disabled}),{variants:{variant:{common:classnames_default()({"bg-primary":enabled},{"bg-primary hover:bg-primaryHover":!enabled}),contract:classnames_default()({"bg-success":enabled},{"bg-error":!enabled})}},defaultVariants:{variant:"common"}})({variant});return{Switch:classnames_default()("inline-block bg-white h-4 w-4 rounded-full transform transition-transform duration-200 ease-in-out",enabled?"translate-x-6":"translate-x-1"),Container:containerClasses}})({variant,enabled,disabled});return(0,jsx_runtime.jsxs)(switch_switch.d,{checked:enabled,onChange:()=>{setEnabled(!enabled),null==onChange||onChange(!enabled)},className:style.Container,disabled,...props,children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"switch toggle"}),(0,jsx_runtime.jsx)("span",{className:style.Switch})]})};var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1;Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultEnable:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"common" | "contract"',elements:[{name:"literal",value:'"common"'},{name:"literal",value:'"contract"'}]},description:"",defaultValue:{value:'"common"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(enabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"enabled"}],return:{name:"void"}}},description:""}}};const Switch_stories={title:"Molecules/Switch",component:Switch,argTypes:{}},Primary={args:{name:"star"}},Disabled={args:{name:"star",disabled:!0}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:'{\n  args: {\n    name: "star"\n  }\n}',...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:'{\n  args: {\n    name: "star",\n    disabled: true\n  }\n}',...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}};const __namedExportsOrder=["Primary","Disabled"]}}]);