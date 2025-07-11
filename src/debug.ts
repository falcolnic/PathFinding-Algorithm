import cfg from './config.json';

function log(message: any) {
    if (cfg.debug) {
        console.log(message);
    }
}

export default log;