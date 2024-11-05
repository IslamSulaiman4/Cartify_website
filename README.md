
### Breakdown of the README:

1. **Project Name & Description**:
   - Describes the "Cartify Website" as a simple shopping site.
   
2. **Technologies Used**:
   -  The major technologies i used, including React, Axios, Bootstrap, react-router-dom, etc.

3. **Approach**:
  - Product Listing:
    Displays a list of products with their images, titles, and prices. Users can scroll through and browse the available products.
  - Product Details Page:
    Allows users to view more detailed information about a specific product, including a larger image, description, and price.
  - Product Categories:
    Users can filter products by categories (e.g., electronics, clothing, etc.), making it easier to find what they're looking for.
  - Responsive Design:
    The website is fully responsive, meaning it adjusts and works well on any screen size, from mobile phones to desktops.
  - User-Friendly Navigation:
    Simple and intuitive navigation using React Router to switch between pages like the product list and product details without reloading the page.
  - Smooth Product Carousel:
    A Swiper carousel is used to showcase featured products or product images in a dynamic and interactive way.
  - Loading Spinner:
    A loading spinner is shown while waiting for product data to be fetched from the API, improving the user experience.
  - Easy to Deploy:
    The site is ready to be deployed to platforms like Netlify, with all necessary environment variables set up for a smooth deployment process.

4. **Challenges Faced**:
   -
One of the main challenges I encountered during the deployment of the Cartify website to Netlify was related to the handling of environment variables.
Locally, the application relied on a .env file to store sensitive information like the API URL (VITE_API_URL=https://fakestoreapi.com), which was used to fetch product data. However,
after pushing the code to Netlify, the app was unable to access this environment variable in the production environment, leading to an issue where the API requests returned errors or failed.
The solution was to manually configure the environment variable directly in the Netlify dashboard. In the Build & Deploy > Environment section of the settings, I added the VITE_API_URL variable
with the appropriate value (https://fakestoreapi.com). This ensured that the application could access the correct API endpoint when deployed, resolving the issue and allowing the site to function
correctly in production.

5. **Running Locally**:
  To set up the Cartify website project locally, follow these steps:
   - Clone the repository to your local machine using the following command:git clone https://github.com/IslamSulaiman4/cartify-website.git
   - Navigate into the project directory:cd cartify-website
   - Install the project dependencies by running:npm install
   - Set up the environment variables: Create a .env file in the root of the project and add the necessary environment variables,
     for example:VITE_API_URL=https://fakestoreapi.com
   - Run the development server:npm run dev


  

7. **Deployment**:
   - Push to GitHub: Push my project to a GitHub repository.
   - Log in to Netlify: Sign in to my Netlify account.
   - Create a New Site: Click "New site from Git" and connect my GitHub repository.
   - Configure Build Settings:
       - Build Command: npm run build
       - Publish Directory: dist
   - Set Environment Variables: Go to Site settings > Build & deploy > Environment, and add VITE_API_URL=https://fakestoreapi.com.
   - Deploy: Click Deploy Site to trigger the build and deployment process.
   - Netlify provides a URL: https://cartify-website.netlify.app/
---

