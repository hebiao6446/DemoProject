import AsyncStorage from '@react-native-community/async-storage';

class HbDataStorage {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    static async get(key) {
        // const value = ;
        return await AsyncStorage.getItem(key);
    }
    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
    static async save(key, value) {
        try {
            await  AsyncStorage.setItem(key, value.toString());
        } catch (e) {

        }
    }

}
export default HbDataStorage;
