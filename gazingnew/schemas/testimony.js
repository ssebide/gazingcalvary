export default {
    name: 'testimony',
    title: 'Testimony',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96,
            },
          },
        
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: 'authortitle',
            title: 'AuthorTitle',
            type: 'string',
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ],
  };