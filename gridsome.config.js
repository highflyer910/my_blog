// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Thea's Blog",
  siteDescription: "About programming and tech stuff",
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
