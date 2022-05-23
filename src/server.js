const {Client} = require('@notionhq/client');

const notion =new Client({ auth: 'secret_PH2IQ5AdfgMtUiYd8PIG7lWYankBv7erRalastFIAtf'});

export const notionCall=(async () => {
  const databaseId = '62b7073e412a48cfa18d4ff5c2b1079c';
  const response = await notion.databases.query({ 
    database_id: databaseId,
    filter: {
      property:'Status',
      select: {
        equals: 'Live'
      }
    }
  })
  return response
})