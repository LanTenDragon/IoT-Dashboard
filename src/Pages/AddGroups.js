const m = require('mithril')

const Data = {
  name: '',
  colour: '',
  status: false

}

const AddGroup = {
  view: function () {
    return m('form', {
      class: 'w3-container w3-card-4',
      id: 'AddGroupsForm',
      style: { width: '50%' },
      onsubmit: function (e) {
        e.preventDefault()
        const data = document.getElementById('AddGroupsForm')
        console.log(data[1].value)
        m.request({
          method: 'POST',
          url: 'http://localhost:8080/groups/',
          body: { name: data[0].value, colour: data[1].value }
        })
          .then(function (result) {
            console.log(result)
          })
      }
    },
    [
      m('p',
        [
          m('input', {
            class: 'w3-input',
            type: 'text'
            // oninput: m.withAttrs('value', function (Value) {
            //   Data.name = Value
            //   this.value = Value
            // })
            // oninput: m.withAttrs('value', function (Value) {
            //   console.log(value)
            // }),
            // value: ''
          }),
          m('label',
            'Group Name'
          )
        ]
      ),
      m('select', { class: 'w3-select', name: 'option' },
        [
          m('option', { value: '', disabled: 'disabled', selected: 'selected' },
            'Select Colour'
          ),
          m('option', { value: 'red' },
            'Red'
          ),
          m('option', { value: 'green' },
            'Green'
          ),
          m('option', { value: 'yellow' },
            'Yellow'
          )
        ]
      ),
      m('p',
        [
          m('input', { class: 'w3-input', type: 'file' }),
          m('label',
            'Image'
          )
        ]
      ),
      m('p',
        m('button.button[type=submit]', { class: 'w3-btn w3-blue' },
          'Add'
        )
      )
    ]
    )
  }
}

module.exports = AddGroup
