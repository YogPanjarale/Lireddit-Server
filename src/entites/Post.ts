import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
	@Field()
	@PrimaryKey()
	id!: number;
	//date
	@Field(() => String)
	@Property({ type: "date" })
	createdAt = new Date();
	//update the date
	@Field(() => String)
	@Property({ onUpdate: () => new Date(), type: "date" })
	updatedAt = new Date();

	@Field()
	@Property({ type: "text" })
	title!: string;
}
