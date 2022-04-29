import apiRoutes from "./apiroutes.json"

type successFunction = (result: any) => void
type failledFunction = () => void
const request = async (url: string, success: successFunction, fail: failledFunction) => {

    const call = (func: () => void) => {
        try {
            func()
        }
        catch (error) {
            console.log(error)
        }
    }

    try {
        const req = await fetch(url)
        const response = await req.json()
        if (req.ok) {
            call(() => success(response))
        }
        else {
            call(() => fail())
        }
    } catch (error) {
        call(() => fail())
    }
}

const getAllCountries = (success: successFunction, fail: failledFunction) => {
    request(apiRoutes.all, success, fail)
}

export { request, getAllCountries }