import{_ as a,c as n,o as i,af as p,aq as e}from"./chunks/framework.D4kPR_Qw.js";const o=JSON.parse('{"title":"2.2.2 服务通信自定义srv","description":"","frontmatter":{},"headers":[],"relativePath":"2.2.2 服务通信自定义srv.md","filePath":"2.2.2 服务通信自定义srv.md"}'),l={name:"2.2.2 服务通信自定义srv.md"};function t(r,s,h,d,c,k){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_2-2-2-服务通信自定义srv" tabindex="-1">2.2.2 服务通信自定义srv <a class="header-anchor" href="#_2-2-2-服务通信自定义srv" aria-label="Permalink to “2.2.2 服务通信自定义srv”">​</a></h1><p><strong>需求:</strong></p><blockquote><p>服务通信中，客户端提交两个整数至服务端，服务端求和并响应结果到客户端，请创建服务器与客户端通信的数据载体。</p></blockquote><p><strong>流程:</strong></p><p>srv 文件内的可用数据类型与 msg 文件一致，且定义 srv 实现流程与自定义 msg 实现流程类似:</p><ol><li>按照固定格式创建srv文件</li><li>编辑配置文件</li><li>编译生成中间文件</li></ol><h4 id="_1-定义srv文件" tabindex="-1">1.定义srv文件 <a class="header-anchor" href="#_1-定义srv文件" aria-label="Permalink to “1.定义srv文件”">​</a></h4><p>服务通信中，数据分成两部分，请求与响应，在 srv 文件中请求和响应使用<code>---</code>分割，具体实现如下:</p><p>功能包下新建 srv 目录，添加 xxx.srv 文件，内容:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 客户端请求时发送的两个数字</span></span>
<span class="line"><span>int32 num1</span></span>
<span class="line"><span>int32 num2</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span># 服务器响应发送的数据</span></span>
<span class="line"><span>int32 sum</span></span></code></pre></div><h4 id="_2-编辑配置文件" tabindex="-1">2.编辑配置文件 <a class="header-anchor" href="#_2-编辑配置文件" aria-label="Permalink to “2.编辑配置文件”">​</a></h4><p><strong>package.xml</strong>中添加编译依赖与执行依赖</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;message_generation&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;message_runtime&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  exce_depend 以前对应的是 run_depend 现在非法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  --&gt;</span></span></code></pre></div><p><strong>CMakeLists.txt</strong>编辑 srv 相关配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>find_package(catkin REQUIRED COMPONENTS</span></span>
<span class="line"><span>  roscpp</span></span>
<span class="line"><span>  rospy</span></span>
<span class="line"><span>  std_msgs</span></span>
<span class="line"><span>  message_generation</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span># 需要加入 message_generation,必须有 std_msgs</span></span>
<span class="line"><span>Copy</span></span>
<span class="line"><span>add_service_files(</span></span>
<span class="line"><span>  FILES</span></span>
<span class="line"><span>  AddInts.srv</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>Copy</span></span>
<span class="line"><span>generate_messages(</span></span>
<span class="line"><span>  DEPENDENCIES</span></span>
<span class="line"><span>  std_msgs</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>注意: 官网没有在 catkin_package 中配置 message_runtime,经测试配置也可以</p><h4 id="_3-编译" tabindex="-1">3.编译 <a class="header-anchor" href="#_3-编译" aria-label="Permalink to “3.编译”">​</a></h4><p>编译后的中间文件查看:</p><p>Python 需要调用的中间文件(.../工作空间/devel/lib/python3/dist-packages/包名/srv)</p><p><img src="`+e+'" alt="img"></p><p>后续调用相关 srv 时，是从这些中间文件调用的</p>',21)])])}const _=a(l,[["render",t]]);export{o as __pageData,_ as default};
