angular.module("todoApp")
    .component("parent", {
        template: `
                    <div class="row">
                        
                        <div class="col-md-3">
                            <text-comp onupdate="$ctrl.update(val)"></text-comp>
                        </div>
                        
                        <div class="col-md-9">
                            <view-comp todolist="$ctrl.list" oncheck="$ctrl.checkItem(index)" ondelete="$ctrl.deleteItem(index)"></view-comp>
                        </div>
                    
                    </div>
                  `,
        controller: function myCtrl( $localStorage ) {
            let vm = this;

            vm.$onInit = function () {
              console.log("hello!");
              vm.list = $localStorage.list;
              if (! $localStorage.list ) {
                  vm.list = $localStorage.list = [];
              }
            };

            vm.deleteItem = function (index) {
                vm.list.splice(index,1);
            };

            vm.checkItem = function (index) {
                if(vm.list[index].done == false) {
                    vm.list[index].done = true;
                } else {
                    vm.list[index].done = false;
                }
            };

            vm.getObj = function (val) {
                let obj = {};
                obj.name = val;
                obj.done = false;
                return obj;
            };

            vm.update = function (val) {
                console.log("reached in parent with val ",val);
                vm.list.push(vm.getObj(val));
            };
        }
    });