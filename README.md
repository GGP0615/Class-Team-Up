# ClassTeamUp

ClassTeamUp is a Next.js application that provides user authentication and team generation functionality for educational settings.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Development Server](#running-the-development-server)
- [Editing the Project](#editing-the-project)
- [Testing](#testing)
- [Learn More](#learn-more)
- [Deployment](#deployment)

## Features

- User registration and login
- Protected dashboard for authenticated users
- Secure password hashing
- Responsive design
- Team generation functionality (coming soon)

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Supabase
- Tailwind CSS
- Jest for testing

## Getting Started

### 1. Prerequisites

Ensure that you have the following installed on your machine:
- Node.js (version 12.x or later)
- npm (comes with Node.js) or yarn (optional)

### 2. Clone the Repository

git clone https://github.com/GGP0615/Class-Team-Up.git
cd Class-Team-Up

### 3. Install Dependencies

npm install


### 4. Set up environment variables

Create a `.env.local` file in the root directory and add your Supabase credentials:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


## Running the Development Server

To start the development server, run:

npm run dev


Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Editing the Project

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load custom fonts.

## Testing

Run the test suite with:

npm test


## Learn More

To learn more about Next.js, explore these resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js).

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details, check our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
