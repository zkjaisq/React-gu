import classes from '../classes'

describe('classes', () => {
    it('接受一个参数', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受两个参数',()=>{
        const result = classes('a','b')
        expect(result).toEqual('a b')
    })
    it('接收undefined等值的时候',()=>{
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('不接受任何参数',()=>{
        const  result = classes()
        expect(result).toEqual('')
    })
})
