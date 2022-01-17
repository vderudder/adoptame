import { PostMockApi as Api } from "./post.mock-api";
import { UserFacade } from "../user/user.facade";
export class PostFacade{
    static getList(){
        return Api.getList();
    }
    
    static getFavoritesList() {
        return Api.getFavoritesList();
    }

    static async addFavorite(postId) {
        const userId = await UserFacade.getCurrentUserId();
        await Api.addFavorite(userId, postId)
    }

    static async removeFavorite(postId) {
        const userId = await UserFacade.getCurrentUserId();
        await Api.removeFavorite(userId, postId)
    }

    static async isFavorite(postId) {
        const userId = await UserFacade.getCurrentUserId();
        return Api.isFavorite(userId, postId)
    }
}