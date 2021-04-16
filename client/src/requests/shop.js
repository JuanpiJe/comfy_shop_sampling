import axios from 'axios'
import defaults from './default'

const url = 'shop/'

let shopReq = {
    login : function () {
        return axios ({
            ...defaults, 
            method : 'POST',
            url : url + 'login',
            params :{
                
            }
        })
    }
}