# Company-Insights-Bot

## Overview
This repository contains the code and instructions to deploy a Chatbot that provides daily bistro menus and holiday information. The bot is powered by a Google Cloud Function and can be configured to work in direct messages within the Hangouts Chat platform.

## Prerequisites
Before you begin, ensure that you have completed the following steps:

1) Google Cloud Function Setup:
- Save your bot function.
- Obtain the URL for your function (FUNCTION_URL).

2) Google Cloud Console Configuration:
- Navigate to the Google Cloud Console for the project configured for the Google Cloud Function.
- Go to APIs and Services, click on Library, and search for the Chatbot API.

## Configuration Steps
Follow these steps to configure and publish your Hangouts Chatbot:

### Bot Name and Description
- Set the Bot Name.
- Enter a suitable description.

### Avatar URL
- Provide a URL to a 128x128 image for the bot's avatar. You may use a sample image from the official documentation:.

### Functionality
- Choose "Bot works in direct messages" since the bot is designed for users sending direct messages.

### Connection Settings
- Select "Bot URL" and provide the FUNCTION_URL in the designated field.

### Verification Token
- Copy the Verification Token value from the configuration and paste it into the index.js file of your Cloud Function.

### Permissions
- Leave the Permissions field as default.

### Save Changes
- Click on SAVE CHANGES to apply the configuration.

## Usage
To use the Chatbot in Google Chat:
- Visit chat.google.com and log in with your account.
- In the Space, click in the area to add a new bot.
- Search for the bot name and start chatting with it.

