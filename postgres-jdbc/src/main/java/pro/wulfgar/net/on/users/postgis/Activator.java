package pro.wulfgar.net.on.users.postgis;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

public class Activator implements BundleActivator {

    public void start(BundleContext arg0) throws Exception {
        System.out.println("STARTED BUNDLE: " + arg0.getBundle().getSymbolicName() + " ("
                + arg0.getBundle().getBundleId() + ")");

        // do some postgres/gis
        PostGisJdbcRunner pgjr = new PostGisJdbcRunner();
        pgjr.run();

        // do some mongo
        MongoDBRunner mdr = new MongoDBRunner();
        mdr.run();

        // do some morphia
        MorphiaRunner mr = new MorphiaRunner();
        mr.run(mdr.getMongo(), mdr.getMongo().getDatabaseNames().get(0));
    }

    public void stop(BundleContext arg0) throws Exception {
        System.out.println("STOPPED BUNDLE: " + arg0.getBundle().getSymbolicName() + " ("
                + arg0.getBundle().getBundleId() + ")");
        System.out.println(arg0.getBundle().getState());
    }

}
