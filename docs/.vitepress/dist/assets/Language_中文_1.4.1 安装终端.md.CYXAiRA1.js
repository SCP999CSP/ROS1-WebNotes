import{_ as a,c as n,o as p,af as l,a$ as i}from"./chunks/framework.BYZYS_oT.js";const f=JSON.parse('{"title":"1.4.1 安装终端","description":"","frontmatter":{},"headers":[],"relativePath":"Language/中文/1.4.1 安装终端.md","filePath":"Language/中文/1.4.1 安装终端.md"}'),t={name:"Language/中文/1.4.1 安装终端.md"};function e(r,s,h,c,o,d){return p(),n("div",null,[...s[0]||(s[0]=[l('<h1 id="_1-4-1-安装终端" tabindex="-1">1.4.1 安装终端 <a class="header-anchor" href="#_1-4-1-安装终端" aria-label="Permalink to “1.4.1 安装终端”">​</a></h1><p>在 ROS 中，需要频繁的使用到终端，且可能需要同时开启多个窗口，推荐一款较为好用的终端:<strong>Terminator。</strong>效果如下:</p><p><img src="'+i+`" alt="img"></p><h4 id="_1-安装" tabindex="-1">1.安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to “1.安装”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install terminator</span></span></code></pre></div><h4 id="_2-添加到收藏夹" tabindex="-1">2.添加到收藏夹 <a class="header-anchor" href="#_2-添加到收藏夹" aria-label="Permalink to “2.添加到收藏夹”">​</a></h4><p>显示应用程序 ---&gt; 搜索 terminator ---&gt; 右击 选择 添加到收藏夹</p><h4 id="_3-terminator-常用快捷键" tabindex="-1">3.Terminator 常用快捷键 <a class="header-anchor" href="#_3-terminator-常用快捷键" aria-label="Permalink to “3.Terminator 常用快捷键”">​</a></h4><p><strong>第一部份：关于在同一个标签内的操作</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Alt+Up                          //移动到上面的终端</span></span>
<span class="line"><span>Alt+Down                        //移动到下面的终端</span></span>
<span class="line"><span>Alt+Left                        //移动到左边的终端</span></span>
<span class="line"><span>Alt+Right                       //移动到右边的终端</span></span>
<span class="line"><span>Ctrl+Shift+O                    //水平分割终端</span></span>
<span class="line"><span>Ctrl+Shift+E                    //垂直分割终端</span></span>
<span class="line"><span>Ctrl+Shift+Right                //在垂直分割的终端中将分割条向右移动</span></span>
<span class="line"><span>Ctrl+Shift+Left                 //在垂直分割的终端中将分割条向左移动</span></span>
<span class="line"><span>Ctrl+Shift+Up                   //在水平分割的终端中将分割条向上移动</span></span>
<span class="line"><span>Ctrl+Shift+Down                 //在水平分割的终端中将分割条向下移动</span></span>
<span class="line"><span>Ctrl+Shift+S                    //隐藏/显示滚动条</span></span>
<span class="line"><span>Ctrl+Shift+F                    //搜索</span></span>
<span class="line"><span>Ctrl+Shift+C                    //复制选中的内容到剪贴板</span></span>
<span class="line"><span>Ctrl+Shift+V                    //粘贴剪贴板的内容到此处</span></span>
<span class="line"><span>Ctrl+Shift+W                    //关闭当前终端</span></span>
<span class="line"><span>Ctrl+Shift+Q                    //退出当前窗口，当前窗口的所有终端都将被关闭</span></span>
<span class="line"><span>Ctrl+Shift+X                    //最大化显示当前终端</span></span>
<span class="line"><span>Ctrl+Shift+Z                    //最大化显示当前终端并使字体放大</span></span>
<span class="line"><span>Ctrl+Shift+N or Ctrl+Tab        //移动到下一个终端</span></span>
<span class="line"><span>Ctrl+Shift+P or Ctrl+Shift+Tab  //Crtl+Shift+Tab 移动到之前的一个终端</span></span></code></pre></div><p><strong>第二部份：有关各个标签之间的操作</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>F11                             //全屏开关</span></span>
<span class="line"><span>Ctrl+Shift+T                    //打开一个新的标签</span></span>
<span class="line"><span>Ctrl+PageDown                   //移动到下一个标签</span></span>
<span class="line"><span>Ctrl+PageUp                     //移动到上一个标签</span></span>
<span class="line"><span>Ctrl+Shift+PageDown             //将当前标签与其后一个标签交换位置</span></span>
<span class="line"><span>Ctrl+Shift+PageUp               //将当前标签与其前一个标签交换位置</span></span>
<span class="line"><span>Ctrl+Plus (+)                   //增大字体</span></span>
<span class="line"><span>Ctrl+Minus (-)                  //减小字体</span></span>
<span class="line"><span>Ctrl+Zero (0)                   //恢复字体到原始大小</span></span>
<span class="line"><span>Ctrl+Shift+R                    //重置终端状态</span></span>
<span class="line"><span>Ctrl+Shift+G                    //重置终端状态并clear屏幕</span></span>
<span class="line"><span>Super+g                         //绑定所有的终端，以便向一个输入能够输入到所有的终端</span></span>
<span class="line"><span>Super+Shift+G                   //解除绑定</span></span>
<span class="line"><span>Super+t                         //绑定当前标签的所有终端，向一个终端输入的内容会自动输入到其他终端</span></span>
<span class="line"><span>Super+Shift+T                   //解除绑定</span></span>
<span class="line"><span>Ctrl+Shift+I                    //打开一个窗口，新窗口与原来的窗口使用同一个进程</span></span>
<span class="line"><span>Super+i                         //打开一个新窗口，新窗口与原来的窗口使用不同的进程</span></span></code></pre></div>`,12)])])}const C=a(t,[["render",e]]);export{f as __pageData,C as default};
