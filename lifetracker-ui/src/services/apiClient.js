import axios from "axios"


class ApiClient{
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifetracker_token"
    }

    async setToken(token){
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    async request({ endpoint, method = `GET`, data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try{
            const res = await axios({url, method, data, headers})
            return {data: res.data, error: null}
        }catch(error){
            console.error({errorResponse: error.response})
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error)}
        }
    }

    async listActivities(){
        return await this.request({ endpoint: `activity`, method: `GET`})
    }

    async listSleeps(){
        return await this.request({ endpoint: `sleep`, method: `GET`})
    }

    async createSleep(sleep){
        return await this.request({endpoint: `sleep`, method: `POST`, data: sleep})
    }

    async listExercises(){
        return await this.request({ endpoint: `exercise`, method: `GET`})
    }

    async createExercise(exercise){
        return await this.request({endpoint: `exercise`, method: `POST`, data: exercise})
    }

    async listNutritions(){
        // console.log("users", user_id)
        return await this.request({ endpoint: `nutrition`, method: `GET`})
    }

    async createNutrition(nutrition){
        return await this.request({endpoint: `nutrition`, method: `POST`, data: nutrition})
    }

    async fetchUserFromToken(){
        return await this.request({ endpoint: `auth/me`, method: `GET`})
    }

    async loginUser(credentials){
        return await this.request({endpoint: `auth/login`, method: `POST`, data: credentials})
    }

    async signUpUser(credentials){
        return await this.request({endpoint: `auth/register`, method: `POST`, data: credentials})
    }

    async logoutUser(){
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }
}

export default new ApiClient("http://localhost:3001")