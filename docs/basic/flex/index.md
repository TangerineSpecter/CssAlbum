# flex弹性布局

> flex指定一个容器，尽可能不操作子元素，所有子元素会成为flex的项目。

## flex容器
<View1 />
- 通过设置盒子属性为`display:flex`来控制子元素
- 默认子元素不换行，设置`flex-wrap: wrap`来实现子元素自动换行。
- 中心是坐标原点，默认主轴是水平方向`main axis`，交叉轴为垂直方向`cross axis`
- 左上角是起点`start`

## 六个容器属性

### 1）`flex-direction`容器主轴方向

**`flex-direction:row`，默认水平**
<DirectionView1 />
**`flex-direction:column`，垂直方向**
<DirectionView2 />
**`flex-direction:row-reverse`，水平反向**
<DirectionView3 />
**`flex-direction:column-reverse`，垂直反向**
<DirectionView4 />

### 2）`justify-content`元素主轴方向

**`justify-content: flex-start`，主轴前对齐**
<JustifyView1 />
**`justify-content: flex-end`，主轴后对齐**
<JustifyView2 />
**`justify-content: center`，居中**
<JustifyView3 />
**`justify-content: space-between`，等距 首尾**
<JustifyView4 />
**`justify-content: space-around`，等距 两边**
<JustifyView5 />
**`justify-content: space-evenly`，等距 容器**
<JustifyView6 />

### 3）`align-items`元素交叉轴方向
> 适用于单行元素

**`align-items: flex-start`，交叉轴前对齐**
<AlignView1 />
**`align-items: flex-end`，交叉轴后对齐**
<AlignView2 />
**`align-items: center`，居中**
<AlignView3 />
**`align-items: baseline`，文字基线，项目首行文字对齐**
<AlignView4 />
**`align-items: stretch`，拉伸，占满整个容器(未定义子元素交叉轴长度的时候生效)**
<AlignView5 />

### 4）`flex-wrap`元素换行

**`flex-wrap: wrap`，换行**
<WrapView1 />
**`flex-wrap: nowrap`，不换行(默认)**
<WrapView2 />
**`flex-wrap: wrap-reverse`，行序反向**
<WrapView3 />

### 5）`align-content`交叉轴方向
> 只在多行项目生效，结合了两个轴的属性

**`align-content: flex-start`，主轴前对齐**
<AlignContentView1 />
**`align-content: flex-end`，主轴后对齐**
<AlignContentView2 />
**`align-content: center`，居中**
<AlignContentView3 />
**`align-content: space-between`，等距 首尾**
<AlignContentView4 />
**`align-content: space-around`，等距 两边**
<AlignContentView5 />
**`align-content: stretch`，铺满 容器**
<AlignContentView6 />


### 6）项目属性
> 支持单独设置子元素属性

设置item的属性
<ItemView1 />
- 默认排序是红、橙、蓝、绿，现在设置`order: 1`属性，默认从0开始，打乱颜色顺序，按照值从小到大排序。
- 黄色设置`align-self: center`进行交叉轴居中展示，默认继承容器属性。
- 绿色设置`align-self: flex-end`进行交叉轴后对齐展示

**flex设置子元素**
> **flex**是`flex-grow`、`flex-shrink`、`flex-basis`三个属性简写，默认值是`0 1 auto`。
<ItemView2 />
- 第一个容器分别对四个元素设置`flex-grow为1、1、5、10`，该属性根据容器剩余空间的比例放大元素填充容器。
- 第二个容器分别对四个元素设置`flex-shrink为1、1、5、10`，该属性根据容器被挤压空间的比例缩小元素。
- 第三个容器分别对四个元素设置`flex-basis为1、1、5、10`，该属性根据容器主轴长度进行分配，默认为auto。


<script setup>
import View1 from "./demo1.vue"
//flex-direction属性演示
import DirectionView1 from "./flexDirection/demo1.vue"
import DirectionView2 from "./flexDirection/demo2.vue"
import DirectionView3 from "./flexDirection/demo3.vue"
import DirectionView4 from "./flexDirection/demo4.vue"
//justify-content属性演示
import JustifyView1 from "./justifyContent/demo1.vue"
import JustifyView2 from "./justifyContent/demo2.vue"
import JustifyView3 from "./justifyContent/demo3.vue"
import JustifyView4 from "./justifyContent/demo4.vue"
import JustifyView5 from "./justifyContent/demo5.vue"
import JustifyView6 from "./justifyContent/demo6.vue"
//align-items属性演示
import AlignView1 from "./alignItems/demo1.vue"
import AlignView2 from "./alignItems/demo2.vue"
import AlignView3 from "./alignItems/demo3.vue"
import AlignView4 from "./alignItems/demo4.vue"
import AlignView5 from "./alignItems/demo5.vue"
//flex-wrap属性演示
import WrapView1 from "./wrap/demo1.vue"
import WrapView2 from "./wrap/demo2.vue"
import WrapView3 from "./wrap/demo3.vue"
//align-content属性演示
import AlignContentView1 from "./alignContent/demo1.vue"
import AlignContentView2 from "./alignContent/demo2.vue"
import AlignContentView3 from "./alignContent/demo3.vue"
import AlignContentView4 from "./alignContent/demo4.vue"
import AlignContentView5 from "./alignContent/demo5.vue"
import AlignContentView6 from "./alignContent/demo6.vue"
//item属性演示
import ItemView1 from "./item/demo1.vue"
import ItemView2 from "./item/demo2.vue"
</script>