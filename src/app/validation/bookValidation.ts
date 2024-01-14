// name: String,
//     year: Number,
//     coverImg: String,
//     description: String,
//     bookFile: String,
//     authorId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Author'
//     }

import * as z from "zod";


export const BookValidationSchema: z.AnyZodObject = z.object({
  name: z.string().min(1, { message: 'Required' }),
  year: z.string().regex(/[0-9]+/, 'Must be number'),
  coverImg: z.string()
  .regex(/^.*\.(png|jpg|jpeg)$/i,'Invalid file type. Only PNG and JPG and JPEG files are allowed.'),
  description: z.string().min(1, { message: 'Required' }),
  bookFile: z.string()
    .regex(/^.*\.(pdf|txt)$/i,'Invalid file type. Only PDF and TXT files are allowed.')
});