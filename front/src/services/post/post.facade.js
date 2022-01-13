import { PostMockApi as Api } from "./post.mock-api";
export class PostFacade{
    static getList(){
        return Api.getList();
    }
}