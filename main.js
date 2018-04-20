var $buttons = $('#navBar>ul>li')
console.log($buttons)
for(let i=0; i<$buttons.length; i++){
    $($buttons[i]).on('click',function(elm){ 
        let index = $(elm.currentTarget).index()
        let p = index *-800
        $(images).css({
            transform:'translateX('+p+'px)'
        })
    })
}

$(cm).on('click',function(){
    changeColor('blue')
    $(cm).addClass('blue').siblings().removeClass()
})
$(dk).on('click',function(){
    changeColor('fire')
    $(dk).addClass('fire').siblings().removeClass()
})
$(fv).on('click',function(){
    changeColor('purple')
    $(fv).addClass('purple').siblings().removeClass()
})
$(navi).on('click',function(){
    changeColor('red')
    $(navi).addClass('red').siblings().removeClass()
})

let n=1
setInterval(()=>{
    $($buttons[n%4]).click()
    console.log(n)
    n++
},2000)

function changeColor(x){
    $(body).removeClass().addClass(x)
    $(ul).removeClass().addClass(x)
    $(bigwindow).removeClass().addClass('bigwindow '+x);
}