var foo = /** @class */ (function () {
    function foo() {
        this._bar = false;
    }
    Object.defineProperty(foo.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        set: function (value) {
            this._bar = value;
        },
        enumerable: true,
        configurable: true
    });
    return foo;
}());
