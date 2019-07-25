var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("test", ["level"], function (exports_1, context_1) {
    "use strict";
    var level;
    var __moduleName = context_1 && context_1.id;
    function test() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = level("learnrxjs");
            const output = document.getElementById("test");
            if (output && output != null) {
                yield db.put("beep", "boooooep");
                output.textContent = yield db.get("beep");
            }
        });
    }
    exports_1("test", test);
    return {
        setters: [
            function (level_1) {
                level = level_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("index", ["test", "rxjs"], function (exports_2, context_2) {
    "use strict";
    var test_1, rxjs_1;
    var __moduleName = context_2 && context_2.id;
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            // grab button reference, ok
            const button = document.getElementById("myButton");
            if (!button) {
                return;
            }
            // create an observable of button clicks
            const myObservable = rxjs_1.fromEvent(button, "click");
            // for now, let's just log the event on each click
            var clicks = 5;
            const subscription = myObservable.subscribe(event => {
                console.log(event);
                if (--clicks === 0) {
                    subscription.unsubscribe();
                }
            });
        });
    }
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }
        ],
        execute: function () {
            test_1.test();
            main();
        }
    };
});
//# sourceMappingURL=bundle.js.map