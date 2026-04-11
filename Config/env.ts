import * as dotenv from 'dotenv';
import path from 'path';

if(!process.env.__DOTENV_LOADED)
{
 dotenv.config({
   path: path.resolve(process.cwd(), `./config/.env.${process.env.ENV || "dev"}`),
   override: true,
   debug: true
 });
  process.env.__DOTENV_LOADED = "true";
}
export const ENV ={
    BASE_URL: process.env.BASE_URL!,
    USER_NAME : process.env.USER_NAME!,
    PASSWORD : process.env.PASSWORD!
}
Object.entries(ENV).forEach(([key, value]) => {
    if(!value)
    {
        throw new Error("Missing env variable"+key)
    }
})