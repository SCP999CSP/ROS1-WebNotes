import{_ as a,c as n,o as e,af as p}from"./chunks/framework.BYZYS_oT.js";const d=JSON.parse('{"title":"2.4.4 rosservice","description":"","frontmatter":{},"headers":[],"relativePath":"Language/English/2.4.4 rosservice.md","filePath":"Language/English/2.4.4 rosservice.md"}'),i={name:"Language/English/2.4.4 rosservice.md"};function l(r,s,t,c,o,g){return e(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_2-4-4-rosservice" tabindex="-1">2.4.4 rosservice <a class="header-anchor" href="#_2-4-4-rosservice" aria-label="Permalink to “2.4.4 rosservice”">​</a></h1><p>rosservice包含用于列出和查询ROS<a href="http://wiki.ros.org/Services" target="_blank" rel="noreferrer">Services</a>的rosservice命令行工具。</p><p>调用部分服务时，如果对相关工作空间没有配置 path，需要进入工作空间调用 source ./devel/setup.bash</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosservice args 打印服务参数</span></span>
<span class="line"><span>rosservice call    使用提供的参数调用服务</span></span>
<span class="line"><span>rosservice find    按照服务类型查找服务</span></span>
<span class="line"><span>rosservice info    打印有关服务的信息</span></span>
<span class="line"><span>rosservice list    列出所有活动的服务</span></span>
<span class="line"><span>rosservice type    打印服务类型</span></span>
<span class="line"><span>rosservice uri    打印服务的 ROSRPC uri</span></span></code></pre></div><ul><li><p>rosservice list</p><p>列出所有活动的 service</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>~ rosservice list</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>/kill</span></span>
<span class="line"><span>/listener/get_loggers</span></span>
<span class="line"><span>/listener/set_logger_level</span></span>
<span class="line"><span>/reset</span></span>
<span class="line"><span>/rosout/get_loggers</span></span>
<span class="line"><span>/rosout/set_logger_level</span></span>
<span class="line"><span>/rostopic_4985_1578723066421/get_loggers</span></span>
<span class="line"><span>/rostopic_4985_1578723066421/set_logger_level</span></span>
<span class="line"><span>/rostopic_5582_1578724343069/get_loggers</span></span>
<span class="line"><span>/rostopic_5582_1578724343069/set_logger_level</span></span>
<span class="line"><span>/spawn</span></span>
<span class="line"><span>/turtle1/set_pen</span></span>
<span class="line"><span>/turtle1/teleport_absolute</span></span>
<span class="line"><span>/turtle1/teleport_relative</span></span>
<span class="line"><span>/turtlesim/get_loggers</span></span>
<span class="line"><span>/turtlesim/set_logger_level</span></span></code></pre></div></li><li><p>rosservice args</p><p>打印服务参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosservice args /spawn</span></span>
<span class="line"><span>x y theta name</span></span></code></pre></div></li><li><p>rosservice call</p><p>调用服务</p><p>为小乌龟的案例生成一只新的乌龟</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosservice call /spawn &quot;x: 1.0</span></span>
<span class="line"><span>y: 2.0</span></span>
<span class="line"><span>theta: 0.0</span></span>
<span class="line"><span>name: &#39;xxx&#39;&quot;</span></span>
<span class="line"><span>name: &quot;xxx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//生成一只叫 xxx 的乌龟</span></span></code></pre></div></li><li><p>rosservice find</p><p>根据消息类型获取话题</p></li><li><p>rosservice info</p><p>获取服务话题详情</p></li><li><p>rosservice type</p><p>获取消息类型</p></li><li><p>rosservice uri</p><p>获取服务器 uri</p></li></ul>`,5)])])}const _=a(i,[["render",l]]);export{d as __pageData,_ as default};
