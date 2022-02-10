# 暂时不用了，先用别人的xixi
# 由于直接导入无法使用，故采取这种方法导入Qx
# 灵感来源于：https://github.com/blackmatrix7/ios_rule_script/tree/master/script
# 不生效或失效的需要卸载 tb 重装，注意不开脚本进 tb 会失效
# Author:yichahucha
# resource: https://github.com/yichahucha/surge
# REWRITE: 2
# MITM: 1

^http://.+/amdc/mobileDispatch url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/script/6e15bb0cadb8e75062bf44df91e4814a.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/script/6e15bb0cadb8e75062bf44df91e4814a.js

hostname = trade-acs.m.taobao.com
