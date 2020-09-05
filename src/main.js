// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function (Vue, { router, head, isClient }) {
	 head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Stylish&display=swap'
  }),
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
