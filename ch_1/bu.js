$(document).ready(function () {
      /**
       * Add button click handler
       */
      function onAdd() {
        var $ul, li, $li, $label, $div, value;

        value = $('.js-new-item').val();
        //validate against empty values
        if (value === '') {
          return;
        }
        $ul = $('ul');
        $li = $('<li>').appendTo($ul);
        $div = $('<div>')
          .addClass('checkbox')
          .appendTo($li);
        $label = $('<label>').appendTo($div);
        $('<input>')
          .attr('type', 'checkbox')
          .addClass('item')
          .attr('name', 'list')
          .click(toggleRemoved)
          .appendTo($label);
        $label
          .append(value);
        $('.js-new-item').val('');
      }

      /**
       * Checkbox click handler - toggles class removed on li parent element
       * @param ev
       */
      function toggleRemoved(ev) {
        var $el;

        $el = $(ev.currentTarget);
        $el.closest('li').toggleClass('removed');
      }



      $('.js-add').click(onAdd);
      $('.js-item').click(toggleRemoved);
      $('.js-change-title').keyup(onChangeTitle);

      new Vue({
          el: '#app',
          data: data,
          methods: {
            addItem: function () {
              var text;
              text = this.newItem.trim();
              if (text) {
                this.items.push({
                  text: text,//所以冒号前的text不用加冒号也不会认成变量咯
                  checked: false
                });
                this.newItem = '';
              }
            }

          });
      });

    function onChangeTitle() {
      $('h2').text($('.js-change-title').val());
    }

    var data = {
      items: [{
          text: 'Bananas',
          checked: true
        },
        {
          text: 'Apples',
          checked: false
        }
      ], //
      title: 'My Shopping List',
      newItem: ''
    };