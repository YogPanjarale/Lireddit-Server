import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import path from 'path'
export default {
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  entities: [Post],
  user: "postgres",
  password: "yog",
  migrations: {
    path: path.join(__dirname, "./migrations"), 
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
