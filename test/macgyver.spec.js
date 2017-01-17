describe('macgyver', function () {
    it('is a function', function () {
        expect(typeof macgyver).to.eql('function');
    });
});

describe('macgyver(an array)', function () {
    it('returns an array which prototype is pristine', function () {
        function noop(){}
        Array.prototype.map = noop;
        var arr = macgyver([1,2,3]);
        expect(Array.isArray(arr), 'returns an array').to.be.true;
        expect((/\[native code\]/i).test(arr.map.toString()), 'returns an array with a pristine prototype').to.be.true;
        expect(([]).map === noop, 'existing prototype is untouched').to.be.true;
    });
});

describe('macgyver(anything else)', function () {
    it('returns the thing', function () {
        var thing = {};
        expect(macgyver(thing)).to.eql(thing);
    });
});
