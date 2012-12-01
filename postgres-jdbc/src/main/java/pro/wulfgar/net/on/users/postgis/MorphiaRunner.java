package pro.wulfgar.net.on.users.postgis;

import com.google.code.morphia.Datastore;
import com.google.code.morphia.Morphia;
import com.mongodb.Mongo;

public class MorphiaRunner {

    public void run(Mongo m, String dbname) {
        Morphia morphia = new Morphia();
        Datastore store = morphia.createDatastore(m, dbname);
        System.out.println("Connected to: " + store.getMongo().getDatabaseNames().get(0));
        store.save(new Integer(1));
        System.out.println("Found: " + store.find(Integer.class));
    }
}
