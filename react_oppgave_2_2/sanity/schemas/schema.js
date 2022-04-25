// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "bob",
      title: "sir",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
        },
        {
          title: "Slogan",
          name: "slogan",
          type: "string",
        }, 
        {
          title: "Premable",
          name: "premable",
          type: "string",
        }, 
        {
          title: "Box",
          name: "box",
          type: "string",
        }, 
        {
          title: "Portable Text",
          name: "portable_text",
          type: "text",
        },
        {
          title: "Initial Content",
          name: "initial_content",
          type: "InitialContent",
        },    
      ],
    },
    {
			name: "InitialContent",
      title: "InitialContent",
      type: "object",
				fields: [
					{
						title: 'Title',

						name: 'title',

						type: 'string',
					},
					{
						title: 'Text',

						name: 'text',

						type: 'text',
					},
				],
			},
  ]),
})
