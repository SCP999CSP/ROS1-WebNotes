import{_ as a,c as n,o as p,af as i}from"./chunks/framework.D4kPR_Qw.js";const g=JSON.parse('{"title":"2.4.5 rossrv","description":"","frontmatter":{},"headers":[],"relativePath":"2.4.5 rossrv.md","filePath":"2.4.5 rossrv.md"}'),e={name:"2.4.5 rossrv.md"};function r(l,s,t,o,c,h){return p(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="_2-4-5-rossrv" tabindex="-1">2.4.5 rossrv <a class="header-anchor" href="#_2-4-5-rossrv" aria-label="Permalink to “2.4.5 rossrv”">​</a></h1><p>rossrv是用于显示有关ROS服务类型的信息的命令行工具，与 rosmsg 使用语法高度雷同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rossrv show    显示服务消息详情</span></span>
<span class="line"><span>rossrv info    显示服务消息相关信息</span></span>
<span class="line"><span>rossrv list    列出所有服务信息</span></span>
<span class="line"><span>rossrv md5    显示 md5 加密后的服务消息</span></span>
<span class="line"><span>rossrv package    显示某个包下所有服务消息</span></span>
<span class="line"><span>rossrv packages    显示包含服务消息的所有包</span></span></code></pre></div><ul><li><p>rossrv list</p><p>会列出当前 ROS 中的所有 srv 消息</p></li><li><p>rossrv packages</p><p>列出包含服务消息的所有包</p></li><li><p>rossrv package</p><p>列出某个包下的所有msg</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//rossrv package 包名 </span></span>
<span class="line"><span>rossrv package turtlesim</span></span></code></pre></div></li><li><p>rossrv show</p><p>显示消息描述</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//rossrv show 消息名称</span></span>
<span class="line"><span>rossrv show turtlesim/Spawn</span></span>
<span class="line"><span>结果:</span></span>
<span class="line"><span>float32 x</span></span>
<span class="line"><span>float32 y</span></span>
<span class="line"><span>float32 theta</span></span>
<span class="line"><span>string name</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>string name</span></span></code></pre></div></li><li><p>rossrv info</p><p>作用与 rossrv show 一致</p></li><li><p>rossrv md5</p><p>对 service 数据使用 md5 校验(加密)</p></li></ul>`,4)])])}const v=a(e,[["render",r]]);export{g as __pageData,v as default};
