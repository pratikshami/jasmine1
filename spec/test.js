var add1=require('/home/pratiksha/project/jasmineapp/functions.js')

describe("add testsuit",function()
{
it('add',function()
{
var result=add1.add(4,3);
expect(result).toEqual(7);
}
}

