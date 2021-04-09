import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post{
  @Field(()=>Int)
  @PrimaryKey()
  id!:number
  //date
  @Field()
  @Property({type:'date'})
  createdAt = new Date();
  //update the date 
  @Field()
  @Property({onUpdate:()=>new Date(),type:'date'})
  updatedAt =new Date()
  
  @Field()
  @Property({type:'text'})
  title!: string;

}