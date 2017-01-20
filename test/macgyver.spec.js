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

describe('macgyver.ductTape()', function () {

    it('imports native Array methods', function () {
        var destWin = {
            Array: {
                prototype: {
                }
            }
        };

        var srcWin = {
            Array: {
                from: 1,
                isArray: 1,
                of: 1,
                prototype: {
                    concat: 1,
                    copyWithin: 1,
                    entries: 1,
                    every: 1,
                    fill: 1,
                    filter: 1,
                    find: 1,
                    findIndex: 1,
                    forEach: 1,
                    includes: 1,
                    indexOf: 1,
                    join: 1,
                    keys: 1,
                    lastIndexOf: 1,
                    map: 1,
                    pop: 1,
                    push: 1,
                    reduce: 1,
                    reduceRight: 1,
                    reverse: 1,
                    shift: 1,
                    slice: 1,
                    some: 1,
                    sort: 1,
                    splice: 1,
                    toLocaleString: 1,
                    toSource: 1,
                    toString: 1,
                    unshift: 1,
                    values: 1
                }
            }
        };

        macgyver.ductTape(destWin, srcWin);
        expect(destWin.Array.from, 'Array.from').to.exist;
        expect(destWin.Array.isArray, 'Array.isArray').to.exist;
        expect(destWin.Array.of, 'Array.of').to.exist;
        expect(destWin.Array.prototype.concat, 'Array.prototype.concat').to.exist;
        expect(destWin.Array.prototype.copyWithin, 'Array.prototype.copyWithin').to.exist;
        expect(destWin.Array.prototype.entries, 'Array.prototype.entries').to.exist;
        expect(destWin.Array.prototype.every, 'Array.prototype.every').to.exist;
        expect(destWin.Array.prototype.fill, 'Array.prototype.fill').to.exist;
        expect(destWin.Array.prototype.filter, 'Array.prototype.filter').to.exist;
        expect(destWin.Array.prototype.find, 'Array.prototype.find').to.exist;
        expect(destWin.Array.prototype.findIndex, 'Array.prototype.findIndex').to.exist;
        expect(destWin.Array.prototype.forEach, 'Array.prototype.forEach').to.exist;
        expect(destWin.Array.prototype.includes, 'Array.prototype.includes').to.exist;
        expect(destWin.Array.prototype.indexOf, 'Array.prototype.indexOf').to.exist;
        expect(destWin.Array.prototype.join, 'Array.prototype.join').to.exist;
        expect(destWin.Array.prototype.keys, 'Array.prototype.keys').to.exist;
        expect(destWin.Array.prototype.lastIndexOf, 'Array.prototype.lastIndexOf').to.exist;
        expect(destWin.Array.prototype.map, 'Array.prototype.map').to.exist;
        expect(destWin.Array.prototype.pop, 'Array.prototype.pop').to.exist;
        expect(destWin.Array.prototype.push, 'Array.prototype.push').to.exist;
        expect(destWin.Array.prototype.reduce, 'Array.prototype.reduce').to.exist;
        expect(destWin.Array.prototype.reduceRight, 'Array.prototype.reduceRight').to.exist;
        expect(destWin.Array.prototype.reverse, 'Array.prototype.reverse').to.exist;
        expect(destWin.Array.prototype.shift, 'Array.prototype.shift').to.exist;
        expect(destWin.Array.prototype.slice, 'Array.prototype.slice').to.exist;
        expect(destWin.Array.prototype.some, 'Array.prototype.some').to.exist;
        expect(destWin.Array.prototype.sort, 'Array.prototype.sort').to.exist;
        expect(destWin.Array.prototype.splice, 'Array.prototype.splice').to.exist;
        expect(destWin.Array.prototype.toLocaleString, 'Array.prototype.toLocaleString').to.exist;
        expect(destWin.Array.prototype.toSource, 'Array.prototype.toSource').to.exist;
        expect(destWin.Array.prototype.toString, 'Array.prototype.toString').to.exist;
        expect(destWin.Array.prototype.unshift, 'Array.prototype.unshift').to.exist;
        expect(destWin.Array.prototype.values, 'Array.prototype.values').to.exist;
    });
});
