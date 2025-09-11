angular.module('exampleApp', ['ng-sortable'])
.component('dragAndDropExample', {
    template: `<ul ng-sortable="$ctrl.sortableConf" style="display: flex; gap: 1em; flex-direction: column;">
            <li ng-repeat="item in $ctrl.items" style="display: block; width: 100px; height: 50px; font-size: 1rem; outline: 1px solid yellow;">
                <span id={{item}}> {{ item }}</span>
                <button class="drag-handle" aria-labelledby="drag-instructions">&varr;</button>
            </li>
        </ul><span hidden id="drag-instructions">Use the Up and Down arrow keys to move this item in the list</span>`,
  controller: class ExampleAppController {
    constructor() {
      this.items = ['burgers', 'chips', 'hotdog', 'icecream']
      this.sortableConf = {
        handle: '.drag-handle',
        draggable: 'li',
        forceFallback: true,
        onStart: this.onStart,
        onMove: this.onMove,
      }
    }
  },
})
