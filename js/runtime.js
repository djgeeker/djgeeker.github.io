// 获取当前时间
var now = new Date();

// 创建运行时间和旅行者1号距离的函数
function createTime() {
  now.setTime(now.getTime() + 1000);
  
  // 计算运行时间
  var startDate = new Date("2023/04/08 00:00:00");
  var distance = Math.trunc(234e8 + (now - startDate) / 1000 * 17);
  
  // 将距离转换为天文单位
  var au = (distance / 1496e5).toFixed(6);
  
  // 计算从指定日期开始的天数、小时数、分钟数和秒数
  var targetDate = new Date("2023/04/08 00:00:00");
  var diffInSeconds = (now - targetDate) / 1000;
  var days = Math.floor(diffInSeconds / 86400);
  var hours = Math.floor((diffInSeconds % 86400) / 3600);
  var minutes = Math.floor((diffInSeconds % 3600) / 60);
  var seconds = Math.round(diffInSeconds % 60);
  
  // 格式化小时、分钟和秒
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  // 生成要显示的内容
  var content = hours >= 9 && hours < 18
    ? `<div style="font-size:13px;font-weight:bold">
         本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒
         <i id="heartbeat" class='fas fa-heartbeat'></i> <br>
         旅行者 1 号当前距离地球 ${distance} 千米，约为 ${au} 个天文单位 🚀
       </div>`
    : `<div style="font-size:13px;font-weight:bold">
         本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒
         <i id="heartbeat" class='fas fa-heartbeat'></i> <br>
         旅行者 1 号当前距离地球 ${distance} 千米，约为 ${au} 个天文单位 🚀
       </div>`;
  
  // 将内容显示在页面上
  if (document.getElementById("workboard")) {
    document.getElementById("workboard").innerHTML = content;
  }
}

// 每秒更新一次内容
setInterval(createTime, 1000);

