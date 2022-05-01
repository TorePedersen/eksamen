
import client from '../client'

const eventFields = `
  title,
  'slug': slug.current,
  slogan,
  preAmble,
  box,
  portableText,
  initialContent,


`

export const getEvents = async () => {
  const data = await client.fetch(`*[_type == "service"]{${eventFields}}`);
  return data;
};