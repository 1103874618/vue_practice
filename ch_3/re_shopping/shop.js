var data = {
      items: [{
        text: "Bananas",
        checked: true
      }, {
        text: "Apples",
        checked: false
      }],
      title: "My Shopping List",
    };


    

    Vue.component('add-item-component', {
      template: "#add-item-template",
      data: function () {
        return {
          newItem: ''
        }
      },
      methods: {
        addItem: function () {
          var text;
          text = this.newItem.trim();
          if (text) {
            this.$emit('add', this.newItem);
            this.newItem = '';
          }
        }
      }
    });


    Vue.component('item-component', {
      template: "#item-template",
      props: ['item'] 
      //另外，不要忘记传递父应用程序属性的props属性
    });

    Vue.component('items-component', {
      template: "#items-template",
      props: ['items']

    });

    Vue.component("change-title-component", {
      template: "#change-title-template",
      props: ['value'],
      methons: {
        onInput: function (event) {
          this.$emit('input', event.target.value)
          //emit是用来触发事件的,$emit相当于jq中的trigger事件，只不过是用子组件来触发父组件的方法。所以里面的this是父组件。(如果有父组件的话)
        }
      },
    });

    new Vue({
      el: '#app',
      data: data,
      methods: {
        // 这个方法应该检查new item属性，如果它包含文本，应该会发出一个事件。让我们称此事件为add。
        // 所以它只接收已经处理过的文本，并将其推入项目数组中
        addItem: function (text) {
          this.items.push({
            text: text,
            checked: false
          });
        },
        
      },
    });
