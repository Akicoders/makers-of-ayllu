import{j as e,s as h,e as f,B as l}from"./react-sWiKbk-Z.js";const u=({show:n,onHide:t,title:o="¿Estás seguro?",subtitle:d="",userInitials:a="",userName:s="",userEmail:r="",loading:i=!1,confirmLabel:c="Confirmar",onConfirm:m,warningContent:x,iconContent:p})=>e.jsxs(h,{visible:n,onHide:t,modal:!0,closable:!1,className:"w-full max-w-md mx-4",pt:{root:{className:"border-none p-0 overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-lg animate-fade-in-scale"},mask:{className:"bg-black/50 backdrop-blur-sm"}},children:[i&&e.jsx("div",{className:"absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm",children:e.jsx(f,{strokeWidth:"4",animationDuration:".5s",style:{width:"50px",height:"50px"}})}),e.jsxs("div",{className:"p-6 sm:p-8 text-center",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800/40 dark:to-red-900/40 rounded-full mx-auto flex items-center justify-center mb-5 animate-pop-in shadow-md",children:e.jsx("i",{className:"pi pi-exclamation-triangle text-3xl text-red-500"})}),e.jsx("h3",{className:"text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 animate-fade-in-up",children:o}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 mb-6 animate-fade-in-up",children:d}),(a||s||r)&&e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl flex items-center gap-3 text-left mb-6 shadow-inner animate-fade-in-up",children:[a&&e.jsx("div",{className:"flex-shrink-0 w-11 h-11 bg-slate-300 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-700 dark:text-slate-200",children:a}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-slate-900 dark:text-slate-200 leading-tight",children:s}),e.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 leading-tight",children:r})]})]}),x]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-transparent border-t border-slate-200 dark:border-slate-700",children:[e.jsx(l,{label:"Cancelar",text:!0,onClick:t,className:"rounded-xl font-semibold hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors duration-200"}),e.jsx(l,{onClick:m,severity:"danger",disabled:i,className:"rounded-xl font-semibold relative overflow-hidden group w-full justify-center transition-all duration-200",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[p||e.jsxs("div",{className:"animated-trash-icon",children:[e.jsx("div",{className:"trash-lid"}),e.jsx("div",{className:"trash-can"})]}),e.jsx("span",{children:c})]})})]}),e.jsx("style",{children:`
                @keyframes popIn {
                    0% { transform: scale(0.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeInScale {
                    0% { transform: scale(0.95); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeInUp {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .animate-pop-in { animation: popIn 0.5s cubic-bezier(0.68,-0.55,0.27,1.55) forwards; }
                .animate-fade-in-scale { animation: fadeInScale 0.3s ease-out forwards; }
                .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.5s ease-out forwards; }

                .animated-trash-icon {
                    position: relative;
                    width: 14px;
                    height: 16px;
                    display: inline-block;
                }
                .animated-trash-icon .trash-lid {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: currentColor;
                    border-radius: 1px;
                    transform-origin: 0 50%;
                    transition: transform 0.3s ease-out;
                }
                .animated-trash-icon .trash-lid::before {
                    content: '';
                    position: absolute;
                    width: 6px; height: 1.5px;
                    background: currentColor;
                    top: -2.5px; left: 50%;
                    transform: translateX(-50%);
                    border-radius: 1px;
                }
                .animated-trash-icon .trash-can {
                    position: absolute;
                    bottom: 0; left: 1px; right: 1px;
                    height: 13px;
                    background: currentColor;
                    border-radius: 0 0 2px 2px;
                    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
                }
                .group:hover .animated-trash-icon .trash-lid {
                    transform: rotate(-45deg) translateY(-2px);
                }
            `})]});export{u as M};
