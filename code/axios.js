import axios from 'axios'

// get 요청 보내는 함수1
const login = (uid, password) => {
    return axios.get('HTTP endpoint you want to use like ./login.aspx', {
        params: {
            'uid': uid,
            'password': password
        }
    })
}

// get 요청 보내는 함수2
const isFinished = uid => {
    return axios.get('HTTP endpoint you want to use like ./finish.aspx', {
        params: {
            'uid': uid
        }
    })
}

// 결과 검증하는 함수
const isPossible = (len, cnt) => {
    // ...
}

// 결과값으로 뭔가 작업 하는 함수
const doSomething = ({name, birth}) => {
    // ...
}

// multiple requests 보내기
axios.all([login(uid, password), isFinished(uid)]) // axios.all로 여러 개의 request를 보내고
    .then(axios.spread((loginResp, isFinishedResp) => { // response를 spread로 받는다
        if (!isPossible(loginResp.data.length, isFinishedResp.data.CNT)) return false
        doSomething({
            name: loginResp.data.name,
            birth: loginResp.data.birth
        })
    })).catch((error) => {
        console.error(error)
    })