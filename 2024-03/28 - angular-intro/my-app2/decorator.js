var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Calls decorator
function ReadOnlyClass(target) {
}
function log(target, method, descriptor) {
    var oldMethod = descriptor.value;
    descriptor.value = function (value) {
        console.log("call mthod ".concat(method));
        return oldMethod(value);
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.method = function (input) {
        if (input > 3) {
            return 100;
        }
        else {
            return input;
        }
    };
    __decorate([
        log
    ], MyClass.prototype, "method", null);
    return MyClass;
}());
console.log(new MyClass().method(10));
