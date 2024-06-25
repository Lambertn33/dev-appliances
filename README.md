# Jobs Appliances

This project is a Next.js / Express application for managing job postings and applications. It is structured using the Nx monorepo.

# Getting Started

Prerequisites
Ensure you have the following installed on your system:

Node.js (v14.x or higher)
npm (v6.x or higher)
Nx

# Installation

After cloning the project repository, navigate to the project root and install the dependencies:

git clone <repository-url>
cd <project-directory>
npm install

# Environment Variables

the environment variables for the project. Create a .env file in the root directory and add the following variables (follow the .env.local found in apps/ui/.env.local):

NEXT_PUBLIC_API_URL=http://localhost:6000
Adjust the URL according to your backend server setup.

# Running the Project

# Run the Server

To start the backend server:

npx nx serve server

# Run the UI

To start the frontend application

npx nx serve ui

The application should now be running on http://localhost:4200.
