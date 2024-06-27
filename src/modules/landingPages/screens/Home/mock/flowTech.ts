import type { Edge } from '@vue-flow/core'
import type { InFlowTechItemDefault } from '~/components/FlowTechnologyItemDefault/types'
import type { InFlowTechItemMain } from '~/components/FlowTechnologyItemMain/types'

export const flowTechNodes: (InFlowTechItemDefault | InFlowTechItemMain)[] = [
  {
    id: 'react',
    type: 'main',
    data: {
      title: 'React',
      icon: {
        key: 'logos:react',
        color: ''
      },
      description: 'Biblioteca para interfaces.',
      background:
        'bg-gradient-to-r from-cyan-500 to-violet-500 before:bg-gradient-to-r before:from-cyan-500 before:to-violet-500',
      iconBorderColor: '',
      buttonLeftColor: 'text-cyan-500',
      buttonRightColor: 'text-blue-500'
    },
    position: { x: -225, y: -100 }
  },
  {
    id: 'vue',
    type: 'main',
    data: {
      title: 'Vue',
      icon: {
        key: 'logos:vue',
        color: 'text-orange-500'
      },
      description: '',
      background:
        'bg-gradient-to-r from-emerald-300 to-sky-700 before:bg-gradient-to-r before:from-emerald-300 before:to-sky-700',
      iconBorderColor: '',
      buttonLeftColor: 'text-emerald-500',
      buttonRightColor: 'text-sky-700'
    },
    position: { x: 220, y: -100 }
  },
  {
    id: 'html',
    type: 'item',
    data: {
      title: 'HTML',
      icon: {
        key: 'simple-icons:html5',
        color: 'text-orange-500'
      },
      background: 'bg-gradient-to-r from-orange-300 to-orange-500',
      iconBorderColor: 'border-orange-500',
      buttonLeftColor: 'text-orange-300',
      buttonRightColor: 'text-orange-500'
    },
    position: { x: 50, y: 200 }
  },
  {
    id: 'css',
    type: 'item',
    data: {
      title: 'CSS',
      icon: {
        key: 'simple-icons:css3',
        color: 'text-blue-500'
      },
      background: 'bg-gradient-to-r from-blue-300 to-blue-500',
      iconBorderColor: 'border-blue-500',
      buttonLeftColor: 'text-blue-300',
      buttonRightColor: 'text-blue-500'
    },
    position: { x: -50, y: 294 }
  },
  {
    id: 'styled-components',
    type: 'item',
    data: {
      title: 'Styled-Components',
      icon: {
        key: 'simple-icons:styledcomponents',
        color: 'text-pink-500'
      },
      background: 'bg-gradient-to-r from-pink-500 to-yellow-300',
      iconBorderColor: 'border-pink-500',
      buttonLeftColor: 'text-pink-500',
      buttonRightColor: 'text-yellow-500'
    },
    position: { x: -500, y: 200 }
  },
  {
    id: 'sass',
    type: 'item',
    data: {
      title: 'Sass',
      icon: { key: 'simple-icons:sass', color: 'text-pink-500' },
      background: 'bg-gradient-to-r from-pink-300 to-pink-500',
      iconBorderColor: 'border-pink-500',
      buttonLeftColor: 'text-pink-300',
      buttonRightColor: 'text-pink-500'
    },
    position: { x: -520, y: 300 }
  },
  {
    id: 'tailwindcss',
    type: 'item',
    data: {
      title: 'Tailwind CSS',
      icon: {
        key: 'simple-icons:tailwindcss',

        color: 'text-teal-500'
      },
      background: 'bg-gradient-to-r from-sky-500 to-teal-500',
      iconBorderColor: 'border-teal-500',
      buttonLeftColor: 'text-sky-500',
      buttonRightColor: 'text-teal-500'
    },
    position: { x: 400, y: 300 }
  },
  {
    id: 'bootstrap',
    type: 'item',
    data: {
      title: 'Bootstrap',
      icon: { key: 'simple-icons:bootstrap', color: 'text-violet-500' },
      background: 'bg-gradient-to-r from-violet-500 to-purple-500',
      iconBorderColor: 'border-purple-500',
      buttonLeftColor: 'text-violet-500',
      buttonRightColor: 'text-purple-500'
    },
    position: { x: 400, y: 420 }
  },
  {
    id: 'js',
    type: 'item',
    data: {
      title: 'JavaScript',
      icon: { key: 'simple-icons:javascript', color: 'text-yellow-500' },
      background: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
      iconBorderColor: 'border-yellow-500',
      buttonLeftColor: 'text-yellow-300',
      buttonRightColor: 'text-yellow-500'
    },
    position: { x: -50, y: -200 }
  },
  {
    id: 'ts',
    type: 'item',
    data: {
      title: 'TypeScript',
      icon: { key: 'simple-icons:typescript', color: 'text-blue-500' },
      background: 'bg-gradient-to-r from-blue-300 to-blue-500',
      iconBorderColor: 'border-blue-500',
      buttonLeftColor: 'text-blue-300',
      buttonRightColor: 'text-blue-500'
    },
    position: { x: 50, y: -300 }
  },
  {
    id: 'axios',
    type: 'item',
    data: {
      title: 'Axios',
      icon: {
        key: 'simple-icons:axios',

        color: 'text-purple-500'
      },
      background: 'bg-gradient-to-r from-purple-400 to-purple-600',
      iconBorderColor: 'border-purple-600',
      buttonLeftColor: 'text-purple-400',
      buttonRightColor: 'text-purple-600'
    },
    position: { x: 340, y: -300 }
  },
  {
    id: 'tanStack',
    type: 'item',
    data: {
      title: 'TanStack',
      image: {
        src: '/images/tanstack-logo.png',
        alt: 'Logo TanStack'
      },
      background: 'bg-gradient-to-r from-rose-500 to-yellow-500',
      iconBorderColor: 'border-rose-500',
      buttonLeftColor: 'text-rose-500',
      buttonRightColor: 'text-yellow-500'
    },
    position: { x: -80, y: -400 }
  },
  {
    id: 'apollo',
    type: 'item',
    data: {
      title: 'Apollo Graphql ',
      icon: {
        key: 'simple-icons:apollographql',
        color: 'text-gray-700'
      },
      background: 'bg-gradient-to-r from-gray-500 to-gray-700',
      iconBorderColor: 'border-gray-600',
      buttonLeftColor: 'text-gray-500',
      buttonRightColor: 'text-gray-700'
    },
    position: { x: 200, y: -400 }
  },
  {
    id: 'graphql',
    type: 'item',
    data: {
      title: 'Graphql',
      icon: {
        key: 'simple-icons:graphql',
        color: 'text-pink-500'
      },
      background: 'bg-gradient-to-r from-pink-300 to-pink-500',
      iconBorderColor: 'border-pink-500',
      buttonLeftColor: 'text-pink-300',
      buttonRightColor: 'text-pink-500'
    },
    position: { x: 100, y: -520 }
  },
  {
    id: 'reactQuery',
    type: 'item',
    data: {
      title: 'React Query',
      icon: {
        key: 'simple-icons:reactquery',
        color: 'text-rose-500'
      },
      background: 'bg-gradient-to-r from-rose-500 to-slate-800',
      iconBorderColor: 'border-rose-500',
      buttonLeftColor: 'text-rose-500',
      buttonRightColor: 'text-slate-800'
    },
    position: { x: -465, y: -400 }
  },
  {
    id: 'redux',
    type: 'item',
    data: {
      title: 'Redux',
      icon: { key: 'simple-icons:redux', color: 'text-purple-500' },
      background: 'bg-gradient-to-r from-purple-300 to-purple-500',
      iconBorderColor: 'border-purple-500',
      buttonLeftColor: 'text-purple-300',
      buttonRightColor: 'text-purple-500'
    },
    position: { x: -465, y: -120 }
  },
  {
    id: 'reactRouter',
    type: 'item',
    data: {
      title: 'React Router',
      icon: { key: 'simple-icons:reactrouter', color: 'text-red-500' },
      background: 'bg-gradient-to-r from-red-500 to-red-700',
      iconBorderColor: 'border-red-500',
      buttonLeftColor: 'text-red-500',
      buttonRightColor: 'text-red-700'
    },
    position: { x: -465, y: -240 }
  },
  {
    id: 'nextJS',
    type: 'item',
    data: {
      title: 'NextJS',
      icon: { key: 'simple-icons:nextdotjs', color: 'text-black' },
      background: 'bg-gradient-to-r from-blue-500 to-gray-500',
      iconBorderColor: 'border-blue-500',
      buttonLeftColor: 'text-blue-500',
      buttonRightColor: 'text-gray-500'
    },
    position: { x: -465, y: -14 }
  },
  {
    id: 'nextUi',
    type: 'item',
    data: {
      title: 'NextUi',
      icon: {
        color: 'text-black',
        key: 'simple-icons:nextui'
      },
      background: 'bg-gradient-to-r from-blue-500 to-gray-500',
      iconBorderColor: 'border-blue-500',
      buttonLeftColor: 'text-blue-500',
      buttonRightColor: 'text-gray-500'
    },
    position: { x: -700, y: -14 }
  },
  {
    id: 'mui',
    type: 'item',
    data: {
      title: 'Mui',
      icon: {
        color: 'text-blue-500',
        key: 'simple-icons:mui'
      },
      background: 'bg-gradient-to-r from-blue-500 to-blue-800',
      iconBorderColor: 'border-blue-600',
      buttonLeftColor: 'text-blue-500',
      buttonRightColor: 'text-blue-800'
    },
    position: { x: -700, y: -120 }
  },
  {
    id: 'swr',
    type: 'item',
    data: {
      title: 'SWR',
      icon: {
        color: 'text-black',
        key: 'simple-icons:swr'
      },
      background: 'bg-gradient-to-r from-blue-500 to-gray-500',
      iconBorderColor: 'border-blue-600',
      buttonLeftColor: 'text-blue-500',
      buttonRightColor: 'text-gray-500'
    },
    position: { x: -700, y: 100 }
  },
  {
    id: 'nuxtJs',
    type: 'item',
    data: {
      title: 'Nuxt',
      icon: {
        color: 'text-emerald-500',
        key: 'simple-icons:nuxtdotjs'
      },
      background: 'bg-gradient-to-r from-emerald-500 to-emerald-800',
      iconBorderColor: 'border-emerald-600',
      buttonLeftColor: 'text-emerald-500',
      buttonRightColor: 'text-emerald-800'
    },
    position: { x: 480, y: -14 }
  },
  {
    id: 'nuxtUi',
    type: 'item',
    data: {
      title: 'NuxtUi',
      icon: {
        color: 'text-emerald-500',
        key: 'simple-icons:nuxtdotjs'
      },
      background: 'bg-gradient-to-r from-emerald-500 to-emerald-800',
      iconBorderColor: 'border-emerald-600',
      buttonLeftColor: 'text-emerald-500',
      buttonRightColor: 'text-emerald-800'
    },
    position: { x: 720, y: -14 }
  },
  {
    id: 'pinia',
    type: 'item',
    data: {
      title: 'Pinia',
      icon: {
        color: '',
        key: 'logos:pinia'
      },
      background: 'bg-gradient-to-r from-yellow-500 to-emerald-200',
      iconBorderColor: 'border-emerald-600',
      buttonLeftColor: 'text-yellow-500',
      buttonRightColor: 'text-emerald-800'
    },
    position: { x: 720, y: -204 }
  }
]

export const flowTechEdges: Edge[] = [
  {
    id: 'htmlToReact',
    source: 'html',
    target: 'react'
  },
  {
    id: 'cssToReact',
    source: 'css',
    target: 'react'
  },
  {
    id: 'cssToHtml',
    source: 'css',
    target: 'html'
  },
  {
    id: 'jsToReact',
    source: 'js',
    target: 'react'
  },
  {
    id: 'sassToReact',
    source: 'sass',
    target: 'react'
  },
  {
    id: 'sassToCss',
    source: 'sass',
    target: 'css'
  },
  {
    id: 'sassToHtml',
    source: 'sass',
    target: 'html'
  },
  {
    id: 'sassToVue',
    source: 'sass',
    target: 'vue'
  },
  {
    id: 'sassToNext',
    source: 'sass',
    target: 'nextJS'
  },
  {
    id: 'styled-componentsToReact',
    source: 'styled-components',
    target: 'react'
  },
  {
    id: 'styled-componentsToCss',
    source: 'styled-components',
    target: 'css'
  },
  {
    id: 'styled-componentsToNext',
    source: 'styled-components',
    target: 'nextJS'
  },
  {
    id: 'tailwindcssToNext',
    source: 'tailwindcss',
    target: 'nextJS'
  },
  {
    id: 'tailwindcssToReact',
    source: 'tailwindcss',
    target: 'react'
  },
  {
    id: 'tailwindcssToHtml',
    source: 'tailwindcss',
    target: 'html'
  },
  {
    id: 'tailwindcssToCss',
    source: 'tailwindcss',
    target: 'css'
  },
  {
    id: 'tailwindcssToVue',
    source: 'tailwindcss',
    target: 'vue'
  },
  {
    id: 'tailwindcssToNuxtJs',
    source: 'tailwindcss',
    target: 'nuxtJs'
  },
  {
    id: 'bootstrapToNext',
    source: 'bootstrap',
    target: 'nextJS'
  },
  {
    id: 'bootstrapToReact',
    source: 'bootstrap',
    target: 'react'
  },
  {
    id: 'bootstrapToHtml',
    source: 'bootstrap',
    target: 'html'
  },
  {
    id: 'bootstrapToCss',
    source: 'bootstrap',
    target: 'css'
  },
  {
    id: 'bootstrapToVue',
    source: 'bootstrap',
    target: 'vue'
  },
  {
    id: 'bootstrapToNuxtJs',
    source: 'bootstrap',
    target: 'nuxtJs'
  },
  {
    id: 'nextToReact',
    source: 'nextJS',
    target: 'react'
  },
  {
    id: 'nextUiToNext',
    source: 'nextUi',
    target: 'nextJS'
  },
  {
    id: 'muiToNext',
    source: 'mui',
    target: 'nextJS'
  },
  {
    id: 'muiToReact',
    source: 'mui',
    target: 'react'
  },
  {
    id: 'swrToNext',
    source: 'swr',
    target: 'nextJS'
  },
  {
    id: 'swrToReact',
    source: 'swr',
    target: 'react'
  },
  {
    id: 'reactRouterToReact',
    source: 'reactRouter',
    target: 'react'
  },
  {
    id: 'reduxToReact',
    source: 'redux',
    target: 'react'
  },
  {
    id: 'graphqlToApollo',
    source: 'apollo',
    target: 'graphql'
  },
  {
    id: 'apoloToTs',
    source: 'ts',
    target: 'apollo'
  },
  {
    id: 'reactQueryToTanstack',
    source: 'reactQuery',
    target: 'tanStack'
  },
  {
    id: 'tanStackToTs',
    source: 'tanStack',
    target: 'ts'
  },
  {
    id: 'axiosToTs',
    source: 'ts',
    target: 'axios'
  },
  {
    id: 'htmlToVue',
    source: 'vue',
    target: 'html'
  },
  {
    id: 'cssToVue',
    source: 'vue',
    target: 'css'
  },
  {
    id: 'jsToVue',
    source: 'vue',
    target: 'js'
  },
  {
    id: 'jsToTs',
    source: 'ts',
    target: 'js'
  },
  {
    id: 'nuxtToVue',
    source: 'vue',
    target: 'nuxtJs'
  },
  {
    id: 'nuxtUiToNuxt',
    source: 'nuxtJs',
    target: 'nuxtUi'
  },
  {
    id: 'piniaToVue',
    source: 'vue',
    target: 'pinia'
  },
  {
    id: 'piniaToNuxt',
    source: 'nuxtJs',
    target: 'pinia'
  }
]
