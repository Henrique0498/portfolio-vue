module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/Component.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.scss',
        templateFile: 'templates/styles.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/test.hbs'
      }
    ]
  })
}
