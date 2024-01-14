import * as z from "zod";
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const AuthorValidationSchema:z.AnyZodObject = z.object({
  name: z.string().min(3,{message:'Required and minimum 3 symbols'}),
  birthYear: z.string().regex(/[0-9]+/,'Must be number'),
  genre: z.string().min(1,{message:'Required'}),
  isDead: z.string().min(1,{message:'Required'}),
  gender: z.string().min(1,{message:'Required'}),
  authorImage: z.string().min(1,{message:'File required'})
  // authorImage :  z
  // .any()
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported."
  // )
  

});