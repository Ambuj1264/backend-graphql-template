export const userInput = `
  input CreateUserInput {
    email: String!
    password: String!

  }
  input CreateUser{
    email: String!
    password: String!
    isDeleted:Boolean
    mobileNumber: String
    name: String
    role: String
  }
  input forgetInput{
    email: String!
    password: String!
    refressToken:String!
  }
    `;
