// import { Page } from "@playwright/test";

export class RequestPage {

    static async openProject(url: string, auth: object, request: any) {
        const response = await request.get(url, {
            headers: auth
        })
        console.log(response)
        // const responseBody = JSON.parse(await response.text())
        // return responseBody
    }

    static async createWorker(url: string, auth: object, data: object, request: any){
        const response = await request.post(url, {
            headers: auth,
            data: data
        })
        const responseBody = JSON.parse(await response.text())
        return responseBody
    }

    static async updateWorker(url: string, auth: object, data: object, request: any){
        const response = await request.put(url, {
            headers: auth,
            data: data
        })
        const responseBody = JSON.parse(await response.text())
        return responseBody
    }
}

