# AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
# QX Youtube 无中文字幕机翻方案 (20220219)
# 提示：仅英文时自动开启，不影响已有中文字幕
# 已经单独拿出去用单独重写文件开启了mitm没有动
# 重写，简体； 
hostname = www.youtube.com
https:\/\/www.youtube.com\/api\/timedtext\?.+&lang=en.+?((?!&tlang=zh\-Hans).)*$ url request-header \sHTTP/1\.1(\r\n) request-header &tlang=zh-Hans HTTP/1.1$1
# 重写，繁体 注釋掉，只使用簡體中文
# https:\/\/www.youtube.com\/api\/timedtext\?.+&lang=en.+?((?!&tlang=zh\-Hant).)*$ url request-header \sHTTP/1\.1(\r\n) request-header &tlang=zh-Hant HTTP/1.1$1
