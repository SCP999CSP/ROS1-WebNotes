# Chapter 2: ROS Communication Mechanisms

Robots represent highly complex systems that may integrate various sensors (LiDAR, cameras, GPS, etc.) and motion control implementations. To achieve decoupling, in ROS, each functional point operates as an independent process, with every process running separately. More precisely, **ROS is a distributed framework of processes (also called *Nodes*)**. These processes can even be distributed across different machines that collaborate to share computational load. However, this raises a question: how do different processes communicate? In other words, how is data exchanged between different processes? This leads us to introduce the communication mechanisms in ROS.

The basic communication mechanisms in ROS mainly include the following three implementation strategies:

- **Topic Communication** (Publish-Subscribe Model)
- **Service Communication** (Request-Response Model)
- **Parameter Server** (Parameter Sharing Model)

The main content of this chapter is to introduce the application scenarios, theoretical models, code implementation, and related operation commands for each communication mechanism. The learning objectives for this chapter are as follows:

- Be able to proficiently explain the commonly used communication mechanisms in ROS.
- Understand the theoretical model of each communication mechanism in ROS.
- Implement case studies corresponding to each communication mechanism through code.
- Skillfully use some operational commands in ROS.
- Independently complete related hands-on case studies.

**Case Demonstrations:**

1.  **Topic Demonstration Case:**
    Control a turtle to perform circular motion.

![gif](./images/2/01_案例01_乌龟画圆.gif)

Get Turtle Pose

![gif](./images/2/案例02_乌龟位姿.gif)

2.Service Demo Case: Generate a turtle at a specified location

![png](./images/2/02_案例2_生成小乌龟.png)

3.Parameter Demo Case: Change the background color of the turtle window+

![png](./images/2/03_案例3_改变背景色.png)