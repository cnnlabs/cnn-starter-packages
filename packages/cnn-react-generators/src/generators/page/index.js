const fs = require('fs');
const path = require('path');

function Page(pathForPages, pathForRoutesFile) {

    function trimTemplateFile(template) {
        // Loads the template file and trims the whitespace and then returns the content as a string.
        return fs.readFileSync(path.join(__dirname, `./${template}`), 'utf8').replace(/\s*$/, '');
    }

    const prompts = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this route?',
            default: 'Hello World',
            validate: (value) => {
                // TODO: make sure that the file doesnt already exist
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        },
        {
            type: 'confirm',
            name: 'route',
            message: 'Add a route for this page?'
        },
        {
            type: 'input',
            name: 'path',
            message: 'What is the path for this route?',
            default: '/hello-world',
            when: (answers) => (answers.route),
            validate: (value) => {
                // TODO: make sure that the file doesnt already exist
                if ((/.+/).test(value)) { return true; }
                return 'path is required';
            }
        }
    ];

    function actions(data) {
        const answers = [
            {
                type: 'add',
                path: `${pathForPages}/{{kebabCase name}}/index.js`,
                templateFile: './generators/page/page.js.hbs'
            }
        ];

        const addRoute = {
            type: 'modify',
            path: pathForRoutesFile,
            // regex match for:
            // - new line
            // - end bracket (]) with semicolon (;)
            // - white space followed by two slashes ( //)
            // - whitespace followed by 'end of routes'
            pattern: /(\n];\s\/\/\send of routes)/g,
            template: trimTemplateFile('route.js.hbs')
        };

        if (data.route) {
            answers.push(addRoute);
        }

        return answers;
    };

    return {
        description: 'Add a page.',
        prompts,
        actions
    };
}

module.exports = Page;
