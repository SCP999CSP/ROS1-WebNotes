import{_ as a,c as n,o as p,af as i}from"./chunks/framework.BYZYS_oT.js";const g=JSON.parse('{"title":"2.4.6 rosparam","description":"","frontmatter":{},"headers":[],"relativePath":"Language/English/2.4.6 rosparam.md","filePath":"Language/English/2.4.6 rosparam.md"}'),e={name:"Language/English/2.4.6 rosparam.md"};function l(t,s,r,o,h,c){return p(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="_2-4-6-rosparam" tabindex="-1">2.4.6 rosparam <a class="header-anchor" href="#_2-4-6-rosparam" aria-label="Permalink to “2.4.6 rosparam”">​</a></h1><p>rosparam包含rosparam命令行工具，用于使用YAML编码文件在参数服务器上获取和设置ROS参数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam set    设置参数</span></span>
<span class="line"><span>rosparam get    获取参数</span></span>
<span class="line"><span>rosparam load    从外部文件加载参数</span></span>
<span class="line"><span>rosparam dump    将参数写出到外部文件</span></span>
<span class="line"><span>rosparam delete    删除参数</span></span>
<span class="line"><span>rosparam list    列出所有参数</span></span></code></pre></div><ul><li><p>rosparam list</p><p>列出所有参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//默认结果</span></span>
<span class="line"><span>/rosdistro</span></span>
<span class="line"><span>/roslaunch/uris/host_helloros_virtual_machine__42911</span></span>
<span class="line"><span>/rosversion</span></span>
<span class="line"><span>/run_id</span></span></code></pre></div></li><li><p>rosparam set</p><p>设置参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam set name huluwa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//再次调用 rosparam list 结果</span></span>
<span class="line"><span>/name</span></span>
<span class="line"><span>/rosdistro</span></span>
<span class="line"><span>/roslaunch/uris/host_helloros_virtual_machine__42911</span></span>
<span class="line"><span>/rosversion</span></span>
<span class="line"><span>/run_id</span></span></code></pre></div></li><li><p>rosparam get</p><p>获取参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam get name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//结果</span></span>
<span class="line"><span>huluwa</span></span></code></pre></div></li><li><p>rosparam delete</p><p>删除参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam delete name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//结果</span></span>
<span class="line"><span>//去除了name</span></span></code></pre></div></li><li><p>rosparam load(先准备 yaml 文件)</p><p>从外部文件加载参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam load xxx.yaml</span></span></code></pre></div></li><li><p>rosparam dump</p><p>将参数写出到外部文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rosparam dump yyy.yaml</span></span></code></pre></div></li></ul>`,4)])])}const k=a(e,[["render",l]]);export{g as __pageData,k as default};
