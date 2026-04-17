# MoodRun 视觉风格与 UI 设计报告

本报告基于当前 `MoodRun` 过程作品集网页的已有页面与样式代码整理，目标是给 D-7 小组成员提供一份统一的视觉与交互风格说明，方便后续继续推进 `web app`、`poster`、课堂展示材料与其他延展物料的设计与开发。

这份文档不是重新发明一套新风格，而是把我们现在网页里已经成立的视觉语言提炼成可复用的设计规范，让团队在不同输出物上保持同一个项目气质。

## 1. 项目风格一句话

`MoodRun` 的核心风格可以概括为：

**“复古游戏感（retro-game）+ 情绪科技感（emotion-tech）+ 陪伴式运动体验（supportive running companion）”**

它不是传统的硬核运动产品，也不是纯心理疗愈产品，而是两者之间的结合体：

- 有跑步产品该有的节奏感、行动感、目标感
- 有情绪陪伴产品该有的柔和、理解、鼓励和低压力
- 用带一点街机 / 数字界面感的视觉包装，让整体更有记忆点

## 2. 风格定位

### 2.1 品牌关键词

建议所有设计都围绕下面这些关键词展开：

- Emotional
- Playful
- Supportive
- Neon
- Night Run
- Retro Digital
- Human-Centric
- Adaptive

### 2.2 情绪气质

`MoodRun` 的视觉不应该传达“竞技、极限、军事化训练”，而应该传达：

- 我理解你现在的状态
- 你可以按自己的情绪和节奏开始跑
- 跑步不是压力，而是一种被支持的行动

因此整体语气要偏：

- 鼓励型，而不是命令型
- 陪伴型，而不是监督型
- 有能量，但不过度刺激

### 2.3 用户感受目标

当用户第一次看到页面、海报或 App 界面时，理想中的第一印象应该是：

1. 这是一个和“情绪”有关的跑步产品
2. 它看起来年轻、数字化、有点游戏感
3. 它不是严肃压迫型健身工具，而是更友好、更愿意陪伴我的产品

## 3. 当前网页提炼出的视觉 DNA

从当前首页和各子页面来看，已经形成了比较稳定的视觉特征：

- 深色夜间背景作为主场景，像夜跑或沉浸式数字空间
- 高饱和霓虹强调色，形成“情绪信号”和“科技反馈”感
- 标题使用大字重、渐变发光处理，制造品牌识别度
- 模块大量使用面板式卡片，像游戏 UI / 控制台 UI
- 图形元素里有跑步人物剪影、轨道线、网格线、emoji 情绪符号
- 交互动画以“漂浮、轻微发光、轻微上移”为主，不过度复杂
- 内容结构清晰，适合课程作品集，也适合后续转成产品说明型界面

这意味着我们后续不论做网页、原型还是海报，都应该延续以下统一方向：

- 背景偏深
- 强调色发亮
- 版面清晰分区
- 元素像“可操作的数字模块”
- 情绪相关信息可以通过颜色、图标、漂浮符号和文案语气共同传达

## 4. 色彩系统

以下颜色直接提炼自当前 `css/style.css`，建议作为团队统一的基础色板。

| 角色 | 色值 | 用途建议 |
| --- | --- | --- |
| 主背景 `bg` | `#0f1023` | 页面主背景、App 深色底、海报大面积底色 |
| 面板背景 `bg-panel` | `#171835` | 卡片、信息模块、弹层、分区容器 |
| 主文字 `text-main` | `#eff1ff` | 标题以下的大部分正文、主要信息 |
| 次文字 `text-soft` | `#b9bedf` | 辅助说明、注释、次级信息 |
| 线框色 `line` | `#3f4679` | 卡片边框、分割线、导航边界、表格线 |
| 主强调色 `accent` | `#ff4f8a` | 情绪高亮、按钮热区、重点提示 |
| 冷强调色 `accent-2` | `#54e1ff` | 科技感主高亮、链接、交互反馈、重点描边 |
| 金色强调 `accent-3` | `#ffc857` | 品牌标题、章节标题、标签强调、奖励感元素 |

### 4.1 推荐配色关系

- 深海军蓝 + 青蓝色：表达科技、夜跑、呼吸感
- 深海军蓝 + 玫粉色：表达情绪、陪伴、柔性反馈
- 深海军蓝 + 金黄色：表达成就、阶段感、游戏任务感

### 4.2 建议的颜色职责

- `#54e1ff` 负责“系统、逻辑、引导、交互反馈”
- `#ff4f8a` 负责“情绪、能量、状态变化、重点动作”
- `#ffc857` 负责“标题、阶段感、成就感、品牌识别”

### 4.3 渐变建议

当前网页的视觉亮点之一就是渐变，因此海报和 App 也建议保留。

推荐延续以下几组组合：

- 标题渐变：`#ffd36d` -> `#ff8fb8` -> `#73e8ff`
- 粉色按钮氛围：`rgba(255, 90, 147, 0.24)` -> `rgba(255, 141, 119, 0.2)`
- 蓝色按钮氛围：`rgba(84, 225, 255, 0.18)` -> `rgba(115, 232, 255, 0.12)`
- 卡片边框渐变：`rgba(84, 225, 255, 0.8)` -> `rgba(255, 79, 138, 0.72)`

### 4.4 用色原则

- 不要把所有颜色同时大面积铺满
- 背景保持深色稳定，强调色只用于关键焦点
- 一个界面里建议只选 1 个主强调色 + 1 个辅助强调色
- 金色更适合标题和阶段信息，不适合大量正文

## 5. 字体与排版

### 5.1 当前网页字体基线

当前网页使用的是：

`"Trebuchet MS", "Segoe UI", sans-serif`

这个选择带有一点复古数码感，比较适合目前的风格，所以后续可以继续沿用这套思路。

### 5.2 字体气质建议

字体整体应满足以下要求：

- 无衬线
- 干净、清晰、现代
- 略带数字界面气质
- 不能太圆润可爱，也不能太正式学术

如果后续做海报或高保真 App，需要额外搭配展示字体，可以优先考虑：

- 标题字体偏宽、偏硬朗、适合全大写
- 正文字体仍然保持清楚、易读、信息密度友好

### 5.3 排版层级建议

- `H1 / Hero Title`：超大号、粗体、可使用渐变或发光
- `H2 / Section Title`：金色或高亮色，作为分区标题
- `H3 / Card Title`：青蓝色优先，体现模块标题
- `Body`：浅色正文，行高舒适，避免拥挤
- `Caption / Note`：低对比度浅灰蓝，用于注释和说明

### 5.4 排版特征

当前页面的排版已经形成以下规律，建议保持：

- 小标题常配合大写字母和较宽字距
- Hero 区标题字重大、视觉冲击强
- 正文保持理性克制，不要花哨
- 一屏内信息最好按“标题 - 简述 - 动作 / 内容块”组织

## 6. 图形语言

### 6.1 核心图形元素

当前网页中非常有代表性的图形元素包括：

- 跑者剪影
- 椭圆轨道线
- 细网格线 / 坐标线
- 漂浮 emoji
- 柔和发光色块
- 半透明径向光晕

这些元素一起构成了 `MoodRun` 的“情绪运动雷达”视觉感受。

### 6.2 后续延展建议

在 Poster、App splash、展示页中，可以继续使用：

- 跑步人物剪影或线稿
- 代表情绪状态的图标系统
- 类似 HUD / 控制台的细线框和坐标装饰
- 圆形扫描波纹、轨道、数据圈层

### 6.3 控制原则

- 图形元素是“增强氛围”，不是“盖过内容”
- 背景图形透明度要低，避免抢正文
- emoji 或图标适合作点缀，不建议在正式信息区过量使用

## 7. 组件风格规范

### 7.1 卡片 Card

当前网页的卡片是整套系统最重要的基础组件之一。

建议统一特征如下：

- 深色底板
- 清晰边框
- 内边距明确
- 内容分组清楚
- 标题颜色高于正文

卡片分成两类：

1. `基础信息卡`
   适合研究内容、需求、说明文本、功能介绍

2. `强化视觉卡`
   像当前 `Team Card` 这样，可带圆角、渐变边框、悬浮感，更适合人物、角色、重点内容

### 7.2 按钮 Button

当前按钮已经很有风格，建议继续保持：

- 线框清楚
- 半透明渐变背景
- Hover 时轻微上浮和提亮
- 主按钮偏暖色，次按钮偏冷色

按钮语气建议：

- 主动作：鼓励开始，如 `Start`, `Check In`, `Begin Run`
- 次动作：查看说明、继续浏览、了解逻辑

避免使用过强命令式文案，例如：

- `Must Finish`
- `Push Harder`
- `No Excuse`

### 7.3 标签 Tag / Chip

团队卡片里的标签风格很适合继续扩展到 App：

- 用于情绪标签，如 `Stressed`, `Calm`, `Need Motivation`
- 用于跑步模式，如 `Gentle Run`, `Focus Run`, `Release Mode`
- 用于功能状态，如 `Adaptive`, `Recommended`, `Reflection`

标签应保持：

- 小体量
- 高识别度
- 圆角胶囊形
- 颜色和边框统一

### 7.4 导航 Navigation

当前导航已经体现出“结构清楚 + 数字阶段感”的特点，建议后续延续：

- 导航文案清晰，不做过度艺术化处理
- 当前项高亮明显
- 移动端导航可以折叠，但展开后仍需有面板感和边框感

## 8. 布局规范

### 8.1 页面结构

当前网页的页面结构非常适合继续复用：

- 顶部固定导航
- Hero 首屏
- 分区内容模块
- 卡片化信息承载
- 页脚简洁收尾

### 8.2 栅格与宽度

从现有代码看，内容最大宽度以 `1120px` 为核心，这个尺度是合理的。

建议后续继续使用：

- 桌面端：宽内容容器 + 双列或多列卡片
- 平板端：适度压缩，优先 2 列
- 手机端：统一转单列，减少横向拥挤

### 8.3 间距节奏

当前页面的节奏感来自“块与块之间留白明确”，所以后续不要把内容挤得太满。

建议保持：

- section 与 section 之间有明显呼吸感
- card 内部信息上下间距均匀
- 不同信息层级之间有明显距离差

## 9. 动效规范

当前网页的动画风格是轻量、柔和、服务氛围的，这点很值得保留。

### 9.1 已形成的动画语言

- 标题渐变流动
- 图标 / emoji 漂浮
- 内容进入时轻微上移淡入
- 按钮 hover 时轻微抬升
- 人物剪影轻微 bobbing

### 9.2 动效原则

- 动效应体现“呼吸感”和“陪伴感”
- 不要做过快、过重、过炫的动画
- 动效应该帮助用户感到页面是“活的”，而不是“吵的”

### 9.3 后续 App / Poster 动效建议

如果 App 原型或展示视频需要动效，可优先考虑：

- 情绪波纹扩散
- 卡片淡入上浮
- 跑步路径线条缓慢亮起
- 状态切换时按钮 / 卡片轻微 glow

避免：

- 高频闪烁
- 大幅度跳动
- 复杂 3D 转场

## 10. 文案语气规范

`MoodRun` 的文案应该和视觉一致，体现“理解情绪”的品牌人格。

### 10.1 推荐语气

- 温和
- 鼓励
- 清楚
- 年轻但不幼稚
- 有陪伴感

### 10.2 推荐表达方式

适合使用：

- `Let’s start with how you feel today.`
- `A gentle run may suit your mood right now.`
- `You did enough for today.`
- `Small steps still count.`

不适合使用：

- `You are underperforming.`
- `You failed to hit target pace.`
- `Push until exhaustion.`

### 10.3 文案关键词

建议多用：

- mood
- support
- gentle
- adaptive
- reflect
- progress
- companion

## 11. Web App 落地建议

如果后续开始做真正的 `MoodRun Web App`，建议把当前视觉风格迁移成以下几类核心界面。

### 11.1 首页 / Landing

保留当前首页的核心识别：

- 深色夜跑背景
- 大号渐变品牌标题
- 跑者 + 情绪符号图形语言
- 两个核心 CTA

### 11.2 Mood Check-in 页面

建议重点呈现：

- 当前情绪选择按钮或情绪卡片
- 简短文案引导
- 一个清晰的主按钮
- 情绪标签与颜色联动

页面关键词：

- 快速
- 无压力
- 一眼能选

### 11.3 Run Mode Recommendation 页面

建议用卡片方式展示不同跑步建议：

- Gentle Run
- Focus Run
- Release Run
- Recovery Run

每张卡片应包含：

- 模式名称
- 当前适配原因
- 建议时长 / 节奏
- 一句陪伴式说明

### 11.4 During Run 页面

这一页可以强化“运动中陪伴”的产品特色：

- 当前状态面板
- 动态提示语
- 节奏 / 进度可视化
- 低干扰交互

视觉重点应该从“内容丰富”转向“信息聚焦”，避免运动中看不清。

### 11.5 Post-run Reflection 页面

建议作为情绪价值输出的关键页面：

- 今日完成状态
- 当前情绪变化
- 一句总结型鼓励
- 下一次建议

这里可以适当加入金色和粉色，增强“奖励感”和“被看见的感觉”。

## 12. Poster 落地建议

后续如果做海报，建议不要做成普通课程海报，而是做成更像“产品品牌海报”。

### 12.1 海报视觉方向

- 深色背景
- 霓虹高亮
- 大字标题
- 跑步人物或运动线条作为视觉中心
- 情绪图标或信号波纹作为辅助层

### 12.2 海报信息结构

适合的结构是：

1. 顶部品牌标题 `MOODRUN`
2. 一句副标题，例如 `Emotion-Aware Running Companion`
3. 三个核心卖点
4. 一张主视觉
5. 二维码 / 项目链接 / 组别信息

### 12.3 海报不要做成

- 白底蓝字的普通学术公告
- 健身房风格的纯力量型海报
- 太可爱、太儿童化的插画海报

Poster 要传达的是：

**“这是一个年轻、智能、理解情绪的跑步产品。”**

## 13. 统一视觉规则：Do / Don’t

### 13.1 Do

- 使用深色底和高亮强调色
- 保持卡片化、模块化布局
- 让标题有品牌感和视觉冲击
- 让界面传达“陪伴式运动”
- 用轻量动效增加情绪氛围
- 用色彩和标签表达不同状态

### 13.2 Don’t

- 不要改成纯白极简科技风
- 不要改成黑红硬核竞技风
- 不要加入和现有系统完全无关的马卡龙色
- 不要让页面堆满花哨装饰而破坏可读性
- 不要让文案变成批评式、命令式、过度绩效导向

## 14. 团队协作建议

为了让后续开发更顺，建议团队把这份 README 当作统一风格基准。

### 14.1 设计同学

在做 Figma、海报、演示图时，优先对齐：

- 色板
- 标题风格
- 卡片风格
- 情绪标签样式
- 图形元素语言

### 14.2 前端同学

建议直接复用当前 CSS 里的核心 token：

- `--bg`
- `--bg-panel`
- `--text-main`
- `--text-soft`
- `--line`
- `--accent`
- `--accent-2`
- `--accent-3`

这样可以最大程度保证新页面和现有 portfolio 风格一致。

### 14.3 做展示物料的同学

无论是海报、PPT、展板还是短视频封面，都尽量围绕同一套视觉语言，不要每个人做成完全不同的风格，否则会削弱项目整体识别度。

## 15. 最终结论

`MoodRun` 当前已经形成了一套很有辨识度的基础视觉系统，它的优势不在于“极简”或“传统专业”，而在于：

- 方向明确
- 情绪感和产品感结合得比较自然
- 既适合课程作品集，也很适合继续发展成真正的产品界面

因此，后续所有设计延展都建议围绕这条主线：

**以深色夜跑场景为基底，以霓虹高亮作为情绪与交互信号，以模块化卡片承载信息，以温和鼓励型文案建立陪伴式跑步体验。**

如果后续需要，还可以在这份 README 的基础上继续补一版：

- `Figma 组件清单`
- `Web App 页面级设计规范`
- `Poster 版式模板`
- `MoodRun 文案库`

## 16. 可直接喂给 AI 的 Prompt 套件

下面这部分是为了让团队成员可以直接复制到不同 AI 工具中使用。整体原则是：

- 不要让 AI 自由发挥成别的品牌风格
- 明确告诉 AI：必须沿用 `MoodRun` 当前已经建立的视觉系统
- 每个 prompt 都要强调“深色夜跑 + 霓虹高亮 + 情绪陪伴 + 复古数字界面感”

如果不同 AI 平台支持程度不同，可以直接先原样使用，再把尺寸、语言、页面数量等个别参数替换成自己的需要。

### 16.1 通用风格锚点 Prompt

这一段可以作为所有生成任务前面的统一风格前缀，先贴上，再接各自任务 prompt。

```text
You are designing for MoodRun, an emotion-aware running companion for young adults under study/work stress.

The visual direction must strictly follow this brand style:
- retro-game feeling
- emotion-tech atmosphere
- supportive and human-centric running experience
- dark night-run background
- neon highlights in cyan, pink, and warm yellow
- modular card-based interface
- gentle glow, signal-wave, orbit-line, and HUD-like graphic details
- youthful, digital, playful, but not childish
- emotionally supportive, not aggressive or performance-obsessed

Core palette:
- background: #0f1023
- panel: #171835
- main text: #eff1ff
- secondary text: #b9bedf
- line/border: #3f4679
- pink accent: #ff4f8a
- cyan accent: #54e1ff
- yellow accent: #ffc857

Typography and mood:
- bold high-impact title
- clean sans-serif body text
- large gradient headline when needed
- copy tone should feel gentle, encouraging, adaptive, and companion-like

Avoid:
- pure white minimalism
- hardcore gym aesthetics
- black-red esports aggression
- childish cartoon visuals
- luxury fashion styling
- generic corporate SaaS UI
```

### 16.2 海报生成 Prompt

适合用于海报生成、品牌视觉海报、项目宣传图、展板主视觉。  
如果是图像模型，可以直接用；如果是设计型 AI，也可以保留文案层级一起生成。

```text
Use the MoodRun brand style defined above.

Create a high-impact promotional poster for a project called "MOODRUN".
MoodRun is an emotion-aware running companion that helps stressed young adults use running as emotional support rather than performance pressure.

Poster goal:
- make the project look like a real digital wellness product
- communicate emotional support, movement, and adaptive guidance
- feel stylish, youthful, neon, and memorable

Visual direction:
- dark night-run atmosphere
- deep navy background with soft radial glow
- neon cyan, neon pink, and warm yellow accents
- a central running figure or runner silhouette as the visual anchor
- orbit lines, signal waves, emotion icons, floating mood symbols, subtle HUD/grid details
- layered depth, cinematic lighting, strong focal point
- retro-digital but still clean and readable

Layout requirements:
- vertical poster composition
- huge title: MOODRUN
- subtitle: Emotion-Aware Running Companion
- include 3 short selling points:
  1. Mood Check-In
  2. Adaptive Run Guidance
  3. Post-Run Reflection
- leave space at the bottom for team / QR code / project info

Tone:
- supportive
- emotionally intelligent
- energetic but not intense
- futuristic but warm

Please do NOT generate:
- white academic poster
- generic fitness ad
- bodybuilding or sports competition poster
- childish cartoon poster

Output style:
- polished, presentation-ready, portfolio-quality
- suitable for coursework exhibition and product showcase
```

### 16.3 Web App 生成 Prompt

适合用于生成 `Web App UI`、多页面界面、前端高保真草图，或给能直接产出页面代码的 AI 工具。

```text
Use the MoodRun brand style defined above.

Design a responsive web app UI for MoodRun, an emotion-aware running companion.
The product helps users choose and complete a run based on their current emotional state.

Design a polished desktop + mobile web app experience with the following screens:

1. Landing Page
- strong hero section
- large gradient MOODRUN title
- subtitle: Emotion-Aware Running Companion
- two CTA buttons
- background visual with runner silhouette, mood icons, orbit lines, and subtle digital motion feeling

2. Mood Check-In Screen
- ask the user how they feel today
- use emotion cards or mood chips
- quick and low-pressure interaction
- include mood options such as stressed, low energy, calm, motivated, overwhelmed
- one clear primary button to continue

3. Run Recommendation Screen
- show adaptive run modes such as Gentle Run, Focus Run, Release Run, Recovery Run
- each mode should be shown in a card
- each card includes: title, reason, suggested pace/time, supportive description
- highlight one recommended option

4. During Run Screen
- simple, readable, low-distraction interface
- current status panel
- pace/progress visualization
- adaptive prompt message area
- emotional support microcopy
- should feel calm and focused, not overloaded

5. Post-Run Reflection Screen
- show completion summary
- emotional reflection card
- mood change insight
- next suggested step
- rewarding and encouraging tone

UI requirements:
- modular card-based layout
- dark background with neon accents
- strong visual hierarchy
- soft glow and subtle motion cues
- readable typography
- rounded or softly geometric panels
- clear spacing and component consistency

Important brand constraints:
- this is not a hardcore sports tracker
- this is not a generic mental health meditation app
- it must combine running, emotion, and adaptive companionship
- make it feel like a digital product for young adults, not for children

Please produce:
- a cohesive design system across all screens
- reusable buttons, cards, tags, and nav patterns
- both desktop and mobile-friendly layouts
- presentation-ready UI mockups
```

### 16.4 Figma Prototype 生成 Prompt

适合喂给 `Figma AI`、原型生成工具，或者先生成高保真框架后再由组员继续细化。

```text
Use the MoodRun brand style defined above.

Create a high-fidelity Figma prototype for MoodRun, an emotion-aware running companion web app.
The prototype should look like a real startup product concept with a cohesive visual system and interactive user flow.

Prototype scope:
- landing page
- mood check-in
- run mode recommendation
- during run
- post-run reflection

Design requirements:
- use a dark night-run interface with neon cyan, pink, and yellow highlights
- keep the atmosphere emotional, digital, and supportive
- combine retro-game UI details with modern product clarity
- use modular cards, chips, soft glows, thin borders, and clear information hierarchy
- include visual motifs such as runner silhouette, signal waves, orbit lines, and mood icons where appropriate

Component requirements:
- primary button
- secondary button
- mood chip set
- run mode card
- reflection card
- top navigation
- bottom action area for mobile
- status/info panel

Prototype interaction requirements:
- clicking a mood option leads to the recommendation screen
- clicking the recommended run mode starts the during-run screen
- clicking finish run leads to the reflection screen
- include hover/pressed states for buttons if the tool supports them
- include component variants if the tool supports them

Figma structure requirements:
- organized frames
- reusable components
- consistent spacing and alignment
- desktop frame and mobile frame versions
- high-fidelity presentation quality

Tone and copy style:
- gentle
- supportive
- adaptive
- emotionally aware
- never harsh, competitive, or judgmental

Do not generate:
- plain wireframes only
- generic SaaS dashboard style
- medical clinic interface
- hardcore running analytics board

Output target:
- a clean, editable high-fidelity prototype suitable for coursework presentation, design review, and later front-end implementation
```

### 16.5 使用建议

如果组员使用不同 AI 工具，建议这样搭配：

- 做海报主视觉：优先使用 `16.2 海报生成 Prompt`
- 做产品界面图：优先使用 `16.3 Web App 生成 Prompt`
- 做 Figma 原型骨架和页面流：优先使用 `16.4 Figma Prototype 生成 Prompt`

为了减少 AI 跑偏，推荐统一使用下面这个方法：

1. 先贴 `16.1 通用风格锚点 Prompt`
2. 再贴对应任务的 prompt
3. 如果 AI 第一次生成不够像 `MoodRun`，追加一句：

```text
Please push the design further toward dark neon emotion-tech, retro-digital running companion aesthetics, and reduce any generic SaaS or plain fitness app styling.
```

### 16.6 可继续扩展的 Prompt 方向

如果后续还需要，我可以继续在这份 README 里补充以下几类 prompt：

- `PPT 展示页生成 Prompt`
- `用户旅程图生成 Prompt`
- `Logo / Icon 生成 Prompt`
- `首页 Hero 插画生成 Prompt`
- `品牌文案语气 Prompt`
