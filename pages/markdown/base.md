# 基础语法

## 标题

使用#可以表示 1-6 级标题

```markdown
# 一级

## 两级

### 三级

#### 四级

##### 五极

###### 六级
```

## 段落格式

段落没有格式直接写就可以,**段落的换行是使用两个以上空格加上回车**

### 字体

字体格式有以下几种

```markdown
_斜体文本_
_斜体文本_
**粗体文本**
**粗体文本**
**_粗斜体文本_**
**_粗斜体文本_**
```

_斜体文本_  
_斜体文本_  
**粗体文本**  
**粗体文本**  
**_粗斜体文本_**  
**_粗斜体文本_**

### 分割线

分割线的写法有三种，三个以上的星号、减号、底线来建立一个分隔线,行内不能有其他东西。你也可以在星号或是减号中间插入空格

```markdown
---
---
```

---

---

### 删除线

需要在文字的两端加上~~即可（两个）

```markdown
~~删除线~~
```

~~删除线~~

### 下划线

下换线通过 html 中的`<u>`标签实现

```markdown
<u>带下划线文本</u>
```

<u>带下划线文本</u>

### 脚注(效果不一样，有点问题。。。)

脚注是对文本的补充说明。Markdown 脚注的格式如下:

```markdown
[^要注明的文本]

创建脚注格式类似这样 [^runoob]。

[^runoob]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
```

创建脚注格式类似这样 [^巴拉巴拉]。  
[^巴拉巴拉]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！

## 列表

### 无序

无序使用 `*` `+` `-` 标记都是可以的，不要忘了标记后加空格!

```markdown
- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项

- 第一项
- 第二项
- 第三项
```

- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项

- 第一项
- 第二项
- 第三项

### 有序

有序列表使用数字加点`1.`后跟空格

```markdown
1. 第一项
2. 第二项
3. 第三项
```

1. 第一项
2. 第二项
3. 第三项

### 嵌套

嵌套列表需要在子列表的选项前面加 4 个空格

```markdown
1. 第一项
   - 子一
     - 孙一
     - 孙二
   - 子二
2. 第二项
```

1. 第一项
   - 子一
     - 孙一
     - 孙二
   - 子二
2. 第二项

## 区块

区块在段落开头加`>`,后跟空格

```markdown
> 巴拉巴拉  
> 巴拉巴拉
>
> > 巴拉巴拉
> >
> > > 巴拉巴拉
```

> 巴拉巴拉  
> 巴拉巴拉
>
> > 巴拉巴拉
> >
> > > 巴拉巴拉

## 代码

### 行内

如果是行内的代码片段可已使用``包裹

```markdown
`console.log()`函数
```

`console.log()`函数

### 代码块

可以使用 4 个空格或者一个制表符（Tab 键）

    $(document).ready(function () {
        alert('RUNOOB');
    });

也可以使用```包裹代码块，并制定一语言

```javascript
$(document).ready(function() {
  alert("RUNOOB");
});
```

## 链接

```markdown
[链接名称](链接地址)
这是一个链接[百度](https://www.baidu.com)
```

这是一个链接[百度](https://www.baidu.com)

也可以直接使用地址

```markdown
<https://www.runoob.com>
```

<https://www.runoob.com>

### 高级链接

我们可以通过变量来设置一个链接，变量赋值在文档末尾进行

```markdown
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

[1]: http://www.google.com/
[runoob]: http://www.runoob.com/
```

这个链接用 1 作为网址变量 [Google][1]  
这个链接用 runoob 作为网址变量 [Runoob][runoob]  
然后在文档的结尾为变量赋值（网址）

[1]: http://www.google.com/
[runoob]: http://www.runoob.com/

## 图片

```markdown
![alt 属性文本](图片地址)
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")
```

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")

- 开头一个!
- 方括号中是替换图片的文字
- 普通括号中是图片地址，后面可跟图片标题

markdown本身不直接支持调整图片位置/大小，可以直接使用标签约定宽度

```markdown
指定宽度
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
图片居中
<div align="cneter">
  <img src="http://static.runoob.com/images/runoob-logo.png" width="50%">  
</div>
```
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
<div align="center">
  <img src="http://static.runoob.com/images/runoob-logo.png" width="50%">  
</div>

## 表格

表格使用`|`来分隔不同单元格，`-`来分隔表头和其他行
```markdown
| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |
```
| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

### 对齐方式
* `-:` 右对齐
* `:-` 左对齐
* `:-:` 居中对齐

```
| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |
```
| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

## 高级技巧

### 支持的html元素

目前支持的 HTML 元素有：`<kbd> <b> <i> <em> <sup> <sub> <br>`

```markdown
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

### 转义

Mar许多特定的符号展示特定的意义，如果需要展示这些特定的符号，需要使用反斜杠转义`\`

```markdown
**文本加粗** 
\*\* 正常显示星号 \*\*
```
**文本加粗**   
\*\* 正常显示星号 \*\*