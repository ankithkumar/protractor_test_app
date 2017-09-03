angular.module("todoApp")
    .component("viewComp", {
        bindings: {
          todolist: '<',
          oncheck: '&',
          ondelete: '&'
        },
        template: `
                    <div class="row text-center bg-info">
                        <div class="col-sm-12">
                            To Do List:
                        </div>
                    </div>
                    <div class="row" ng-repeat="list in $ctrl.todolist">
                        
                        <div class="col-sm-2">
                            <checkbox index="$index" oncheck="$ctrl.ListChecked(index)"></checkbox>
                        </div>
                        
                        <div class="col-sm-4" ng-class="list.done ? 'strikethrough' : 'null' ">
                             {{ list.name }}
                        </div>
                        
                        <div class="col-sm-4">
                            <div ng-if="list.done" class="text-success">complete</div>
                            <div ng-if="!list.done" class="text-danger">In progress</div>
                        </div>
                        
                        <div class="col-sm-2">
                            <deletebox index="$index" ondelete="$ctrl.del(index)"></deletebox>
                        </div>
                    
                    </div>
                   `,
        controller: function () {
            let vm = this;

            vm.$onInit = function () {
                console.log("in view page",this.todolist);
            };
            vm.ListChecked = function (index) {
                console.log("index in view is ",index);
                vm.oncheck({index: index});
            }
            vm.del = function (index) {
                console.log("index val in view is ",index);
                vm.ondelete({index: index});
            }
        }
    });