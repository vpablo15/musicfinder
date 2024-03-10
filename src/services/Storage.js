import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
    
    static instance = new LocalStorage()

    async saveFav(fav){
        try {
            const favs = await this.getAll()
            await AsyncStorage.setItem('favs', JSON.stringify([...favs, fav]))
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(){
        try {
            const json = await AsyncStorage.getItem('favs');
            if(json == null){
                return []    
            } else {
                const favs = JSON.parse(json)
                return favs
            }
        } catch (error) {
            console.log(error)
        }
    }

    async isFav(id){
        try {
            const favs = await this.getAll()
            const result = favs.find(f => f.trackId == id)
            if(result){ return true } else { return false }
        } catch (error) {
            console.log(error)
        }
    }

    async removeFav(fav){
        try {
            const favs = await this.getAll()
            const filteredFavs = favs.filter(f => f.trackId != fav.trackId)
            await AsyncStorage.setItem('favs', JSON.stringify(filteredFavs))
        } catch (e) {
            console.log(e)
        }
    }

}