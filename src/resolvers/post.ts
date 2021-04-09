import { Post } from "src/entites/Post";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver{
    @Query(()=>[Post])
    post(){
        return 'bye'
    }
}