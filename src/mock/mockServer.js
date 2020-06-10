import Mock from "mockjs";
import banners from "./banners.json";
import floors from "./floors.json";
import recommends from './recommends.json'
// 模拟返回banners数据接口
Mock.mock("/mock/banners", {
  code: 200,
  data: banners,
});

// 模拟返回floors数据的接口
Mock.mock("/mock/floors", {
  code: 200,
  data: floors,
});

Mock.mock("/mock/recommends", {
  code: 200,
  data: recommends,
});

// export default xxx  // 不需要
console.log("mockserver...");