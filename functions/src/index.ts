import functions = require("firebase-functions")
import admin = require("firebase-admin")

admin.initializeApp()

const auth = admin.auth()

exports.addAdminRole = functions.https.onCall(async (data, context) => {
    try {
        const user = await auth.getUserByEmail(data.email)
        await auth.setCustomUserClaims(user.uid, {
            admin: true
        })
        return {
            message: `Success ${data.email} has been made admin`
        }
    } catch (err) {
        return err
    }
})