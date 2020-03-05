import { graphql, buildSchema } from "graphql"
// https://mikefrancis.dev/blog/tiny-graphql-api-using-next-js

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root  = { hello: () => "Hello world!"};

export default async (req: any, res: any) => {
  const query = req.body.query;
  const response = await graphql(schema, query, root);

  return res.end(JSON.stringify(response))
}