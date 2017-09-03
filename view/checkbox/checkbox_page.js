angular.module("todoApp")
    .component("checkbox", {
        template: `
                    <input type="checkbox" id="checkbox" ng-click="$ctrl.checked()"/>
                  `,
        bindings: {
            index: '<',
            oncheck: '&'
        },
        controller: function () {
            let vm = this;
            vm.$onInit = function () {
                console.log("in checkbox component");
            };

            vm.checked = function () {
                console.log("checked ",vm.index);
                vm.oncheck({index: vm.index});
            };
        }
    });