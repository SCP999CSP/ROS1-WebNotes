import{_ as i,c as a,o as n,af as l}from"./chunks/framework.BYZYS_oT.js";const g=JSON.parse('{"title":"2.2.3服务通信自定义srv调用","description":"","frontmatter":{},"headers":[],"relativePath":"Language/中文/2.2.3服务通信自定义srv调用.md","filePath":"Language/中文/2.2.3服务通信自定义srv调用.md"}'),p={name:"Language/中文/2.2.3服务通信自定义srv调用.md"};function h(t,s,k,e,r,d){return n(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="_2-2-3服务通信自定义srv调用" tabindex="-1">2.2.3服务通信自定义srv调用 <a class="header-anchor" href="#_2-2-3服务通信自定义srv调用" aria-label="Permalink to “2.2.3服务通信自定义srv调用”">​</a></h1><p><strong>需求:</strong></p><blockquote><p>编写服务通信，客户端提交两个整数至服务端，服务端求和并响应结果到客户端。</p></blockquote><p><strong>分析:</strong></p><p>在模型实现中，ROS master 不需要实现，而连接的建立也已经被封装了，需要关注的关键点有三个:</p><ol><li>服务端</li><li>客户端</li><li>数据</li></ol><p><strong>流程:</strong></p><ol><li>编写服务端实现；</li><li>编写客户端实现；</li><li>为python文件添加可执行权限；</li><li>编辑配置文件；</li><li>编译并执行。</li></ol><h4 id="_0-vscode配置" tabindex="-1">0.vscode配置 <a class="header-anchor" href="#_0-vscode配置" aria-label="Permalink to “0.vscode配置”">​</a></h4><p>需要像之前自定义 msg 实现一样配置settings.json 文件，如果以前已经配置且没有变更工作空间，可以忽略，如果需要配置，配置方式与之前相同:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;python.autoComplete.extraPaths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;/opt/ros/noetic/lib/python3/dist-packages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_1-服务端" tabindex="-1">1.服务端 <a class="header-anchor" href="#_1-服务端" aria-label="Permalink to “1.服务端”">​</a></h4><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#! /usr/bin/env python</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    需求: </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        编写两个节点实现服务通信，客户端节点需要提交两个整数到服务器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        服务器需要解析客户端提交的数据，相加后，将结果响应回客户端，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        客户端再解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    服务器端实现:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        1.导包</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        2.初始化 ROS 节点</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        3.创建服务对象</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        4.回调函数处理请求并产生响应</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        5.spin 函数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1.导包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demo03_server_client.srv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AddInts,AddIntsRequest,AddIntsResponse</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回调函数的参数是请求对象，返回值是响应对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doReq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 解析提交的数据</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.num2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.loginfo(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;提交的数据:num1 = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, num2 = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, sum = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,req.num1, req.num2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 创建响应对象，赋值并返回</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # resp = AddIntsResponse()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # resp.sum = sum</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AddIntsResponse(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resp</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 2.初始化 ROS 节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.init_node(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;addints_server_p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 3.创建服务对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy.Service(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AddInts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,AddInts,doReq)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 4.回调函数处理请求并产生响应</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 5.spin 函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.spin()</span></span></code></pre></div><h4 id="_2-客户端" tabindex="-1">2.客户端 <a class="header-anchor" href="#_2-客户端" aria-label="Permalink to “2.客户端”">​</a></h4><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#! /usr/bin/env python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    需求: </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        编写两个节点实现服务通信，客户端节点需要提交两个整数到服务器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        服务器需要解析客户端提交的数据，相加后，将结果响应回客户端，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        客户端再解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    客户端实现:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        1.导包</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        2.初始化 ROS 节点</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        3.创建请求对象</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        4.发送请求</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        5.接收并处理响应</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    优化:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        加入数据的动态获取</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1.导包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demo03_server_client.srv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #优化实现</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sys.argv) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rospy.logerr(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请正确提交参数&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sys.exit(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 2.初始化 ROS 节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.init_node(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AddInts_Client_p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 3.创建请求对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy.ServiceProxy(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AddInts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,AddInts)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 请求前，等待服务已经就绪</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 方式1:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # rospy.wait_for_service(&quot;AddInts&quot;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 方式2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client.wait_for_service()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 4.发送请求,接收并处理响应</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 方式1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # resp = client(3,4)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 方式2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # resp = client(AddIntsRequest(1,5))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 方式3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    req </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AddIntsRequest()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # req.num1 = 100</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # req.num2 = 200 </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #优化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    req.num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sys.argv[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    req.num2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sys.argv[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client.call(req)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.loginfo(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;响应结果:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,resp.sum)</span></span></code></pre></div><h4 id="_3-设置权限" tabindex="-1">3.设置权限 <a class="header-anchor" href="#_3-设置权限" aria-label="Permalink to “3.设置权限”">​</a></h4><p>终端下进入 scripts 执行:<code>chmod +x *.py</code></p><h4 id="_4-配置-cmakelists-txt" tabindex="-1">4.配置 CMakeLists.txt <a class="header-anchor" href="#_4-配置-cmakelists-txt" aria-label="Permalink to “4.配置 CMakeLists.txt”">​</a></h4><p><strong>CMakeLists.txt</strong></p><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">catkin_install_python(PROGRAMS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scripts/AddInts_Server_p.py </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scripts/AddInts_Client_p.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DESTINATION </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CATKIN_PACKAGE_BIN_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="_5-执行" tabindex="-1">5.执行 <a class="header-anchor" href="#_5-执行" aria-label="Permalink to “5.执行”">​</a></h4><p><strong>流程:</strong></p><ul><li>需要先启动服务:<code>rosrun 包名 服务</code></li><li>然后再调用客户端 :<code>rosrun 包名 客户端 参数1 参数2</code></li></ul><p><strong>结果:</strong></p><p>会根据提交的数据响应相加后的结果。</p>`,25)])])}const y=i(p,[["render",h]]);export{g as __pageData,y as default};
