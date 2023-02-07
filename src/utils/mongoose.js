import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
}

export async function dbConnect() {

    if (conn.isConnected) return;
    const db = await connect(process.env.MONGODB_URL, { keepAlive: true, autoIndex:false })
    if (db.connections[0].readyState == 1) conn.isConnected = true;
    console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
    console.log("mongodb is connected");

});



connection.on("error", (error) => {
    console.log(error);
});

