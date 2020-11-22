export default {
  widgets: [
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
                  buildHookId: '5fba7827f6523602b588357a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x3k9kbxz',
                  apiId: 'ed975816-ee14-4143-8803-10ba278d8a1d'
                },
                {
                  buildHookId: '5fba7827ef2923cf25d20637',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yfqumybo',
                  apiId: 'db6c8009-2595-4c4a-9823-e9712d6a4c84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pjcahill/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yfqumybo.netlify.app', category: 'apps'}
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
