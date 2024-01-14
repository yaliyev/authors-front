import * as z from "zod";


export const AuthorEditValidationSchema:z.AnyZodObject = z.object({
  name: z.string().min(3,{message:'Required'}),
  birthYear: z.string().regex(/[0-9]+/,'Must be number'),
  genre: z.string().min(1,{message:'Required'}),
  isDead: z.string().min(1,{message:'Required'}),
  gender: z.string().min(1,{message:'Required'}),
});