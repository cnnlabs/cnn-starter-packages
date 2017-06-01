const chalk = require('chalk');
const log = console;

function ascii() {
    const c = chalk.cyan;
    const w = chalk.white;
    const y = chalk.yellow;
    const r = chalk.red;
    const g = chalk.gray;

    log.info(
`
${c(`                    ((((           `)}
${c(`                    {  ${w('\'')}${y('>')}          `)}
${c(`                    / ,/\          `)}
${c(`                   /_/ /           `)}
${g(`╔═════════════════${c('//')}═${y('\"')}════════════════════╗`)}
${g('║')}${r(`             ___ _ __  _ __              `)}${g('║')}
${g('║')}${r(`            / __| '_ \\| '_ \\             `)}${g('║')}
${g('║')}${r(`           | (__| | | | | | |            `)}${g('║')}
${g('║')}${r(`            \\___|_| |_|_| |_|            `)}${g('║')}
${g(`╠═════════════════════════════════════════╣`)}
${g(`║               - BIRDMAN -               ║`)}
${g(`╚═════════════════════════════════════════╝`)}
`
    );
}

module.exports = ascii;
