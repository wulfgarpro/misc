Steps to reproduce:

	1. Extract apache-servicemix-4.4.2.tar.gz
	2. Edit etc/jre.properties; add 'sun.misc,\'
	3. Start servicemix; './start'
	4. Login to servicemix; './client -u smx -p smx'
	5. Install mongodb driver; 'osgi:install mvn:org.mongodb/mongo-java-driver/2.9.2`
	6. Build the project and drop in the following wrapped bundles:
		- com.google.code.morphia_0.99.1.20111119_142347-2
		- com.thoughtworks.proxytoys_1.0.0	
	7. Install guava; 'install mvn:com.googlecode.guava-osgi/guava-osgi`
	8. Drop the project into the deploy directory
	9. Make sure it's running with status Active; 'osgi:list'
	
;D
