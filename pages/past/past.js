// pages/past/past.js
var util = require('../../utils/util.js');
var data = require('../../data/data.js');
var sang = data.sangList;
var ran = data.ranList;
let touchDotX = 0; //X按下时坐标
let touchDotY = 0; //y按下时坐标
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationMain:null,
    animationBack:null,
    date: '',
    sangList: [],
    ranList: [],

    isFront1: true,
    isFront2: true,
    isFront3: true,
    isFront4: true,
    isFront5: true,

    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},
    animationData5: {},

    top1: 140,
    top2: 130,
    top3: 120,
    top4: 110,
    top5: 100,

    width1: 680,
    width2: 640,
    width3: 600,
    width4: 560,
    width5: 520,

    index1: 5,
    index2: 4,
    index3: 3,
    index4: 2,
    index5: 1,

    statusBarHeight: getApp().globalData.statusBarHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var date = util.formatDate(new Date());
    var sangList = this.getRandomSang(5);
    var ranList = this.getRandomRan(5);
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date: date,
      sangList: sangList,
      ranList: ranList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  touchstart1: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend1: function (event) {
    // 手指离开屏幕时记录的坐标
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    // 起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之差
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    // 两点横纵坐标差的绝对值
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    //起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之间的距离
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    // 如果delta超过60px（可以视情况自己微调）,判定为手势触发
    if (delta >= 60) {
      // 如果 |x0-x1|>|y0-y1|,即absX>abxY,判定为左右滑动
      if (absX > absY) {
        // 如更tmX<0，即(离开点的X)-(起始点X)小于0 ，判定为左滑
        if (tmX < 0) {
          console.log("左滑=====");
          // 执行左滑动画
          this.Animation1(-500);
          // 如更tmX>0，即(离开点的X)-(起始点X)大于0 ，判定为右滑
        } else {
          console.log("右滑=====");
          // 执行右滑动画
          this.Animation1(500);
        }
        // 如果 |x0-x1|<|y0-y1|,即absX<abxY,判定为上下滑动
      } else {
        // 如更tmY<0，即(离开点的Y)-(起始点Y)小于0 ，判定为上滑
        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront1: !this.data.isFront1
          });
          // 如更tmY>0，即(离开点的Y)-(起始点Y)大于0 ，判定为下滑
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront1: !this.data.isFront1
          });
        }
      }
    } else {
      console.log("手势未触发=====");
    }

    // 让上一张卡片展现正面（如果之前翻转过的话）
    this.setData({
      isFront5: true,
    });
  },

  /**
   *  卡片2手势
   */
  touchstart2: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;

    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);

  },
  // 移动结束处理动画
  touchend2: function (event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
          console.log("左滑=====");
          this.Animation2(-500);
        } else {
          console.log("右滑=====");
          this.Animation2(500);
        }
      } else {
        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront2: !this.data.isFront2
          });
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront2: !this.data.isFront2
          });
        }

      }
    } else {
      console.log("手势未触发=====");
    }

    this.setData({
      isFront1: true,
    });

  },

  /**
   *  卡片3手势
   */
  touchstart3: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend3: function (event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
          console.log("左滑=====");
          this.Animation3(-500);
        } else {
          console.log("右滑=====");
          this.Animation3(500);
        }
      } else {

        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront3: !this.data.isFront3
          });
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront3: !this.data.isFront3
          });
        }
      }
    } else {
      console.log("手势未触发=====");
    }

    this.setData({
      isFront2: true,
    });

  },
  /**
   *  卡片4手势
   */
  touchstart4: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend4: function (event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
          console.log("左滑=====");
          this.Animation4(-500);
        } else {
          console.log("右滑=====");
          this.Animation4(500);
        }
      } else {

        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront4: !this.data.isFront4
          });
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront4: !this.data.isFront4
          });
        }
      }
    } else {
      console.log("手势未触发=====");
    }

    this.setData({
      isFront3: true,
    });

  },
  /**
   *  卡片5手势
   */
  touchstart5: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend5: function (event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
          console.log("左滑=====");
          this.Animation5(-500);
          this.setData({
            sangList: this.getRandomSang(5),
            ranList: this.getRandomRan(5)
          })
        } else {
          console.log("右滑=====");
          this.Animation5(500);
          this.setData({
            sangList: this.getRandomSang(5),
            ranList: this.getRandomRan(5)
          })
        }
      } else {

        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront5: !this.data.isFront5
          });
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront5: !this.data.isFront5
          });
        }
      }
    } else {
      console.log("手势未触发=====");
    }

    this.setData({
      isFront4: true,
    });

  },

  /**
   * 卡片1:
   * 左滑动右滑动动画
   */
  Animation1: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });
    this.animation = animation;

    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData1: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        top1: 100,
        left1: -260,
        width1: 520,
        index1: 1,

        top2: 140,
        left2: -340,
        width2: 680,
        index2: 5,

        top3: 130,
        left3: -320,
        width3: 640,
        index3: 4,

        top4: 120,
        left4: -300,
        width4: 600,
        index4: 3,

        top5: 110,
        left5: -280,
        width5: 560,
        index5: 2,
      })
    }, 500);
  },

  /**
   * 卡片2:
   * 左滑动右滑动动画
   */
  Animation2: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });

    this.animation = animation;

    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData2: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        top1: 110,
        left1: -280,
        width1: 560,
        index1: 2,

        top2: 100,
        left2: -260,
        width2: 520,
        index2: 1,

        top3: 140,
        left3: -340,
        width3: 680,
        index3: 5,

        top4: 130,
        left4: -320,
        width4: 640,
        index4: 4,

        top5: 120,
        left5: -300,
        width5: 600,
        index5: 3,
      })
    }, 500)
  },

  /**
   * 卡片3:
   * 左滑动右滑动动画
   */
  Animation3: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });

    this.animation = animation;
    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData3: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        top1: 120,
        left1: -300,
        width1: 600,
        index1: 3,

        top2: 110,
        left2: -280,
        width2: 560,
        index2: 2,

        top3: 100,
        left3: -260,
        width3: 520,
        index3: 1,

        top4: 140,
        left4: -340,
        width4: 680,
        index4: 5,

        top5: 130,
        left5: -320,
        width5: 640,
        index5: 4,
      })
    }, 500);
  },
  /**
   * 卡片4:
   * 左滑动右滑动动画
   */
  Animation4: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });

    this.animation = animation;
    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData4: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        top1: 130,
        left1: -320,
        width1: 640,
        index1: 4,

        top2: 120,
        left2: -300,
        width2: 600,
        index2: 3,

        top3: 110,
        left3: -280,
        width3: 560,
        index3: 2,

        top4: 100,
        left4: -260,
        width4: 520,
        index4: 1,

        top5: 140,
        left5: -340,
        width5: 680,
        index5: 5,
      })
    }, 500);
  },
  /**
   * 卡片5:
   * 左滑动右滑动动画
   */
  Animation5: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });

    this.animation = animation;
    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData5: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        top1: 140,
        left1: -340,
        width1: 680,
        index1: 5,

        top2: 130,
        left2: -320,
        width2: 640,
        index2: 4,

        top3: 120,
        left3: -300,
        width3: 600,
        index3: 3,

        top4: 110,
        left4: -280,
        width4: 560,
        index4: 2,

        top5: 100,
        left5: -260,
        width5: 520,
        index5: 1,
      })
    }, 500);
  },
  getRandomSang: function(n){
    var newarr=[], id, len = sang.length;
    for(var i = 0; i < n; i ++){
      id = Math.floor(Math.random()*len);
      newarr.push(sang[id]);
    }
    return newarr;
  },
  getRandomRan: function (n) {
    var newarr = [], id, len = ran.length;
    for (var i = 0; i < n; i++) {
      id = Math.floor(Math.random() * len);
      newarr.push(ran[id]);
    }
    return newarr;
  }
})
