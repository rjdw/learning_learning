# learning_learning

Using LLMs for medical coding



**Table of contents:**
 - [Description](#description)
 - [Current Progress](#progress)
 - [Timeline](#timeline)
 - [Installation](#install)
 - [Further Reading](#links)

<a id="description"></a>
## Description

We are trying to fully automate the medical coding problem with LLMs.  
Current medical coding uses computer assisted coding (CAC) to aid medical coders. However, these technologies are typically rule-based systems from old tech, and they provide low accuracy and require human supervision.  

The goal is to be able to take input regarding 
    
    - Clinical Information
        This includes detailed patient records such as doctors' notes, laboratory and test results, radiology reports, and other relevant medical documentation. These records provide the coder with the necessary clinical narratives and medical information regarding the patient's diagnosis, treatment, and procedures performed.

    - Patient Information
        This includes demographic details and insurance information that may affect coding decisions, especially for procedures covered under specific insurance plans.

    - Hospital or Physician Specific Protocols
        Coders may also receive guidelines and documentation standards specific to the hospital or physician's office where they work, which helps maintain consistency in coding practices.

And receive accurate output regarding
    
    - Diagnosis Codes
        From the clinical information, coders extract diagnoses and assign the appropriate ICD-10 codes. These codes are crucial for documentation and billing purposes.

    - Procedure Codes
        Coders use CPT (Current Procedural Terminology) codes for procedures and treatments provided during patient care. In settings where additional supplies, services, or equipment are involved, HCPCS (Healthcare Common Procedure Coding System) codes are also used.

    - Other Relevant Codes
        Depending on the context, coders might also use DRG (Diagnosis-Related Group) codes for inpatient hospital settings to categorize the episode of care for reimbursement purposes.

<a id="progress"></a>
## Current Progress  

See [Progess Tracking](./progress.md)


 <a id="timeline"></a>

Goal 1:
    We want to be able to reproduce the results from [Stupid Paper](https://ai.nejm.org/doi/full/10.1056/AIdbp2300040), where they attempt some LLM API calls to match codes with their descriptions.
    This result is bad, and the authors did not put any effort beyond API calls to well-known LLM models.  

    We want to be able to display this on the website. This may need to be a site hosted fr. Not a github site. We'll see.


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

- [LLMs don't work for medical coding LOL](https://ai.nejm.org/doi/full/10.1056/AIdbp2300040)
- [LLM working better for medical coding with Verifier model](https://arxiv.org/pdf/2311.13735)
- [CAC Basics](https://www.foreseemed.com/computer-assisted-coding)
- [Interesting Attempt at LLM Medical Coding](https://github.com/shamantechnology/med-coder-llm)