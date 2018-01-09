"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MinLengthDirective = MinLengthDirective_1 = (function () {
    function MinLengthDirective() {
    }
    MinLengthDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= this.minlength ? null : { "minlength": true };
    };
    return MinLengthDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MinLengthDirective.prototype, "minlength", void 0);
MinLengthDirective = MinLengthDirective_1 = __decorate([
    core_1.Directive({
        selector: '[minlength]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: MinLengthDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], MinLengthDirective);
exports.MinLengthDirective = MinLengthDirective;
var IsEmailDirective = IsEmailDirective_1 = (function () {
    function IsEmailDirective() {
    }
    IsEmailDirective.prototype.validate = function (control) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var valid = emailRegEx.test(control.value);
        return control.value < 1 || valid ? null : { 'email': true };
    };
    return IsEmailDirective;
}());
IsEmailDirective = IsEmailDirective_1 = __decorate([
    core_1.Directive({
        selector: '[email]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: IsEmailDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], IsEmailDirective);
exports.IsEmailDirective = IsEmailDirective;
var MinLengthDirective_1, IsEmailDirective_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELHdDQUEyRTtBQU0zRSxJQUFhLGtCQUFrQjtJQUkzQjtJQUFzQixDQUFDO0lBRWhCLHFDQUFRLEdBQWYsVUFBZ0IsT0FBd0I7UUFDcEMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNuRyxDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVJZO0lBQVIsWUFBSyxFQUFFOztxREFBbUI7QUFGbEIsa0JBQWtCO0lBSjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDdEYsQ0FBQzs7R0FDVyxrQkFBa0IsQ0FVOUI7QUFWWSxnREFBa0I7QUFnQi9CLElBQWEsZ0JBQWdCO0lBRXpCO0lBQXNCLENBQUM7SUFFaEIsbUNBQVEsR0FBZixVQUFnQixPQUF3QjtRQUNwQyxJQUFJLFVBQVUsR0FBRyx5SkFBeUosQ0FBQztRQUMzSyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGdCQUFnQjtJQUo1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQWEsRUFBRSxXQUFXLEVBQUUsa0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0tBQ3BGLENBQUM7O0dBQ1csZ0JBQWdCLENBVTVCO0FBVlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21pbmxlbmd0aF0nLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWluTGVuZ3RoRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZX1dXG59KVxuZXhwb3J0IGNsYXNzIE1pbkxlbmd0aERpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBASW5wdXQoKSBtaW5sZW5ndGg6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgICAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgY29udHJvbC52YWx1ZS5sZW5ndGggPj0gdGhpcy5taW5sZW5ndGggPyBudWxsIDogeyBcIm1pbmxlbmd0aFwiOiB0cnVlIH07XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2VtYWlsXScsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBJc0VtYWlsRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZX1dXG59KVxuZXhwb3J0IGNsYXNzIElzRW1haWxEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgICAgIGxldCBlbWFpbFJlZ0V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xuICAgICAgICBsZXQgdmFsaWQgPSBlbWFpbFJlZ0V4LnRlc3QoY29udHJvbC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBjb250cm9sLnZhbHVlIDwgMSB8fCB2YWxpZCA/IG51bGwgOiB7J2VtYWlsJzogdHJ1ZX07XG4gICAgfVxuXG59XG4iXX0=