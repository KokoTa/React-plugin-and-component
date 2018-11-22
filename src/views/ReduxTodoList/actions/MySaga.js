import { put, takeEvery } from 'redux-saga/effects'

// 首先触发 GET_INFO 被 saga 拦截，异步完成后再触发 SHOW_INFO 进行同步操作
function* getInfo(action) {
  const info = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        type: 'SHOW_INFO',
        result: {
          id: 1000,
          text: '我是 saga 异步数据，我的名字是' + action.name,
          completed: false
        }
      })
    }, 1500);
  })
  yield put(info)
}

function* mySaga() {
  yield takeEvery('GET_INFO', getInfo);
}

export default mySaga;