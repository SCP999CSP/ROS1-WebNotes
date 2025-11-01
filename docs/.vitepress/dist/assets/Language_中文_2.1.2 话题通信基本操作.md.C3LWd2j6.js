import{_ as i,c as a,o as n,af as l}from"./chunks/framework.BYZYS_oT.js";const g=JSON.parse('{"title":"2.1.2 话题通信基本操作","description":"","frontmatter":{},"headers":[],"relativePath":"Language/中文/2.1.2 话题通信基本操作.md","filePath":"Language/中文/2.1.2 话题通信基本操作.md"}'),p={name:"Language/中文/2.1.2 话题通信基本操作.md"};function h(k,s,t,e,r,E){return n(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="_2-1-2-话题通信基本操作" tabindex="-1">2.1.2 话题通信基本操作 <a class="header-anchor" href="#_2-1-2-话题通信基本操作" aria-label="Permalink to “2.1.2 话题通信基本操作”">​</a></h1><p><strong>需求:</strong></p><blockquote><p>编写发布订阅实现，要求发布方以10HZ(每秒10次)的频率发布文本消息，订阅方订阅消息并将消息内容打印输出。</p></blockquote><p><strong>分析:</strong></p><p>在模型实现中，ROS master 不需要实现，而连接的建立也已经被封装了，需要关注的关键点有三个:</p><ol><li>发布方</li><li>接收方</li><li>数据(此处为普通文本)</li></ol><p><strong>流程:</strong></p><ol><li>编写发布方实现；</li><li>编写订阅方实现；</li><li>为python文件添加可执行权限；</li><li>编辑配置文件；</li><li>编译并执行。</li></ol><h4 id="_1-发布方" tabindex="-1">1.发布方 <a class="header-anchor" href="#_1-发布方" aria-label="Permalink to “1.发布方”">​</a></h4><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#! /usr/bin/env python</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    需求: 实现基本的话题通信，一方发布数据，一方接收数据，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         实现的关键点:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         1.发送方</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         2.接收方</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         3.数据(此处为普通文本)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         PS: 二者需要设置相同的话题</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    消息发布方:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        循环发布信息:HelloWorld 后缀数字编号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    实现流程:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        1.导包 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        2.初始化 ROS 节点:命名(唯一)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        3.实例化 发布者 对象</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        4.组织被发布的数据，并编写逻辑发布数据</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1.导包 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> std_msgs.msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #2.初始化 ROS 节点:命名(唯一)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.init_node(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;talker_p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #3.实例化 发布者 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pub </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy.Publisher(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chatter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,String,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">queue_size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #4.组织被发布的数据，并编写逻辑发布数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#创建 msg 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    msg_front </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello 你好&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #计数器 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 设置循环频率</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy.Rate(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy.is_shutdown():</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #拼接字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        msg.data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg_front </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(count)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pub.publish(msg)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rate.sleep()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rospy.loginfo(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;写出的数据:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,msg.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h4 id="_2-订阅方" tabindex="-1">2.订阅方 <a class="header-anchor" href="#_2-订阅方" aria-label="Permalink to “2.订阅方”">​</a></h4><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#! /usr/bin/env python</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    需求: 实现基本的话题通信，一方发布数据，一方接收数据，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         实现的关键点:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         1.发送方</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         2.接收方</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         3.数据(此处为普通文本)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    消息订阅方:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        订阅话题并打印接收到的消息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    实现流程:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        1.导包 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        2.初始化 ROS 节点:命名(唯一)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        3.实例化 订阅者 对象</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        4.处理订阅的消息(回调函数)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        5.设置循环调用回调函数</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1.导包 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> std_msgs.msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doMsg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.loginfo(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I heard:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,msg.data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #2.初始化 ROS 节点:命名(唯一)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.init_node(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;listener_p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #3.实例化 订阅者 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sub </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rospy.Subscriber(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chatter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,String,doMsg,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">queue_size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #4.处理订阅的消息(回调函数)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #5.设置循环调用回调函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rospy.spin()</span></span></code></pre></div><h4 id="_3-添加可执行权限" tabindex="-1">3.添加可执行权限 <a class="header-anchor" href="#_3-添加可执行权限" aria-label="Permalink to “3.添加可执行权限”">​</a></h4><p>终端下进入 scripts 执行:<code>chmod +x *.py</code></p><h4 id="_4-配置-cmakelists-txt" tabindex="-1">4.配置 CMakeLists.txt <a class="header-anchor" href="#_4-配置-cmakelists-txt" aria-label="Permalink to “4.配置 CMakeLists.txt”">​</a></h4><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">catkin_install_python(PROGRAMS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scripts/talker_p.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scripts/listener_p.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DESTINATION </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CATKIN_PACKAGE_BIN_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="_5-执行" tabindex="-1">5.执行 <a class="header-anchor" href="#_5-执行" aria-label="Permalink to “5.执行”">​</a></h4><p>1.启动 roscore;</p><p>2.启动发布节点;</p><p>3.启动订阅节点。</p><p>运行结果与引言部分的演示案例1类似。</p><hr><p>PS：可以使用 rqt_graph 查看节点关系。</p>`,23)])])}const F=i(p,[["render",h]]);export{g as __pageData,F as default};
