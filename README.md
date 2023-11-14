# React Images Gallery

## Description
This project is connected to a google drive folder and displays the images in a gallery. The images are displayed in a grid. The images can be clicked to view them in a modal.
You can also upload new images from your computer although they won't be saved after refresh.
You can see a live demo here: [live demo](https://react-images-gallery.netlify.app/)

## Installation

### Prerequisites
#### Node.js
* Make sure you have Node.js installed on your machine. You can download it from here: [node.js](https://nodejs.org/en/)

### Installing
#### 1. Clone the repo
```
git clone https://github.com/Omri-Lvy/React_Photo_Gallery.git
cd React_Photo_Gallery
```
#### 2. Install dependencies
```
npm install
```
#### 3. Get Google Drive API Key and Folder ID:
* Visit the Google Cloud Console.
* Create a new project.
* Enable the Google Drive API for your project.
* Create API Key, restrict it if you liked to.
#### 4. Configure the Project:
* Create a .env file in the root directory.
* Add the following lines to the .env file, replacing YOUR_GOOGLE_DRIVE_API_KEY and YOUR_GOOGLE_DRIVE_FOLDER_ID with your API key and folder ID:
```
REACT_APP_GOOGLE_DRIVE_API_KEY=YOUR_GOOGLE_DRIVE_API_KEY
REACT_APP_GOOGLE_DRIVE_FOLDER_ID=YOUR_GOOGLE_DRIVE_FOLDER_ID
```
#### 5. Run the project
```
npm start
```
The development server should start, and you can access the app at http://localhost:3000 in your web browser.
#### 6. Access the app
* Open your browser and go to http://localhost:3000
* You should see the app running.