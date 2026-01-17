import{j as a,t as y,B as s}from"./react-sWiKbk-Z.js";const b=({show:t,onHide:e,title:n,subtitle:r="",icon:o="pi pi-pencil",width:l="36rem",confirmLabel:c="Guardar",cancelLabel:d="Cancelar",loading:i=!1,disabled:p=!1,onConfirm:x,children:m})=>a.jsxs(y,{visible:t,position:"right",onHide:e,showCloseIcon:!1,style:{width:l},modal:!0,className:"shadow-2xl",pt:{mask:{className:"transition-opacity duration-300 ease-in-out"},content:{className:"!p-0 h-full"}},transitionOptions:{enterFromClassName:"translate-x-full opacity-90",enterActiveClassName:"transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]",leaveToClassName:"translate-x-full opacity-90",leaveActiveClassName:"transition-all duration-300 ease-in"},children:[a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("header",{className:"p-6 border-b-2",children:a.jsxs("div",{className:`flex items-center gap-4 transition-all duration-500 ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}`,children:[a.jsx("div",{className:`flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 shadow-md transition-all duration-500 delay-100 ${t?"scale-100 opacity-100":"scale-75 opacity-0"}`,children:a.jsx("i",{className:`${o} text-2xl text-primary-600 dark:text-primary-300`})}),a.jsxs("div",{children:[a.jsx("h2",{className:`text-xl font-bold text-gray-800 dark:text-gray-100 transition-all duration-500 delay-200 ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}`,children:n}),r&&a.jsx("p",{className:`text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 delay-300 ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}`,children:r})]})]})}),a.jsx("div",{className:"flex-1 overflow-y-auto",children:m}),a.jsxs("footer",{className:`p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-t-2 border-gray-200 dark:border-gray-700 flex justify-end gap-3 sticky z-50 -bottom-8 transition-opacity duration-500 delay-500 ${t?"opacity-100":"opacity-0"}`,children:[a.jsx(s,{label:d,severity:"secondary",text:!0,onClick:e}),a.jsx(s,{label:c,icon:"pi pi-check-circle",loading:i,disabled:i||p,onClick:x})]})]}),a.jsx("style",{children:`
                .input-container, .generic-container {
                    position: relative;
                    padding-bottom: 1.5rem;
                }
                .input-container::after {
                    content: '';
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 1px;
                    background-color: #cbd5e1;
                    transition: background-color 0.2s ease;
                }
                .input-container::before {
                    content: '';
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background-color: #3b82f6;
                    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    z-index: 1;
                }
                .input-container:focus-within::before {
                    width: 100%;
                }
                .p-error {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    color: #ef4444;
                }
                .input-container.has-error {
                    animation: shake 0.5s ease-in-out;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-4px); }
                    40%, 80% { transform: translateX(4px); }
                }
            `})]});export{b as B};
