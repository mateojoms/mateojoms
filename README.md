# IT Knowledge Base Website

A web-based IT support platform designed to centralize IT issues, solutions, and troubleshooting guides. Built using **Google Apps Script**, **Google Sheets**, **HTML**, **CSS**, and **JavaScript**, optimized for both web and mobile usage, including Android WebView wrapping.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Objectives](#objectives)  
3. [System Architecture](#system-architecture)  
4. [Key Features](#key-features)  
5. [Issue Management](#issue-management)  
6. [Search and Filters](#search-and-filters)  
7. [Deployment](#deployment)  
8. [Android App Wrapper](#android-app-wrapper)  
9. [Security](#security)  
10. [Maintenance and Updates](#maintenance-and-updates)  
11. [Future Enhancements](#future-enhancements)  
12. [Screenshots & UI Flow](#screenshots--ui-flow)  
13. [Conclusion](#conclusion)

---

## Introduction

The IT Knowledge Base Website centralizes IT support resources in one platform, helping reduce repetitive support requests and enabling fast access to issue resolutions.

---

## Objectives

- Provide a centralized IT support reference  
- Reduce repetitive support requests  
- Enable fast issue search and filtering  
- Allow administrators to manage issues dynamically  
- Support mobile and Android app access

---

## System Architecture

**Frontend:**  
- HTML, CSS, JavaScript  
- Responsive card-based UI  
- Category filters, search, and modals  

**Backend:**  
- Google Apps Script Web App  
- Google Sheets as database  

**Integration:**  
- `google.script.run` for client-server communication

---

## Key Features

- Responsive issue cards display  
- Search and keyword filtering  
- Category filters (dropdown)  
- Modal-based issue details  
- View count tracking and most-viewed issues  
- Mobile-friendly UI  
- Android WebView wrapper support  
- Admin-only add issue functionality

---

## Issue Management

Each issue contains:

- Issue ID  
- Title  
- Category  
- Description  
- Step-by-step resolution  
- View count  
- Date created/updated  

All issues are stored and managed in **Google Sheets**.

---

## Search and Filters

Users can:

- Search issues by title or keywords  
- Filter by category using tabs or chips  
- View most viewed issues  
- Access issues via shared URLs

---

## Deployment

The website is deployed as a **Google Apps Script Web App**.

**Deployment settings:**  
- Execute as: Me  
- Access: Anyone within Village Enterprise  

Updates are reflected automatically by updating the existing deployment.

---

## Android App Wrapper

The website is wrapped into an Android application using a **WebView**.  

**Benefits:**  
- No backend duplication  
- Instant updates  
- Native app experience  

**Flow:**  
- App loads deployed Apps Script URL  
- Users access the same search, filter, and modal behavior

---

## Security

- Google authentication for admin users  
- Read-only access for public users  
- No sensitive data stored locally  
- HTTPS enforced by Google Apps Script

---

## Maintenance and Updates

Administrators can:

- Update content via Google Sheets  
- Modify UI via HTML/CSS/JS  
- Deploy updates without changing the app URL  

End users automatically receive updates.

---

## Future Enhancements

- Offline mode  
- Admin panel improvements  
- Push notifications  
- Role-based access control  
- Analytics dashboard  
- AI-assisted issue recommendations

---

## Screenshots & UI Flow

**UI Screenshots (Reference)**  
- Home Page – Search bar, category dropdown, issue cards  
- Issue Detail Modal – Title, category, steps  

**UI Flow:**  
1. User opens the Knowledge Base home page  
2. User searches or filters issues by category  
3. User clicks an issue card  
4. Issue detail modal opens and view count increments  
5. User reads steps or shares the deep link  
6. Modal closes to return to the card list  

**Android App Flow:**  
- App Launch → WebView Load → Home Page Display  
- Same search, filter, modal, and deep-link behavior  
- Updates reflected instantly without app updates

---

## Conclusion

The IT Knowledge Base Website provides a scalable, low-maintenance, and cost-effective solution for managing IT support knowledge. Its integration with Google Workspace and Android platforms ensures accessibility, reliability, and ease of use.
