import axios from "axios";
import {APPCODE} from "./config";

export async function getNewsChannels(){
    var resp =  await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization: `APPCODE ${APPCODE}`,
        }
    })
    return resp.data.showapi_res_body.pagebean.contentlist;
    
}
getNewsChannels();


export async     function getNews(channelId, page=1, limit=10){
    var resp =await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization: `APPCODE ${APPCODE}`,
        },
        params:{
            channelId,
            page,
            maxResult:limit,
            allList:false
        }
    })
    return resp.data.showapi_res_body.pagebean;
    
}
//getNews("5572a109b3cdc86cf39001e0");