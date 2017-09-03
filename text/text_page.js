angular.module("todoApp")
    .component("textComp", {
        bindings: {
            onupdate: '&'
        },
        template: `
                     <form ng-submit="$ctrl.update($ctrl.text)">
                        <input type="text" ng-model="$ctrl.text"/>
                        <button id="submitBtn">Submit</button>
                    </form>
                  `,
        controller: function () {
            let vm = this;

            vm.$onInit = function () {
                console.log("in text page");
            };

            vm.update = function (val) {
                console.log(val);
                vm.onupdate({val: val});
            }
        }
    });