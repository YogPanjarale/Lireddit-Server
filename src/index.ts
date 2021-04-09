import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/hello";

const main = async () => {
	const orm = await MikroORM.init(microConfig);
	await orm.getMigrator().up();

	const app = express();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [PostResolver],
			validate: false,
		}),
	});

	app.get('/',(_,res)=>res.json("hello world"));

	apolloServer.applyMiddleware({app})

	app.listen(4000, () => {
		console.log("Server started at http://localhost:4000");
		console.log("Apollo Client started at http://localhost:4000/graphql");
	});
};
main().catch((err) => {
	console.log(err);
});
console.log("hello world4");
