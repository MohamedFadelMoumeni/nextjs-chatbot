const BACKEND_URL = 'http://localhost:3001'

export const get =  async (path: string, tags?:string[]) => {
    const resp = await fetch(`${BACKEND_URL}${path}`, {
        method: "GET",
        headers: {
           'Content-Type': 'application/json',
        },
        next: {
            tags
        }    
    })
    if(!resp.ok) return false
    const responseJson = await resp.json()
    return responseJson
}

export const post = async (path : string , data: FormData | object) => {
    const isFormData = data instanceof FormData
    const body = isFormData ? data : JSON.stringify(data);
    const resp = await fetch(`${BACKEND_URL}${path}`, {
        method: "POST",
        body : body,
        headers: {
           ...(!isFormData && { 'Content-Type': 'application/json' })

        },
    })
    if(!resp.ok) return false
    const response = await resp.json()
    return response

}