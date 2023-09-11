
export default {
    UPDATEISLOGIN(state, value) {
        console.log('更新islogin', value)
        state.isLogin = value
    },
    UPDATEUSERINFO(state, value) {
        console.log('更新userInfo', value)
        state.userInfo = value
    }
}