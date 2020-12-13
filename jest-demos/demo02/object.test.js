test('object test',function(){
    let a = {};
    a['key'] = 'key';
    a['value'] = 'value';
    expect(a).toEqual({key:"key",value:"value"});
})