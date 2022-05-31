# Cata-Portofolio
  This is a commisioned personal portfolio project.

## Tecnologies
  This was done with React and Styled Components, integrated with the Notion API so the Notion APP can be used as a CMS for the Blog entries.
  
### Disclaimer
  IT IS STILL WIP, there are many texts, sections and pages that are not implemented yet, and either have placeholder text and images or simply do not exist.
  Better done than perfect right?

### Notion
![image](https://user-images.githubusercontent.com/65029266/171017645-c3c9a81e-46ed-40d9-a264-758c0584713b.png)
The "Blog" part of this project is done using the Notion API, the user has a personalized page on its Notion workspace, with a table on board view, where they can write and organize its articles and drag-n-drop them into the different stages, once one is droped in the LIVE section, that article is fetched and displayed in the page.

![image](https://user-images.githubusercontent.com/65029266/171018229-9f8e1a06-7827-417c-bee0-0f6ec7871e21.png)
Every article has a set of properties witch can be customised. One property due to add (once the article cathegories are defined by user) is the cathegory in witch the article falls, so it can be sorted later on.

![image](https://user-images.githubusercontent.com/65029266/171018668-c8705a6c-efc2-4af5-a144-d9108f78310e.png)
The content is passed as plain text, so, using a HTMLparser can pass an html tag styled text and display that, it can also open up the posibility to add custom tags for personalized content for the user.

### Special effects
  ![image](https://user-images.githubusercontent.com/65029266/171019092-5eab7f95-b82c-46b7-9edd-90589da79d56.png)
for the sparkle effects and some hover effects im using the <Sparkle>, <Boop> custom component and useSparkle, useBoop custom hook from Josh Comeau

### Whats already done (ish)

#### HOME
![image](https://user-images.githubusercontent.com/65029266/171015610-93deca9d-97c6-4ad8-b8ea-151324216718.png)
  Home page/ landing page, has many sections with personal information and a curriculum preview image witch downloads the actual curriculum. There's also a contact section witch is integrated with Formspree for actual mail contact, it is up and running.
  ![image](https://user-images.githubusercontent.com/65029266/171016086-00650265-36e6-4981-8aa3-3e6be9d7e548.png)

#### Portfolio
![image](https://user-images.githubusercontent.com/65029266/171016166-7221ca98-066d-473a-89e0-8c9f9e624fd6.png)
  Portfolio page, having a hero section and (to be added) several cathegories for different styles of writing that the projects are sorted (ie. journalism
Chronicles, copywriting, etc). Only shows the latest 4 articles of each cathegory, showing a NEW! tag and sparkles effect for the latest one

#### Blog
  ![image](https://user-images.githubusercontent.com/65029266/171016777-ea1fa586-4916-4afc-8aa5-76611eb441bd.png)
  Full display of every article published in each cathegory.
  
#### Article Page
![image](https://user-images.githubusercontent.com/65029266/171016984-6d2bda0f-266b-4a74-8181-c777ef6e038f.png)
  Every article has its own full page, with full content and format.
  
