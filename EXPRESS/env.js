// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT) ;


//import zod
// import {z} from "zod"

// //cerate schema
// const ageSchema = z.number().min(18).max(35).int();
// const userAge = 16;


// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge)

import {z} from "zod"

const portSchema = z.coerce.number().min(2999).max(6000).default(3004);
export const PORT = portSchema.parse(process.env.PORT);