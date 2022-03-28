import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const REGION = "ap-southeast-2"; 
const ddbClient = new DynamoDBClient({ region: REGION });
export { ddbClient };