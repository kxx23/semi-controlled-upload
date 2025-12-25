# semi-controlled-upload

A **semi-controlled React Upload component** that explicitly separates
**business-facing value** from **UI/runtime state**.

This project is not a drop-in replacement for existing Upload components.
It is an exploration of **state boundaries**, **change semantics**, and
**predictable data models** in complex upload flows.

## Motivation

In real-world applications, file upload is rarely just a UI concern.

Common problems include:

- Upload runtime state (`uploading`, `progress`, `error`) leaking into business logic
- Unclear semantics of `onChange` during intermediate states
- Tight coupling between UI components and persistence models
- Increasing complexity as features like preview, validation, and batch upload are added

This project proposes a **semi-controlled model** to address these issues.
