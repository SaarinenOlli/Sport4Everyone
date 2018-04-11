package fi.academy;

/**
 * Hello world!
 *
 */
public class App 
{


    public String testName(String name) {
        if (name == null){
            return "Hello, my friend.";
        } else if (name == name.toUpperCase()) {
            return "HELLO, " + name + "!";
        }
        return "Hello, " + name + ".";

    }
}
