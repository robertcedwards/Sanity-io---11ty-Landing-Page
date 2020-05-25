export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecc036ec16d84faee50dcee',
                  title: 'Sanity Studio',
                  name: 'Sanity-io---11ty-Landing-Page-studio',
                  apiId: '18bb7b1b-c873-4fe9-a882-18d614812613'
                },
                {
                  buildHookId: '5ecc036ec945663ffc5a22c0',
                  title: 'Blog Website',
                  name: 'Sanity-io---11ty-Landing-Page',
                  apiId: '9916c7ed-ccc9-4a3f-bf20-568288a17ad7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertcedwards/Sanity-io---11ty-Landing-Page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Sanity-io---11ty-Landing-Page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
