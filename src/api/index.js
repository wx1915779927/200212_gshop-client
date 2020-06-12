import ajax from "./ajax";
import mockAjax from "./mockAjax";
export function reqLogin(mobile, password) {
  // return ajax({
  //     url: '/user/passport/login',
  //     method:'POST',
  //     data:{mobile,password}
  // })
  return ajax.post("/user/passport/login", {
    mobile,
    password,
  });
}
export const reqCategoryList = () => ajax("/product/getBaseCategoryList");

export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");
export const reqRecommends = () => mockAjax("/recommends")

export const reqProductList = (options) => ajax.post("/list", options);

export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)