package pro.wulfgar.net.on.users.postgis;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

import org.postgis.LineString;
import org.postgis.Point;

public class PostGisJdbcRunner {

    private static Logger logger = Logger.getLogger(PostGisJdbcRunner.class.getName());
    private static String url = "jdbc:postgresql://localhost:5432/gisdb";
    private static Connection conn;

    // load the driver
    {
        try {
            logger.info("Loading driver...");
            Class.forName("org.postgresql.Driver");
            logger.info("done!");
        } catch (ClassNotFoundException e) {
            logger.severe("Error loading postgres driver from classpath.");
        }
    }

    public void run() {
        // establish a connection
        try {
            logger.info("Connecting to postgres...");
            conn = DriverManager.getConnection(url, "gis", "");
            logger.info("... success!");

            // add the postgis geometry type to the postgres connection
            ((org.postgresql.PGConnection) conn).addDataType("geometry", org.postgis.PGgeometry.class);
            conn.setAutoCommit(false);

            // create table
            /* s.addBatch("CREATE TABLE IF NOT EXISTS data (id INTEGER,name VARCHAR);");
            add geo col
            s.addBatch("SELECT AddGeometryColumn ('data','geo',-1,'GEOMETRY',2);");
            s.executeBatch(); */

            // insert some geo data
            PreparedStatement s =
                    conn.prepareStatement("INSERT into data VALUES (1,'My Geo Linestring',ST_GeomFromEWKT(?));");
            s.setString(1, new LineString(new Point[] { new Point(1, 5), new Point(1, 10) }).toString());
            s.executeUpdate();
            conn.commit();

            // retrieve
            PreparedStatement s1 = conn.prepareStatement("SELECT geo,id from data");
            ResultSet r = s1.executeQuery();
            conn.commit();
            while (r.next()) {
                int id = r.getInt(2);
                logger.info("ID: " + id);
            }
        } catch (SQLException e) {
            try {
                conn.rollback();
            } catch (SQLException e1) {
                logger.severe("Error occured database: " + url);
                e1.printStackTrace();
            }

            logger.severe("Error occured database: " + url);
            e.printStackTrace();
            while (e.getNextException() != null) {
                e.printStackTrace();
            }
        } finally {
            try {
                if (!conn.isClosed())
                    conn.close();
            } catch (SQLException e) {
                logger.severe("An error occured trying to close the connection: " + e.getMessage());
            }
        }
    }
}
