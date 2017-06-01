function Module(pathForModules) {

    const types = [
        {
            label: 'Component',
            value: 'component'
        },
        {
            label: 'Pure Function',
            value: 'pure-function'
        }
    ];

    const prompts = [
        {
            type: 'list',
            name: 'type',
            message: 'Choose type of module to create',
            default: types[0].label,
            choices: types.map((type) => type.label)
        },
        {
            type: 'input',
            name: 'name',
            message: 'What do you want to call it?',
            default: 'My New Module',
            validate: (value) => {
                // TODO: make sure that the file doesnt already exist
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }
    ];

    function actions(data) {
        const type = types.filter(type => data.type === type.label)[0];

        return [
            {
                type: 'add',
                path: `${pathForModules}/{{kebabCase name}}/index.js`,
                templateFile: `./generators/module/${type.value}.js.hbs`,
                abortOnFail: true
            }
        ];
    };

    return {
        description: 'Add a module.',
        prompts,
        actions
    };
}

module.exports = Module;
