import { getAllHouseList } from '../../api/apiHelper'

jest.mock('axios', () => ({
    get: jest.fn()
        .mockReturnValueOnce(Promise.resolve({ statusCode: 200, data: {} }))
        .mockReturnValueOnce(Promise.reject({ statusCode: 400, data: {} }))
}))


describe('Api call success', ()=>{
    it('should return status code 200', async ()=>{
        const apiResponse = await getAllHouseList()
        expect(apiResponse.statusCode).toBe(200)
    })
})
describe('Api call fail', ()=>{
    it('should return status code 400', async ()=>{
        const apiResponse = await getAllHouseList()
        expect(apiResponse.statusCode).toBe(400)
    })
})
