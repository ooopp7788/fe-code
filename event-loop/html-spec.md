#### event loop

#### steps
- 定义 taskQueue: 包含一个可执行 task, 如果没有可执行 task , 进入 microTasks
- 定义 oldestTask: 从 taskQueue 取出第一个可执行 task (作为oldestTask), 并将其从 taskQueue 中移除
- 将 eventLoop 的当前执行任务设置为 oldestTask
- 定义 taskStartTime: 当前 high resolution time (浏览器精确到微秒的相对时间)
- 执行 oldestTask
- 设置 eventLoop 的当前执行任务为 null
- 进入 microTasks 阶段: 执行 microTask checkpoint
  1. 如果 eventLoop 的 performing a microtask checkpoint 值为 true, 直接 return
  2. 设置 performing a microtask checkpoint 为 true
  3. 按顺序执行 microtask, 直至 microTask queue 为空
  4. 通知 rejected promises 给  [environment-settings-object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)
  5. 清除 indexDB 的 transactions
  6. 设置 performing a microtask checkpoint 为 false
- 设置 now 为 当前 high resolution time
- 报告 task 的持续时间
- 定义 docs 为 与 eventLoop 相关的 Document 对象的表
- 渲染机会: 如果有一个 browsing context 没有渲染机会的话, 会在 docs 中移除在其之内的 browsing context
  - 一个 browsing context 有渲染机会: 如果 UA 当前就可以将内容展现给用户, 还需要考虑硬件刷新频率限制和 UA 渲染频率节流优化, 
  - 渲染机会是被硬件限制的, 包括刷新率, 还有其他因素, 比如页面性能或者是否页面再后台运行。总的来说页面渲染通常会按固定间隔执行