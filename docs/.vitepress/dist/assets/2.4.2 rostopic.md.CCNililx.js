import{_ as n,c as p,o as a,af as i}from"./chunks/framework.Dbg6IRTl.js";const h=JSON.parse('{"title":"2.4.2 rostopic","description":"","frontmatter":{},"headers":[],"relativePath":"2.4.2 rostopic.md","filePath":"2.4.2 rostopic.md"}'),t={name:"2.4.2 rostopic.md"};function l(o,s,e,r,c,g){return a(),p("div",null,[...s[0]||(s[0]=[i(`<h1 id="_2-4-2-rostopic" tabindex="-1">2.4.2 rostopic <a class="header-anchor" href="#_2-4-2-rostopic" aria-label="Permalink to “2.4.2 rostopic”">​</a></h1><p><strong>rostopic</strong>包含rostopic命令行工具，用于显示有关ROS 主题的调试信息，包括发布者，订阅者，发布频率和ROS消息。它还包含一个实验性Python库，用于动态获取有关主题的信息并与之交互。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rostopic bw     显示主题使用的带宽</span></span>
<span class="line"><span>rostopic delay  显示带有 header 的主题延迟</span></span>
<span class="line"><span>rostopic echo   打印消息到屏幕</span></span>
<span class="line"><span>rostopic find   根据类型查找主题</span></span>
<span class="line"><span>rostopic hz     显示主题的发布频率</span></span>
<span class="line"><span>rostopic info   显示主题相关信息</span></span>
<span class="line"><span>rostopic list   显示所有活动状态下的主题</span></span>
<span class="line"><span>rostopic pub    将数据发布到主题</span></span>
<span class="line"><span>rostopic type   打印主题类型</span></span></code></pre></div><ul><li><p><strong>rostopic list</strong>(-v)</p><p>直接调用即可，控制台将打印当前运行状态下的主题名称</p><p>rostopic list -v : 获取话题详情(比如列出：发布者和订阅者个数...)</p></li><li><p><strong>rostopic pub</strong></p><p>可以直接调用命令向订阅者发布消息</p><p>为roboware 自动生成的 发布/订阅 模型案例中的 订阅者 发布一条字符串</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rostopic pub /主题名称 消息类型 消息内容</span></span>
<span class="line"><span>rostopic pub /chatter std_msgs gagaxixi</span></span></code></pre></div><p>为 小乌龟案例的 订阅者 发布一条运动信息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rostopic pub /turtle1/cmd_vel geometry_msgs/Twist</span></span>
<span class="line"><span> &quot;linear:</span></span>
<span class="line"><span>  x: 1.0</span></span>
<span class="line"><span>  y: 0.0</span></span>
<span class="line"><span>  z: 0.0</span></span>
<span class="line"><span>angular:</span></span>
<span class="line"><span>  x: 0.0</span></span>
<span class="line"><span>  y: 0.0</span></span>
<span class="line"><span>  z: 2.0&quot;</span></span>
<span class="line"><span>//只发布一次运动信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rostopic pub -r 10 /turtle1/cmd_vel geometry_msgs/Twist</span></span>
<span class="line"><span> &quot;linear:</span></span>
<span class="line"><span>  x: 1.0</span></span>
<span class="line"><span>  y: 0.0</span></span>
<span class="line"><span>  z: 0.0</span></span>
<span class="line"><span>angular:</span></span>
<span class="line"><span>  x: 0.0</span></span>
<span class="line"><span>  y: 0.0</span></span>
<span class="line"><span>  z: 2.0&quot;</span></span>
<span class="line"><span>// 以 10HZ 的频率循环发送运动信息</span></span></code></pre></div></li><li><p><strong>rostpic echo</strong></p><p>获取指定话题当前发布的消息</p></li><li><p><strong>rostopic info</strong></p><p>获取当前话题的小关信息</p><p>消息类型</p><p>发布者信息</p><p>订阅者信息</p></li><li><p><strong>rostopic type</strong></p><p>列出话题的消息类型</p></li><li><p><strong>rostopic find 消息类型</strong></p><p>根据消息类型查找话题</p></li><li><p><strong>rostopic delay</strong></p><p>列出消息头信息</p></li><li><p><strong>rostopic hz</strong></p><p>列出消息发布频率</p></li><li><p><strong>rostopic bw</strong></p><p>列出消息发布带宽</p></li></ul>`,4)])])}const u=n(t,[["render",l]]);export{h as __pageData,u as default};
