---
title: "Wireless Signal Processing at the Edge"
categories:
  - blog
tags:
  - jetson nano
  - SDR
---

In Digital Signal Processing (DSP) field, traditional learning is mostly built on simulation software like Matlab or Python libraries like numpy and scipy. Students are often given assignments to apply their theoretical knowledge playing with syntatic data. But this approach comes with its shortcomings. First, in real world more factors come into play and signals on-air differ from syntatically generated ones. So, solutions that work on simulation environment must be confirmed to work with real signals as well. Second, in real life signal processing software must keep up with the data rate. Though this may not be a major concern with simulated data, performance and sustainability are critical for the application to be successful. 

This project aims to help students better understand wireless communication systems with hands-on training. Software Defined Radio (SDR) embraces several different technologies which are highly challenging. But it is also a powerful tool to understand wireless communications. SDR powered by Jetson Nano will provide students to apply their theoretical knowledge on real, on-air signals around us. Jetson Nano will be used as computation device for signal processing. Students will capture on-air signals with a low-cost RF front-end like RTL-SDR and apply signal processing techniques to complete assigments. 

Students will benefit a lot from working with such an environment.
- Lectures supported with Jetson-powered lab sessions will enable students to learn difficult concepts easily. 
- It will improve their programming skills, leveraging both CPU and GPU. Students can choose C++ or Python as their programming language. 
- Because Jetson Nano is a heteregenous computing environment they can further accelerate their code using CUDA programming. GPU computation can provide significant speedups if properly applied. 
- Jetson platform also enables them to apply AI on radio frequency domain. Some further signal analysis jobs like "modulation recognition" or "RF fingerprinting" can make use of AI. 
- Jetson Nano provides low-cost solution to computing node where signal processing will actually happen. At edge device computing, capturing data from RF front-end and processing it occur on the same device. Edge computing is necessary when latency is not tolerable and real-time response is needed. Also bandwidth is another consideration. As bandwidth increases, data processing requirements increase, too. Passing data to cloud or data center may not be possible.  
- Nvidia has many great online resources accessible for students. Students can learn more by taking courses offered by [DLI](https://www.nvidia.com/en-us/training/online/). Courses will teach students on topics like parallelization and GPU programming using C/C++/Python CUDA. 

