const { password, username } = process.env;

export const connectionString =
  "mongodb+srv://ankit:" +
  password +
  "@cluster0.gxovqf8.mongodb.net/PRODUCTDB?retryWrites=true&w=majority";
