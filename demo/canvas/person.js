/**
 * Created by wuguoyuan on 2016/6/22.
 */
function person(option) {
    this._init(option);
}
person.prototype = {
    _init: function (option) {
        //五个键位
        this.left = option.left,
        this.up = option.up,
        this.right = option.right,
        this.down = option.down,
        this.fireKey = option.fireKey,

        this.width = option.width;//绘制小人图片的宽度
        this.height = option.height;//绘制小人图片的高度
        this.x = option.x;//小人初始化坐标
        this.y = option.y;
        this.imgSrc = option.imgSrc;//小人图片
        this.speed = option.speed;//速度
        this.dirNum = 0;//方向标识，即纵向人物图片切换索引
        this.step = option.step;//步长
        this.stepX = 0;//水平方向已走的路程
        this.stepY = 0;//垂直方向已走的路程
        this.fImg = option.fImg;//子弹图片
    },
    render: function (ctx) {
        var img = new Image();
        var _this = this;
        img.src = this.imgSrc;
        img.onload = function () {
            var index = 0;//是横向人物图片切换索引
            var originX = _this.x;
            var originY = _this.y;
            setInterval(function () {
                ctx.beginPath();
                ctx.clearRect(_this.x, _this.y, _this.width, _this.height);
                _this.x = originX + _this.stepX;
                _this.y = originY + _this.stepY;
                ctx.drawImage(
                    img,
                    _this.width * index,
                    _this.height * _this.dirNum,
                    _this.width,
                    _this.height,
                    _this.x,
                    _this.y,
                    _this.width,
                    _this.height
                );
                index++;
                index %= 4;
            }, 1000 / _this.speed)


        }
        this.anKey(_this.left,_this.up,_this.right,_this.down,_this.fireKey);
    },
    anKey: function (a,b,c,d,f) {
        var _this = this;
        document.addEventListener('keydown',function (e) {
            //对于偶尔出现的人物跑出界，是按键延时，图片尺寸和步长的倍数不等于canvas的尺寸
            var e = e || window.event;
            if (e && (e.keyCode == a)) {
                _this.move(1, 'x', 0)

            }
            if (e && (e.keyCode == b)) {
                _this.move(3, 'y', 0)

            }
            if (e && (e.keyCode == c)) {
                _this.move(2, 'x', 600)

            }
            if (e && (e.keyCode == d)) {
                _this.move(0, 'y', 600)

            }
            if (e && (e.keyCode == f)) {
                _this.fire(_this.fImg);

            }
        })
    },
    //dirNum方向标识，即纵向人物图片切换索引,flag标记是x轴还是y轴的移动，size是边界的位置,tank表示是坦克移动
    move: function (dirNum, flag, size,tank) {
        this.dirNum = dirNum;
        if (dirNum === 1 || dirNum === 3) {
            if (flag === 'x') {
                if (this.x <= size) {
                    console.log(this.x);
                    if(tank =='tank'){
                        dirNum++;
                    }
                    return;
                }
                this.stepX -= this.step;
            }
            if (flag === 'y') {
                if (this.y <= size) {
                    console.log(this.y);
                    return;
                }
                this.stepY -= this.step;
            }

        }
        if (dirNum === 0 || dirNum === 2) {
            if (flag === 'x') {
                if (this.x + this.width >= size) {
                    console.log(this.x + this.width)
                    return;
                }
                this.stepX += this.step;
            }
            if (flag === 'y') {
                if (this.y + this.height >= size) {
                    console.log(this.y + this.height)
                    return;
                }
                this.stepY += this.step;
            }
        }


    },
    fire: function (fImg) {
        var bullet = new Image();
        bullet.src = fImg;
        var _this = this;
        bullet.onload = function () {

            _this.fireMove(bullet, 5);

        }
    },
    fireMove: function (bullet,speed) {
        var bulletX = this.x;
        var bulletY = this.y;
        var _this = this;
        var timer;
        var k = 0;
        var bWidth = bullet.width/4;
        var padiingX = (_this.width-bWidth)/2;//子弹与人物x轴的距离
        var padiingY = (_this.height-bullet.height)/2;//子弹与人物y轴的距离
        if (_this.dirNum === 1) {

            timer = setInterval(function () {
                ctx.clearRect(bulletX - bWidth, bulletY+padiingY, bWidth, bullet.height);
                bulletX -= speed;
                ctx.drawImage(
                    bullet,
                    (bWidth) * k,
                    0,
                    bWidth,
                    bullet.height,
                    bulletX - bWidth,
                    bulletY+padiingY,
                    bWidth,
                    bullet.height
                );
                k++;
                k %= 4;
                if (bulletX - bWidth <= 0) {
                    clearInterval(timer);
                    ctx.clearRect(bulletX - bWidth, bulletY+padiingY, bWidth, bullet.height)
                }


            }, 10)
        }
        if(_this.dirNum ===3){
            timer = setInterval(function () {
                ctx.clearRect(bulletX+padiingX, bulletY-bullet.height, bWidth, bullet.height);
                bulletY -= speed;
                ctx.drawImage(
                    bullet,
                    (bWidth) * k,
                    0,
                    bWidth,
                    bullet.height,
                    bulletX+padiingX,
                    bulletY-bullet.height,
                    bWidth,
                    bullet.height
                );
                k++;
                k %= 4;
                if (bulletY-bullet.height <= 0) {
                    clearInterval(timer);
                    ctx.clearRect(bulletX+padiingX, bulletY-bullet.height, bWidth, bullet.height)
                }


            }, 10)
        }
        if(_this.dirNum ===2){
            timer = setInterval(function () {
                ctx.clearRect(bulletX + _this.width, bulletY+padiingY, bWidth, bullet.height);
                bulletX += speed;
                ctx.drawImage(
                    bullet,
                    (bWidth) * k,
                    0,
                    bWidth,
                    bullet.height,
                    bulletX + _this.width,
                    bulletY+padiingY,
                    bWidth,
                    bullet.height
                );
                k++;
                k %= 4;
                if (bulletX + _this.width+bWidth >= 600) {
                    console.log(bulletX + _this.width+bWidth)
                    clearInterval(timer);
                    ctx.clearRect(bulletX + _this.width, bulletY+padiingY, bWidth, bullet.height)
                }


            }, 10)
        }
        if(_this.dirNum ===0){
            timer = setInterval(function () {
                ctx.clearRect(bulletX+padiingX, bulletY+_this.height, bWidth, bullet.height);
                bulletY += speed;
                ctx.drawImage(
                    bullet,
                    (bWidth) * k,
                    0,
                    bWidth,
                    bullet.height,
                    bulletX+padiingX,
                    bulletY+_this.height,
                    bWidth,
                    bullet.height
                );
                k++;
                k %= 4;
                if (bulletY+_this.height+bullet.height >= 600) {
                    console.log(bulletY + _this.height + bullet.height);
                    clearInterval(timer);
                    ctx.clearRect(bulletX+padiingX, bulletY+_this.height, bWidth, bullet.height)
                }
            }, 10)
        }

    }
}





