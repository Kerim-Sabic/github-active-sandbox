<div align="center">

# GitHub Active Sandbox

### A clean automation playground for testing GitHub workflows, commits, pull requests, issues, and contribution activity.

<br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:7c3aed,100:06b6d4&height=220&section=header&text=GitHub%20Active%20Sandbox&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Automation.%20Experiments.%20GitHub%20Activity.&descAlignY=58&descSize=16" />

<br />

<p>
  <img src="https://img.shields.io/github/last-commit/Kerim-Sabic/github-active-sandbox?style=for-the-badge&color=7c3aed" />
  <img src="https://img.shields.io/github/commit-activity/m/Kerim-Sabic/github-active-sandbox?style=for-the-badge&color=06b6d4" />
  <img src="https://img.shields.io/github/repo-size/Kerim-Sabic/github-active-sandbox?style=for-the-badge&color=0ea5e9" />
  <img src="https://img.shields.io/github/stars/Kerim-Sabic/github-active-sandbox?style=for-the-badge&color=facc15" />
</p>

<br />

**Built as a controlled sandbox for GitHub activity, automation testing, and workflow experimentation.**

</div>

---

## Overview

`github-active-sandbox` is a lightweight repository created for experimenting with GitHub activity patterns in a safe, disposable environment.

It can be used to test:

- automated commits  
- pull request creation  
- branch workflows  
- GitHub Actions experiments  
- contribution graph activity  
- repository automation scripts  
- issue and PR lifecycle testing  

This repository is intentionally simple, clean, and safe to reset.

---

## Why This Exists

Modern GitHub workflows often involve automation: bots, scheduled commits, CI/CD, pull requests, issue management, and activity tracking.

Testing those workflows directly inside serious production repositories can create noise.

This sandbox solves that problem.

It gives you a clean place to experiment without affecting important projects.

---

## Core Ideas

<table>
  <tr>
    <td><b>Safe</b></td>
    <td>Designed for experiments. Nothing mission-critical lives here.</td>
  </tr>
  <tr>
    <td><b>Simple</b></td>
    <td>Minimal structure, easy to inspect, easy to reset.</td>
  </tr>
  <tr>
    <td><b>Automatable</b></td>
    <td>Useful for testing scripts, bots, commits, and workflow behavior.</td>
  </tr>
  <tr>
    <td><b>Disposable</b></td>
    <td>Can be deleted, rebuilt, or repurposed without risk.</td>
  </tr>
</table>

---

## Potential Use Cases

```mermaid
flowchart LR
    A[Automation Script] --> B[Sandbox Repo]
    B --> C[Commit Test]
    B --> D[Pull Request Test]
    B --> E[GitHub Action Test]
    B --> F[Issue Workflow Test]
    C --> G[Validate Behavior]
    D --> G
    E --> G
    F --> G
