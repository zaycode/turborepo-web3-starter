import 'server-only';
import { keys } from './keys';
const config = keys();

let database: any = null;

switch (config.DATABASE_TYPE) {
    case 'neon':
        database = (await import('./adapters/neon')).database();
        break;
    default:
        database = (await import('./adapters/default')).database();
}

export { database };
