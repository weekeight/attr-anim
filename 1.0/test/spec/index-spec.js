KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('attr-anim', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/attr-anim/1.0/']});