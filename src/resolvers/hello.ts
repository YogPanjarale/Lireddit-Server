import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver{
    @Query()
    post(){
        return 'Hello world'
    }
}