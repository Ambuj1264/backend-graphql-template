export const root = `
  # Query Definitions
  type Query {
    login(input : CreateUserInput): UserResponse
    sendMailForForgetPassword (email: String!): String
    verifyToken(token: String!): VerifyTokenResponse
    FindDemoToolDetails(toolUniqueName: String!): DemoResponse
  }
  
  # Mutation Definitions  
 type Mutation {
  changePassword(password: String!, email:String!): User
  createUser(input : CreateUser): User
  fogetPassword(input: forgetInput): User
  createUserByProvider(email:String!, name: String!, image: String): User
  createDemoDetails(input : DemoInput): DemoResponse
  paymentCheckout (userId: String!): JSON
  subscriptionCheckByUser(userId: String!): User 
  subscriptionApproval(userId: String!, type:String!): User
 }
  # Scalar Definitions
  scalar DateTime
  scalar JSON
  scalar Upload
`;
