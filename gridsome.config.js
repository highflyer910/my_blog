// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Teona's Blog",
  siteDescription: "About programming and techie stuff",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md'
      }
    }
  ],
  transformers: {
    remark: {}
  },
  templates: {
    BlogPost: '/blog/:title'
  }
};
