import axios from 'axios'
import urlList from '../constant/url'

export async function getAllHouseList() {
    return axios.get(urlList.GET_ALL_HOUSE).then(res => res).catch(err => err)
}