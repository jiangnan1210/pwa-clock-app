Constcache_NAME='任务-时钟-v1';
ConsturlsToCache=[
  './',
  './index.html',
  './manifest.json'
];

自己.addEventListener('安装', 事件=>{
  事件.waituntil(
    缓存.打开(cache_NAME)
      .然后(缓存=>缓存.addAll(urlsToCache))
      .然后(()=>自己.skipwaiting())
  );
});

自己.addEventListener('激活', 事件=>{
  事件.waituntil(
    缓存.键().然后(cacheNames=>{
      返回 承诺.所有(
        cacheNames.过滤器(姓名=>姓名!==cache_NAME)
          .地图(姓名=>缓存.删除(姓名))
      );
    }).然后(()=>自己.客户.声称())
  );
});

自己.addEventListener('获取', 事件=>{
  事件.responseWith(
    缓存.匹配(事件.请求)
      .然后(响应=>{
        返回 响应||取来(事件.请求);
      })
  );
});
