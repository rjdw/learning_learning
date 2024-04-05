# learning_learning

We going to try and optimize online education.




**Table of contents:**
 - [Description](#description)
 - [Current Progress](#progress)
 - [Timeline](#timeline)
 - [Installation](#install)
 - [Further Reading](#links)

<a id="description"></a>
## Description
Current online learning platforms such as coursera, youtube, or khan academy are great resources that provide quality eduation for students such that they can learn material at their own time and pace. However, the material does not take the feedback from the user into account of the pace, material, and checkpoints and in place. Instead the student is expected to pace themselves throughout the entire process and the intermittent check ups may not sufficiently provide the student with more practice. Each student requires different learning strategies and as such, the teaching platform should also be able to adapt its teaching, material exposure, and questions to maximally teach the student.

Using existing Coursera or YouTube courses.
Have the ability to plan out lessons for available time. Review topics where bad performance is detected, meaning indicators that may mean the student is not absorbing information optimally. Attention tracking, give breaks. Rewind video, or review topics from earlier in lesson. Biometric monitoring, etc. Eventually, we want to be able to provide each student with a personalized learning plan of material, quizzes, etc. that will optimize their learning. Can even try to characterize what kind of learner they are, such as visual, verbal, or what types of exercises they respond best to so that when they can begin to build their own personalized plans for independent study.

<a id="progress"></a>
## Current Progress  

See [Progess Tracking](./progress.md)


 <a id="timeline"></a>
## Timeline
- Week 1:
    - Figure out timeline
    - Look into field
- Week 2:
    - implement pomodoro method
        - simplest methodology without need for ML
        - implement this first and see what's up after
    - github hosted website to start
        - simple to use
        - free to host

- Week 3:

- Week 4:

- Week 5:

- Week 6:


<a id="install"></a>
## Installation


We'll figure this out later. Not sure which direction we're going right now.
If this is a ML project or a nice UI with a bunch of API calls. We'll see.


**Devs - For Mac M1 Users**

This requirements file is for M1! 
This uses tensorflow-macos which is for M1 chip only!
If you use something else, figure it out yourself. You just need to run tensorflow.

Install Conda:
[Conda](https://conda.io/projects/conda/en/latest/user-guide/install/macos.html)


Python version:  
```
Python 3.10.9
```

Clone from git repo:
```
git clone git@github.com:rjdw/learning_learning.git
cd learning_learning
```

Python venv, create and activate
```
conda create --name <env_name> --file requirements.txt
conda activate <env_name>
```

**or make your environment and install with pip**

Install Requirements
```
pip install -r requirements.txt
```

 <a id="links"></a>
## Futher Reading

- [CMU Sphinx](https://cmusphinx.github.io/wiki/tutorial/)
