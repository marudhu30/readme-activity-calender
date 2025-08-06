<div align="center">
    <img src="./assets/fewinfos-banner.png" alt="欢迎来到 FEWINFOS 贡献 - GitHub 仓库统计小部件" width="100%">
</div>

📦 GitHub 仓库统计小部件

一个开源的、完全客户端的工具，以交互式和可定制的格式可视化实时 GitHub 仓库统计数据 — 非常适合开发人员、开源维护者和作品集构建者。

🎯 目标

该小部件使用 GitHub REST API 来获取和显示任何公共 GitHub 仓库的各种元数据和见解。它完全在浏览器中工作，无需后端或身份验证。

✨ 特性

1. 🔄 通过 GitHub REST API 实时获取数据
2. ⭐ 显示星标、复刻、关注者、问题和拉取请求
3. 👥 可视化顶尖贡献者及其头像和提交次数
4. 📊 使用交互式图表显示所用语言
5. 📅 显示仓库创建日期和最后更新时间
6. 📜 显示许可证信息
7. 🎨 简洁、响应式和可定制的用户界面
8. 💻 直接在任何浏览器中工作（无需服务器设置）
9. 🧩 可轻松嵌入网站或 README.md 文件
10. 📈 通过 Chart.js 实现可选的可视化

🧱 技术栈

1. HTML – 结构和布局
2. CSS – 样式和响应性
3. JavaScript – 逻辑和 API 处理
4. GitHub REST API – 数据源
5. Chart.js – 用于渲染图形和图表（可选）

📊 可用的小部件

🔍 仓库统计

1. ⭐ 星标 / 🍴 复刻 / 👁️ 关注者计数器
2. 📅 仓库创建和最后更新日期
3. 📜 许可证类型显示
4. 📊 语言使用情况（饼图、条形图、环形图）
5. 📦 依赖关系图（npm, pip 等）
6. 📈 提交活动热图
7. 🕐 平均 PR 合并时间
8. 🧵 问题状态分解（开放 / 已关闭 / 已置顶）

👥 贡献者小部件

1. 👥 顶尖贡献者（头像 + 提交次数）
2. 📊 按工作日划分的贡献
3. 🗺️ 贡献者位置地图（公共数据）
4. ⏱️ 最近的贡献者（过去 7 / 30 天）
5. 📈 随时间变化的贡献（堆叠面积图）

📊 基于图表的小部件

1. 📊 仓库健康状况雷达图（星标、复刻、PR、问题）
2. 📉 星标/复刻增长趋势折线图
3. 🍩 语言使用情况环形图
4. 📈 问题/PR趋势面积图
5. 📆 GitHub 风格的日历热图

⚙️ DevOps 和 CI/CD 小部件

1. 🚦 GitHub Actions CI/CD 状态徽章
2. 🧪 代码覆盖率徽章（Codecov, Coveralls）
3. 🔄 上次工作流运行小部件
4. 🛠️ 构建历史时间线（成功/失败可视化）

📌 问题和 PR 小部件

1. 📋 置顶的问题或讨论
2. 🔍 问题标签词云
3. 📬 PR 合并状态/比率跟踪器
4. 📈 问题情绪指示器（基于关键词）

🧩 其他小部件

1. 📌 书签/收藏仓库按钮
2. 🔍 用于输入其他仓库的内联搜索
3. 🧠 AI 驱动的提交摘要（可选）
4. 🔗 相关仓库小部件
5. 🪄 将小部件导出为 iframe / HTML 嵌入

📂 项目结构

github-repo-stats-widget/
├── index.html         # 主 HTML 文件
├── style.css          # CSS 样式
├── repo.js            # 核心 JavaScript 逻辑
├── charts.js          # 图表渲染逻辑
├── assets/            # 图标、截图
├── README.md          # 本文档文件
└── LICENSE            # MIT 许可证

🚀 部署

您可以将此小部件部署到 GitHub Pages，或使用任何静态托管服务，如 Netlify、Vercel 或 Firebase。

通过 GitHub Pages 部署

1. 将您的项目推送到 GitHub
2. 前往 Settings → Pages
3. 选择分支：main 和文件夹：/ (root)
4. 您的小部件将托管在：
   https://yourusername.github.io/github-repo-stats-widget/