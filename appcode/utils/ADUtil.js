import HbDataStorage from "./HbDataStorage";

class ADUtil {
    static AD_HAVE_AD = "ad_have_ad";
    static AD_IMG_URL = "ad_img_url";
    static AD_DURING_TIME = "ad_during_time";
    static AD_WEB_TITEL = "ad_web_title";
    static AD_WEB_URL = "ad_web_url";
    static  AD_FT_START = "ad_firsttime_start";

    static async ftStart(){
        return await HbDataStorage.get(this.AD_FT_START) ;
    }
    static async setFtStart(b) {
        await HbDataStorage.save(this.AD_FT_START, b);
    }

    static async hasAd(){


        return  await HbDataStorage.get(this.AD_HAVE_AD) ;
    }
    static setHasAd(b){
        HbDataStorage.save(this.AD_HAVE_AD,b);
    }

    static async getAdDuringTime(){
        return  await HbDataStorage.get(this.AD_DURING_TIME);
    }

    static async getAdWebTitle(){
        return  await HbDataStorage.get(this.AD_WEB_TITEL);
    }

    static async getAdWebUrl(){
        return  await HbDataStorage.get(this.AD_WEB_URL);
    }
    static async getAdUrlImg(){
        return  await HbDataStorage.get(this.AD_IMG_URL);
    }
    static setAdUrlImg(v){
        HbDataStorage.save(this.AD_IMG_URL,v);
    }

    static setAdDuringTime(v){
        HbDataStorage.save(this.AD_DURING_TIME,v);
    }

    static setAdWebTitle(v){
        HbDataStorage.save(this.AD_WEB_TITEL,v);
    }

    static setAdWebUrl(v){
        HbDataStorage.save(this.AD_WEB_URL,v);
    }




}

export default ADUtil;
