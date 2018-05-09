/**
 * Created by Administrator on 2018/5/9.
 */
let str = `
<a href="/s?id=1599833831249634923&wfr=pc&fr=idx_top" target="_blank">
MIT自动驾驶导航系统，不看地图也能穿梭乡间野路
</a>
<a href="/s?id=1599825486545471471&wfr=pc&fr=idx_top" target="_blank">
余额宝引入两家基金，要开放申购，真相其实是这样的
</a>
`;

let reg = /<a href="(\/s\?id=[^"]+)".+>([\s\S]+?)<\/a>/g;
let result = str.match(reg);
console.log(result);

