// 配置项

const host = 'http://120.77.222.73:89/hivbh'
// const host = 'http://127.0.0.1:8090/api/app.do?'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  api: `${host}/api/app.do?`
}
export default config
