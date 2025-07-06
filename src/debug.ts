import cfg from './config';

function log(message: any) {
    if (cfg.debug) {
        console.log(message);
    }
}

export default log;