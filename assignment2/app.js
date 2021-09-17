// (function(){
//   'use strict';
//   var app = angular.module("shoppingList",[]);
//   app.controller("toBuyController", toBuyController)
//      .controller("boughtController",boughtController)
//      .provider("ShoppingList", ShoppingListProvider)
//      .config(Config);
//   Config.$inject = ['ShoppingListProvider'];
//
//   function Config(ShoppingListProvider) {
//     ShoppingListProvider.item = [
//       {
//         name : "cookies",
//         quantity: 10
//       },
//       {
//         name : "coke",
//         quantity: 5
//       },
//       {
//         name : "bottle water",
//         quantity: 1
//       },
//       {
//         name : "pizza",
//         quantity: 2
//       },
//       {
//         name : "chicken",
//         quantity: 3
//       }
//     ];
//   }
//   //singleton pattern
//   toBuyController.$inject = ['ShoppingList'];
//   function toBuyController(ShoppingList) {
//       var list = this;
//       var shopping = ShoppingList;
//       list.toList = shopping.getToBuyList();
//       list.removeItem = (index) => {
//         shopping.removeItem(index);
//         list.empty = shopping.checkToBuyEmpty();
//       };
//   }
//
//   boughtController.$inject = ['ShoppingList']
//   function boughtController(ShoppingList) {
//     var boughtList = this;
//     boughtList.getList = ShoppingList.getBoughList();
//   }
//
//   function ShoppingListService(itemList) {
//     var service = this;
//     var toBuyList = itemList;
//     var removeList = [];
//
//     service.getToBuyList = () => {
//       return toBuyList;
//     };
//     service.removeItem = (index) => {
//       let removed = toBuyList.splice(index, 1)[0];
//       removeList.push(removed);
//     };
//     service.getBoughList = () => {
//       return removeList;
//     };
//     service.checkToBuyEmpty = () => {
//       return toBuyList.length === 0;
//     };
//
//   }
//
//   function ShoppingListProvider() {
//     var provider = this;
//     provider.item = [];
//     provider.$get = function() {
//       var shoppingList = new ShoppingListService(provider.item);
//       return shoppingList;
//     }
//   }
// })()
!function(){"use strict";function t(t){t.item=[{name:"cookies",quantity:10},{name:"coke",quantity:5},{name:"bottle water",quantity:1},{name:"pizza",quantity:2},{name:"chicken",quantity:3}]}function i(t){var i=this,e=t;i.toList=e.getToBuyList(),i.removeItem=(t=>{e.removeItem(t),i.empty=e.checkToBuyEmpty()})}function e(t){this.getList=t.getBoughList()}function n(t){var i=t,e=[];this.getToBuyList=(()=>i),this.removeItem=(t=>{let n=i.splice(t,1)[0];e.push(n)}),this.getBoughList=(()=>e),this.checkToBuyEmpty=(()=>0===i.length)}angular.module("shoppingList",[]).controller("toBuyController",i).controller("boughtController",e).provider("ShoppingList",function(){var t=this;t.item=[],t.$get=function(){var i=new n(t.item);return i}}).config(t),t.$inject=["ShoppingListProvider"],i.$inject=["ShoppingList"],e.$inject=["ShoppingList"]}();
