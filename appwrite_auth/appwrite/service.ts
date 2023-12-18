
import { ID, Account, Client } from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

const appwriteClient = new Client()

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!
const APPWRIET_PROJECT_ID: string = Config.APPWRIET_PROJECT_ID!

type CreateUserAccount = {
  email: string
  password: string
  name: string
}

type LoginUserAccount = {
  email: string
  password: string
}

class AppwriteService {
  account;

  constructor() {
    appwriteClient.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRIET_PROJECT_ID)

    this.account = new Account(appwriteClient)
  }

  // create a new record of a user account

  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if(userAccount){
        // login the user
        // create login feature
        return this.login({email,password})
      }else{
        return userAccount
      }
    } catch (error) {
      Snackbar.show({
        text: String(error), duration: Snackbar.LENGTH_LONG
      })
      console.log("Appwrite and service :: problem in creating account", error)
    }
  }

  async login({email,password}:LoginUserAccount) {
    try {
      return await this.account.createEmailSession(email,password)
    } catch (error) {
      Snackbar.show({
        text: String(error), duration: Snackbar.LENGTH_LONG
      })
      console.log("Appwrite and service :: problem in loging in user", error)
    }
  }

  async getCurrentUser(){
    try {
      const user = await this.account.get()
    } catch (error) {
      console.log("Appwrite and service :: problem getting current user", error)
    }
  }

  async logout(){
    try {
      const user = await this.account.deleteSession('current')
    } catch (error) {
      console.log("Appwrite and service :: problem in terminating user session", error)
    }
  }
}

export default AppwriteService