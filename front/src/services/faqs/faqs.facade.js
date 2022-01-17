import { FaqsMockApi as Api } from "./faqs.mock-api";
export class FaqsFacade{
    static getList(){
        return Api.getList();
    }
}