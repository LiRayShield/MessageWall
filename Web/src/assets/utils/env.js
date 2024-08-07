let baseUrl = ''
let routerMode = 'hash'
let avatarUrl = ''
let baseImgPath
if(process.env.NODE_ENV == 'development'){
    baseUrl = 'http://localhost:3000/walls'
    baseImgPath = 'http://localhost:3000'
    avatarUrl = 'http://img.5i21.cn/LightPicture/2022/10/eeaaaa6df26aefe5.jpg'
}else{
    // 此处只需要修改api.5i21.cn为你的后端地址
    baseUrl = 'http://123.56.104.70:3000/walls'
    // 此处只需要修改api.5i21.cn为你的后端地址
    baseImgPath = 'http://123.56.104.70:3000'
    // 此处需要修改为自己的头像地址
    avatarUrl = 'https://api.vvhan.com/api/avatar/recommend'
}
export {
    baseUrl,
    routerMode,
    baseImgPath,
    avatarUrl
}