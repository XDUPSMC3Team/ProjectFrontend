# dmall 开发指南

### 指令（npm的scripts）
* dev （即npm run dev）起开发服务
* build 构建
* test 跑单测
* lint 规范化代码
* deploy 部署
* clean 清理本地构建包
* serve 在本地起构建后服务
* refresh 刷新本地依赖(用于清理未进入package.json的依赖)
* theme:init 初始化主题文件
* theme:make 初始构建主题
* theme:build 构建主题
* theme:clean 清空原主题文件
* theme:refresh 清空原主题并初始化主题

### 开始开发

* npm install 安装依赖
* npm run theme:make 构建主题
* npm run dev 开始开发

### 公用方法

#### Vue 实例上

* $_  调用 lodash 工具库
* $info 提示弹框
* $success 成功弹框
* $warn 警告弹框
* $error 错误弹框
* $infoN 提示通知
* $successN 成功通知
* $warnN 警告通知
* $errorN 错误通知

#### 公用 style & class 

**边距使用**

直接可以写到元素的className中

mt5 = margin-top: 5px; (范围是5~50)

同理还有：mb,ml,mr,pt(padding-top),pb,pl,pr;

**字体使用**

字体大小(t1~t6) 颜色(c1~c5) 字体粗细(l1/l2/l3/l4/l5由粗到细) 如: t3 c2 l2 */