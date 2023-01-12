import { generateClasses } from '@formkit/themes';

export default {
    config: {
        classes: generateClasses({
            global: {
                outer: 'mb-5 formkit-disabled:opacity-50',
                help: 'text-xs text-gray-500',
                messages: 'list-none p-0 mt-1 mb-0',
                message: 'text-red-500 mb-1 text-xs',
            },
            text: {
                label: 'block mb-1 ml-4 font-bold text-sm"',
                inner: 'border border-slate-400 rounded-3xl mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-slate-700 placeholder-slate-400',
                help: 'text-xs ml-4 text-slate-500 dark:text-slate-200',
                messages: 'list-none p-0 mt-1 mb-0',
                message: 'text-xs ml-4 text-red-500 dark:text-red-400',
            },
            email: {
                label: 'block mb-1 ml-4 font-bold text-sm',
                help: 'text-xs ml-4 text-slate-500 dark:text-slate-200',
                inner: 'border border-slate-400 rounded-3xl mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-4 border-none text-base text-slate-700 placeholder-slate-400',
                message: 'text-xs ml-4 text-red-500 dark:text-red-400',
            },
            password: {
                outer: 'mb-5',
                label: 'block mb-1 ml-4 font-bold text-sm',
                help: 'text-xs ml-4 text-slate-500 dark:text-slate-200',
                inner: 'border border-slate-400 rounded-3xl mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-4 border-none text-base text-slate-700 placeholder-slate-400',
                message: 'text-xs ml-4 text-red-500 dark:text-red-400',
            },
            submit: {
                input: 'flex justify-center items-center w-full h-full px-4 py-3 border-none text-sm text-white bg-blue-600 rounded-full hover:bg-blue-400 focus:outline-none focus:ring-0 transition duration-200',
            },
        }),
    },
};