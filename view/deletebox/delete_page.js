angular.module("todoApp")
    .component("deletebox", {
        template: `
                    <input type="button" id="deleteBtn" value="delete" ng-click="$ctrl.deleted()"/>
                  `,

        bindings: {
            index: '<',
            ondelete: '&'
        },

        controller: function () {
            let vm = this;
            vm.$onInit = function () {
                console.log("in delete component");
            };

            vm.deleted = function () {
                console.log("delete function with value ",vm.index);
                vm.ondelete({index: vm.index});
            };
        }
    });