package pro.wulfgar.net.on.users.postgis;

import java.io.IOException;
import java.util.Properties;

import com.google.common.base.Preconditions;
import com.mongodb.DB;
import com.mongodb.Mongo;

public class MongoDBRunner {

    private Mongo mongo;

    public void run() throws IOException {

        Properties p = new Properties();
        p.load(this.getClass().getClassLoader().getResourceAsStream("connect.properties"));

        Mongo m = new Mongo(p.getProperty("host"), Integer.parseInt(p.getProperty("port")));
        this.mongo = m;

        DB db = m.getDB(p.getProperty("database"));
        System.out.println(db.getName());
    }

    public Mongo getMongo() {
        Preconditions.checkNotNull(this.mongo, "mongo has not been set.");
        return mongo;
    }
}
