let fs = require("fs");

describe("testing todo app",function () {
   let textbox = element(by.model("$ctrl.text"));
   let submitBtn = element(by.id("submitBtn"));
   let res = element.all(by.repeater("list in $ctrl.todolist"));
   let initval = 0;

   beforeEach(function () {
        browser.get("http://localhost/todoComponent/parent_page.html");
        res.count().then(function (count) {
            initval = count;
        })
   });
   
   it("sends 5 values",function () {
       let arr = ["ankith","kumar","is","writing","this"];
       for(let val in arr) {
           textbox.sendKeys(arr[val]);
           submitBtn.click();
           textbox.clear();
       }
       expect(res.count()).toEqual(initval+5);
   });
   it("clicks the checkbox of all item one by one",function () {
       for(var itemcount=0; itemcount < initval; itemcount++) {
           res.get(itemcount).element(by.id("checkbox")).click()
           expect(res.get(itemcount).getText()).toContain("complete");
       }
   });
   it("deletes the element one by one and checks the count",function () {
       for(var itemcount=0; itemcount < initval; itemcount++) {
           res.get(0).element(by.id('deleteBtn')).click();
           expect(res.count()).toBe(initval-itemcount-1);
       }
   });
   it("sends 5 values",function () {
        let arr = ["ankith","kumar","is","testing","this"];
        for(let val in arr) {
            textbox.sendKeys(arr[val]);
            submitBtn.click();
            textbox.clear();
        }
        expect(res.count()).toEqual(initval+5);
   });
   it("clicks the checkbox of all item one by one to get completed",function () {
        for(var itemcount=0; itemcount < initval; itemcount++) {
            res.get(itemcount).element(by.id("checkbox")).click()
            expect(res.get(itemcount).getText()).toContain("complete");
        }
   });
    it("clicks the checkbox of all item one by one to start again ",function () {
        for(var itemcount=0; itemcount < initval; itemcount++) {
            res.get(itemcount).element(by.id("checkbox")).click()
            expect(res.get(itemcount).getText()).not.toContain("complete");
        }
    });
});