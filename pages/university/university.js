Page({
  data: {
    list: [
      {
        id: '1',
        name: '北京大学',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: '2',
        name: '清华大学',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: '3',
        name: '武汉大学',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: '4',
        name: '复旦大学',
        open: false,
        pages: ['navigator']
      }, {
        id: '5',
        name: '浙江大学',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: '6',
        name: '上海交通大学',
        pages: ['map']
      }, {
        id: '7',
        name: '南京大学',
        pages: ['canvas']
      }
      , {
        id: '8',
        name: '中国人民大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '吉林大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '华中科技大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
      , {
        id: '9',
        name: '四川大学',
        pages: ['canvas']
      }
    ]
  },
  kindToggle: function (e) {
    console.log('haha')
    wx.navigateTo({
      url: '../university1/university1',
    })
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

